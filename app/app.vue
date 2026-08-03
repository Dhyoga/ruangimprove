<template>
  <div>
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

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
