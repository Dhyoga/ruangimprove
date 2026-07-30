<template>
  <div>
    <TheHeader />
    <HeroSection />
    <PainPointsSection />
    <AboutSection />
    <ProgramsSection />
    <JourneySection />
    <TestimonialSection />
    <CtaSection />
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
