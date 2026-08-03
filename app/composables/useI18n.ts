import idMessages from '~/i18n/id.json'
import enMessages from '~/i18n/en.json'

const messages = {
  id: idMessages,
  en: enMessages
}

export function useI18n() {
  const route = useRoute()

  const locale = computed(() => {
    const routeLocale = route.params.locale as string
    return ['id', 'en'].includes(routeLocale) ? routeLocale : 'id'
  })

  const t = (key: string, replacements?: Record<string, string>) => {
    const keys = key.split('.')
    let value: any = messages[locale.value]
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    if (typeof value !== 'string') return key
    if (replacements) {
      return value.replace(/\{(\w+)\}/g, (_, match) => replacements[match] || `{${match}}`)
    }
    return value
  }

  const setLocale = (newLocale: string) => {
    if (process.client) {
      document.cookie = `locale=${newLocale};path=/;max-age=31536000`
    }
  }

  return {
    locale,
    t,
    setLocale
  }
}
