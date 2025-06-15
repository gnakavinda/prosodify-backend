// app/api/auth/login-test/route.ts
import { NextRequest, NextResponse } from 'next/server'
import sql from 'mssql'

export async function POST(request: NextRequest) {
  try {
    console.log('Login test endpoint hit')
    
    // Check if we can parse the request body
    const body = await request.json()
    console.log('Request body:', body)
    
    // Check environment variables
    const hasDbConfig = !!(process.env.AZURE_SQL_SERVER && process.env.AZURE_SQL_DATABASE)
    const hasJwtSecret = !!process.env.JWT_SECRET
    
    console.log('Environment check:', { hasDbConfig, hasJwtSecret })
    
    if (!body.email || !body.password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }
    
    // Test database connection
    const config = {
      server: process.env.AZURE_SQL_SERVER!,
      database: process.env.AZURE_SQL_DATABASE!,
      user: process.env.AZURE_SQL_USERNAME!,
      password: process.env.AZURE_SQL_PASSWORD!,
      options: {
        encrypt: true,
        trustServerCertificate: false
      }
    }
    
    const pool = await sql.connect(config)
    const result = await pool.request()
      .input('email', sql.VarChar, body.email)
      .query('SELECT id, email, name FROM users WHERE email = @email')
    
    await pool.close()
    
    return NextResponse.json({
      success: true,
      message: 'Login test successful',
      userFound: result.recordset.length > 0,
      user: result.recordset[0] || null,
      environment: {
        hasDbConfig,
        hasJwtSecret,
        server: process.env.AZURE_SQL_SERVER
      }
    })
    
  } catch (error) {
    console.error('Login test error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}