<template>
  <header>
    <nav>
      <NuxtLink :to="`/${locale.value}`">
        <img src="/RI1.png" :alt="t('header.logoAlt')" class="logo-img" height="36" />
      </NuxtLink>
      <ul class="nav-links">
        <li><a :href="navHref('#programs')">{{ t('header.program') }}</a></li>
        <li><a :href="navHref('#about')" class="active">{{ t('header.about') }}</a></li>
        <li><a :href="navHref('#journey')">{{ t('header.journey') }}</a></li>
        <li><a href="/quiz/founder-test">Quiz</a></li>
      </ul>
      <div class="nav-actions">
        <a :href="navHref('#join')" class="btn btn-primary btn-sm">{{ t('header.joinCircle') }}</a>
        <button @click="toggleLocale" class="lang-btn" type="button">
          {{ t('header.switchTo') }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()

const isQuizPage = computed(() => route.path.includes('/quiz/'))
const navHref = (hash: string) => {
  if (isQuizPage.value) {
    return `/${locale.value}${hash}`
  }
  return hash
}

const toggleLocale = () => {
  const newLocale = locale.value === 'id' ? 'en' : 'id'
  const currentPath = route.path
  const pathWithoutLocale = currentPath.replace(/^\/(id|en)/, '') || '/'
  navigateTo(`/${newLocale}${pathWithoutLocale}`)
}
</script>

<style scoped>
.lang-btn {
  margin-left: 10px;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1.5px solid var(--accent, #5b3df5);
  background: transparent;
  color: var(--accent, #5b3df5);
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
