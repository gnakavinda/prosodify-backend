// app/api/tts/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import * as sdk from 'microsoft-cognitiveservices-speech-sdk'
import { canUserUseCharacters, updateUserUsage, saveAudioFile, getUserWithSubscription } from '../../../../lib/database'

interface JWTPayload {
  userId: string
  email: string
}

export async function POST(request: NextRequest) {
  try {
    // 1. Check authentication
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const token = authHeader.split(' ')[1]
    let decoded: JWTPayload

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload
    } catch {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    // 2. Get request data
    const { text, voice, style, rate, pitch, volume, isPreview = false } = await request.json()

    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 })
    }

    const characterCount = text.length

    // 3. Check usage limits (skip for preview)
    if (!isPreview) {
      const usageCheck = await canUserUseCharacters(decoded.userId, characterCount)
      
      if (!usageCheck.canUse) {
        return NextResponse.json({
          error: 'Usage limit exceeded',
          current: usageCheck.currentUsage,
          limit: usageCheck.limit,
          needed: characterCount
        }, { status: 429 })
      }
    }

    // 4. Configure Azure Speech
    const speechConfig = sdk.SpeechConfig.fromSubscription(
      process.env.AZURE_SPEECH_KEY!,
      process.env.AZURE_SPEECH_REGION!
    )
    speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Audio16Khz128KBitRateMonoMp3

    const synthesizer = new sdk.SpeechSynthesizer(speechConfig)

    // 5. Build SSML
    let ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">`
    ssml += `<voice name="${voice || 'en-US-JennyNeural'}">`
    
    if (style && style !== 'default') {
      ssml += `<mstts:express-as style="${style}">`
    }
    
    ssml += `<prosody rate="${rate || 1.0}" pitch="${pitch ? (pitch - 1) * 50 : 0}%" volume="${volume ? volume * 100 : 100}%">`
    ssml += text
    ssml += `</prosody>`
    
    if (style && style !== 'default') {
      ssml += `</mstts:express-as>`
    }
    
    ssml += `</voice></speak>`

    // 6. Generate speech
    const result = await new Promise<sdk.SpeechSynthesisResult>((resolve, reject) => {
      synthesizer.speakSsmlAsync(
        ssml,
        (result) => {
          synthesizer.close()
          resolve(result)
        },
        (error) => {
          synthesizer.close()
          reject(error)
        }
      )
    })

    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
      const audioBuffer = Buffer.from(result.audioData)
      const base64Audio = audioBuffer.toString('base64')

      // 7. Update usage and save record (only for non-preview)
      if (!isPreview) {
        await updateUserUsage(decoded.userId, characterCount)
        
        await saveAudioFile({
          userId: decoded.userId,
          filename: `tts_${Date.now()}.mp3`,
          text: text,
          voice: voice || 'en-US-JennyNeural',
          settings: { style, rate, pitch, volume },
          fileSize: audioBuffer.length
        })
      }

      // 8. Get updated usage info
      const user = await getUserWithSubscription(decoded.userId)
      const limits = { free: 5000, pro: 100000, premium: 500000 }
      const userLimit = limits[user?.subscriptionStatus as keyof typeof limits] || 5000

      return NextResponse.json({
        success: true,
        audio: base64Audio,
        format: 'mp3',
        usage: {
          current: user?.monthlyUsage || 0,
          limit: userLimit,
          remaining: userLimit - (user?.monthlyUsage || 0)
        }
      })

    } else {
      console.error('Speech synthesis failed:', result.errorDetails)
      return NextResponse.json({
        error: 'Speech synthesis failed',
        details: result.errorDetails
      }, { status: 500 })
    }

  } catch (error) {
    console.error('TTS API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}