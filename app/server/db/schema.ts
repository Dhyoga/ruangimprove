export type QuizSubmission = {
  id: number
  name: string
  email: string
  result: string
  answers: Record<string, unknown>
  locale: string
  created_at: string
}
