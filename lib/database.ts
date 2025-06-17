// lib/database.ts
import sql from 'mssql'

const config: sql.config = {
  server: process.env.AZURE_SQL_SERVER!,
  database: process.env.AZURE_SQL_DATABASE!,
  authentication: {
    type: 'default',
    options: {
      userName: process.env.AZURE_SQL_USERNAME!,
      password: process.env.AZURE_SQL_PASSWORD!,
    }
  },
  options: {
    encrypt: true, // Required for Azure
    enableArithAbort: true,
  },
}

let pool: sql.ConnectionPool | undefined

export async function getDbConnection() {
  if (!pool) {
    pool = new sql.ConnectionPool(config)
    await pool.connect()
  }
  return pool
}

// Initialize database tables
export async function initializeDatabase() {
  try {
    const pool = await getDbConnection()
    
    // Create users table
    await pool.request().query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='users' AND xtype='U')
      CREATE TABLE users (
        id NVARCHAR(50) PRIMARY KEY,
        email NVARCHAR(255) UNIQUE NOT NULL,
        name NVARCHAR(255) NOT NULL,
        password NVARCHAR(255) NOT NULL,
        createdAt DATETIME2 DEFAULT GETDATE(),
        updatedAt DATETIME2 DEFAULT GETDATE(),
        last_login_at DATETIME2,
        login_count INT DEFAULT 0,
        subscriptionStatus NVARCHAR(20) DEFAULT 'free',
        monthlyUsage INT DEFAULT 0,
        usageResetDate DATETIME2 DEFAULT GETDATE()
      )
    `)

    // Create audio_files table for TTS history
    await pool.request().query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='audio_files' AND xtype='U')
      CREATE TABLE audio_files (
        id NVARCHAR(50) PRIMARY KEY,
        userId NVARCHAR(50) NOT NULL,
        filename NVARCHAR(255) NOT NULL,
        text NVARCHAR(MAX) NOT NULL,
        voice NVARCHAR(100),
        settings NVARCHAR(MAX), -- JSON string of voice settings
        audioUrl NVARCHAR(500), -- Azure Blob Storage URL
        fileSize INT, -- File size in bytes
        createdAt DATETIME2 DEFAULT GETDATE(),
        FOREIGN KEY (userId) REFERENCES users(id)
      )
    `)

    console.log('Database tables initialized successfully')
  } catch (error) {
    console.error('Database initialization error:', error)
    throw error
  }
}

// User operations
export async function createUser(user: {
  id: string
  email: string
  name: string
  password: string
}) {
  const pool = await getDbConnection()
  
  await pool.request()
    .input('id', sql.NVarChar(50), user.id)
    .input('email', sql.NVarChar(255), user.email)
    .input('name', sql.NVarChar(255), user.name)
    .input('password', sql.NVarChar(255), user.password)
    .query(`
      INSERT INTO users (id, email, name, password)
      VALUES (@id, @email, @name, @password)
    `)
}

export async function findUserByEmail(email: string) {
  const pool = await getDbConnection()
  
  const result = await pool.request()
    .input('email', sql.NVarChar(255), email.toLowerCase())
    .query('SELECT * FROM users WHERE email = @email')
  
  return result.recordset[0] || null
}

export async function findUserById(id: string) {
  const pool = await getDbConnection()
  
  const result = await pool.request()
    .input('id', sql.NVarChar(50), id)
    .query('SELECT * FROM users WHERE id = @id')
  
  return result.recordset[0] || null
}

// Login tracking functions
export async function updateLoginTracking(userId: string) {
  const pool = await getDbConnection()
  
  await pool.request()
    .input('userId', sql.NVarChar(50), userId)
    .query(`
      UPDATE users 
      SET last_login_at = GETDATE(),
          login_count = ISNULL(login_count, 0) + 1
      WHERE id = @userId
    `)
}

export async function getUserLoginHistory(userId: string) {
  const pool = await getDbConnection()
  
  const result = await pool.request()
    .input('userId', sql.NVarChar(50), userId)
    .query(`
      SELECT 
        id, email, name, 
        last_login_at, 
        login_count,
        createdAt
      FROM users 
      WHERE id = @userId
    `)
  
  return result.recordset[0] || null
}

