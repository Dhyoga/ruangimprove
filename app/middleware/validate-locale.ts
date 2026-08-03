export default defineNuxtRouteMiddleware((to) => {
  const validLocales = ['id', 'en']
  const locale = to.params.locale as string
  if (!validLocales.includes(locale)) {
    return navigateTo('/id')
  }
})
