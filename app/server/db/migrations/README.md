# Quiz DB Migrations

Run these SQL files manually in the **Supabase SQL Editor** during deployment or schema changes.

## How to run in Supabase SQL Editor

1. Open your project at [supabase.com](https://supabase.com) → **SQL Editor**
2. Paste the content of the migration file into the query editor
3. Click **Run** (or press `Ctrl+Enter` / `Cmd+Enter`)

The SQL statements are idempotent (`CREATE TABLE IF NOT EXISTS`), so they are safe to run multiple times.

## Files

- `001_create_quiz_submissions.sql` — creates the `public.quiz_submissions` table.
