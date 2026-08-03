export default defineNitroPlugin(async () => {
  if (import.meta.server) {
    const databaseUrl = process.env.NUXT_DATABASE_URL
    if (!databaseUrl) return

    try {
      const { Client } = await import('pg')
      const client = new Client({ connectionString: databaseUrl })
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

      await client.end()
    } catch {
      // ignore startup migration errors; API route will retry on submit
    }
  }
})