// SaaS Functions - Get user with subscription info
export async function getUserWithSubscription(userId: string) {
  const pool = await getDbConnection()
  
  const result = await pool.request()
    .input('userId', sql.NVarChar(50), userId)
    .query(`
      SELECT 
        id, email, name, 
        subscriptionStatus, monthlyUsage, usageResetDate,
        last_login_at, login_count, createdAt
      FROM users 
      WHERE id = @userId
    `)
  
  return result.recordset[0] || null
}

// Update user usage
export async function updateUserUsage(userId: string, charactersUsed: number) {
  const pool = await getDbConnection()
  
  await pool.request()
    .input('userId', sql.NVarChar(50), userId)
    .input('charactersUsed', sql.Int, charactersUsed)
    .query(`
      UPDATE users 
      SET monthlyUsage = monthlyUsage + @charactersUsed
      WHERE id = @userId
    `)
}

// Check if user can use characters
export async function canUserUseCharacters(userId: string, charactersNeeded: number): Promise<{ canUse: boolean, currentUsage: number, limit: number }> {
  const user = await getUserWithSubscription(userId)
  
  if (!user) {
    return { canUse: false, currentUsage: 0, limit: 0 }
  }

  const limits = {
    free: 5000,
    pro: 100000,
    premium: 500000
  }

  const userLimit = limits[user.subscriptionStatus as keyof typeof limits] || 5000
  const canUse = (user.monthlyUsage + charactersNeeded) <= userLimit

  return {
    canUse,
    currentUsage: user.monthlyUsage,
    limit: userLimit
  }
}

// Reset monthly usage (call this monthly)
export async function resetMonthlyUsage() {
  const pool = await getDbConnection()
  
  await pool.request().query(`
    UPDATE users 
    SET monthlyUsage = 0, 
        usageResetDate = GETDATE()
    WHERE DATEDIFF(month, usageResetDate, GETDATE()) >= 1
  `)
}

// Save audio file record
export async function saveAudioFile(audioData: {
  userId: string
  filename: string
  text: string
  voice?: string
  settings?: any
  audioUrl?: string
  fileSize?: number
}) {
  const pool = await getDbConnection()
  
  const audioId = `audio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  
  await pool.request()
    .input('id', sql.NVarChar(50), audioId)
    .input('userId', sql.NVarChar(50), audioData.userId)
    .input('filename', sql.NVarChar(255), audioData.filename)
    .input('text', sql.NVarChar(sql.MAX), audioData.text)
    .input('voice', sql.NVarChar(100), audioData.voice || null)
    .input('settings', sql.NVarChar(sql.MAX), audioData.settings ? JSON.stringify(audioData.settings) : null)
    .input('audioUrl', sql.NVarChar(500), audioData.audioUrl || null)
    .input('fileSize', sql.Int, audioData.fileSize || null)
    .query(`
      INSERT INTO audio_files (id, userId, filename, text, voice, settings, audioUrl, fileSize)
      VALUES (@id, @userId, @filename, @text, @voice, @settings, @audioUrl, @fileSize)
    `)
  
  return audioId
}

// Get user's audio files
export async function getUserAudioFiles(userId: string, limit: number = 10) {
  const pool = await getDbConnection()
  
  const result = await pool.request()
    .input('userId', sql.NVarChar(50), userId)
    .input('limit', sql.Int, limit)
    .query(`
      SELECT TOP (@limit)
        id, filename, text, voice, settings, audioUrl, fileSize, createdAt
      FROM audio_files 
      WHERE userId = @userId
      ORDER BY createdAt DESC
    `)
  
  return result.recordset
}

// Get user dashboard data
export async function getUserDashboard(userId: string) {
  const user = await getUserWithSubscription(userId)
  const recentFiles = await getUserAudioFiles(userId, 5)
  
  const limits = {
    free: 5000,
    pro: 100000,
    premium: 500000
  }

  const userLimit = limits[user?.subscriptionStatus as keyof typeof limits] || 5000

  return {
    user: {
      id: user?.id,
      email: user?.email,
      name: user?.name,
      subscriptionStatus: user?.subscriptionStatus || 'free',
      monthlyUsage: user?.monthlyUsage || 0,
      usageResetDate: user?.usageResetDate
    },
    usage: {
      current: user?.monthlyUsage || 0,
      limit: userLimit,
      remaining: userLimit - (user?.monthlyUsage || 0)
    },
    recentFiles
  }
}