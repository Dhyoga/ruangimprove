export default defineEventHandler(async (event) => {
  const databaseUrl = process.env.NUXT_DATABASE_URL
  if (!databaseUrl) {
    return { success: false, message: 'Database configuration is missing' }
  }

  let client: import('pg').Client | null = null
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

    const { Client } = await import('pg')
    client = new Client({ connectionString: databaseUrl })
    await client.connect()

    await client.query(`
      CREATE TABLE IF NOT EXISTS quiz_submissions (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        result TEXT NOT NULL,
        answers JSONB NOT NULL,
        locale TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `)

    const insertQuery = `
      INSERT INTO quiz_submissions (name, email, result, answers, locale)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `
    const values = [name, email, result, answers, locale]
    const insertResult = await client.query(insertQuery, values)

    return { success: true, id: insertResult.rows[0].id }
  } catch (error) {
    return { success: false, message: 'Failed to submit quiz' }
  } finally {
    if (client) {
      try {
        await client.end()
      } catch {
        // ignore cleanup errors
      }
    }
  }
})
