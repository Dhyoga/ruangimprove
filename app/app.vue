<template>
  <div class="app-shell" :class="{ 'is-quiz': isQuizPage }">
    <TheHeader />
    <main class="app-main">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const isQuizPage = computed(() => route.path.includes('/quiz/'))

useHead({
  title: 'RuangImprove — Ruang Buat Kamu Naik Level'
})

onMounted(() => {
  useRevealOnScroll()
})

watch(() => route.fullPath, () => {
  nextTick(() => {
    useRevealOnScroll()
  })
})
</script>

<style scoped>
.app-shell.is-quiz {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.app-shell.is-quiz .app-main {
  flex: 1;
  display: flex;
}
</style>
