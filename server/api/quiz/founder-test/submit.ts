import Database from 'better-sqlite3'
import { writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'

const DB_PATH = path.resolve('.data/quiz.db')

function getDb() {
  mkdirSync(path.dirname(DB_PATH), { recursive: true })
  const db = new Database(DB_PATH)
  db.exec(`
    CREATE TABLE IF NOT EXISTS quiz_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      result TEXT NOT NULL,
      answers TEXT NOT NULL,
      locale TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)
  return db
}

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
  }

  const body = await readBody<{
    name: string
    email: string
    result: string
    answers: Record<string, string>
    locale: string
  }>(event)

  const { name, email, result, answers, locale } = body

  if (!name || !email || !result || !answers || !locale) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  const db = getDb()
  const stmt = db.prepare(`
    INSERT INTO quiz_submissions (name, email, result, answers, locale)
    VALUES (?, ?, ?, ?, ?)
  `)

  const info = stmt.run(name, email, result, JSON.stringify(answers), locale)

  return { success: true, id: info.lastInsertRowid }
})
