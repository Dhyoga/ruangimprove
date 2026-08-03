<template>
  <div>
    <HeroSection :locale="locale" />
    <PainPointsSection />
    <AboutSection :locale="locale" />
    <ProgramsSection :locale="locale" />
    <JourneySection />
    <TestimonialSection />
    <CtaSection :locale="locale" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const locale = computed(() => route.params.locale as string)

useHead({
  htmlAttrs: { lang: locale.value },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | RuangImprove` : 'RuangImprove'
  }
})
</script>
