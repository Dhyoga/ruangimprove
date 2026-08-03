<template>
  <div>
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'RuangImprove — Ruang Buat Kamu Naik Level'
})

onMounted(() => {
  useRevealOnScroll()
})
</script>
