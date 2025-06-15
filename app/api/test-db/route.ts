import { NextRequest, NextResponse } from 'next/server'
import sql from 'mssql'

export async function GET() {
  try {
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

    console.log('Connecting to database:', config.server)
    
    const pool = await sql.connect(config)
    const result = await pool.request().query('SELECT 1 as test, GETDATE() as currentTime')
    await pool.close()
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful!',
      result: result.recordset
    })
  } catch (error) {
    console.error('Database test failed:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Database connection failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}