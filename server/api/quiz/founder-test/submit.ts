import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.NUXT_DATABASE_URL || process.env.DATABASE_URL || '' } },
})

export default defineEventHandler(async (event) => {
  const databaseUrl = process.env.NUXT_DATABASE_URL || process.env.DATABASE_URL
  if (!databaseUrl) {
    return { success: false, message: 'Database configuration is missing' }
  }

  try {
    const body = await readBody(event)
    const { name, email, result, answers, locale } = body as {
      name: string
      email: string
      result: string
      answers: Record<string, string>
      locale: string
    }

    if (!name || !email || !result || !answers || !locale) {
      return { success: false, message: 'Missing required fields' }
    }

    const record = await prisma.quizSubmission.create({
      data: {
        name,
        email,
        result,
        answers,
        locale,
      },
      select: { id: true },
    })

    return { success: true, id: record.id }
  } catch (error) {
    console.error('[quiz/submit] Failed to submit quiz:', error)
    return { success: false, message: 'Failed to submit quiz' }
  }
})
