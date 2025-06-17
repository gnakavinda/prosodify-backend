// app/api/user/dashboard/route.ts
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { getUserDashboard } from '../../../../lib/database'

interface JWTPayload {
  userId: string
  email: string
}

export async function GET(request: NextRequest) {
  try {
    // Check authentication
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

    // Get dashboard data
    const dashboardData = await getUserDashboard(decoded.userId)

    return NextResponse.json({
      success: true,
      ...dashboardData
    })

  } catch (error) {
    console.error('Dashboard API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}