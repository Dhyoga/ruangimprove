export default defineNuxtRouteMiddleware((to) => {
  const validLocales = ['id', 'en']
  const locale = to.params.locale as string
  const path = to.path

  // /quiz and /quiz/* without locale -> /id/quiz/founder-test
  if (path === '/quiz' || path.startsWith('/quiz/')) {
    return navigateTo('/id/quiz/founder-test')
  }

  // /id/quiz or /en/quiz -> /id/quiz/founder-test or /en/quiz/founder-test
  if (path === '/id/quiz' || path === '/en/quiz') {
    return navigateTo(`/${locale}/quiz/founder-test`)
  }

  if (!validLocales.includes(locale)) {
    return navigateTo('/id')
  }
})
