<template>
  <section class="cta-section" id="join">
    <div class="wrap">
      <span class="eyebrow reveal" style="margin-bottom:20px;">{{ t('cta.eyebrow') }}</span>
      <h2 class="reveal">{{ t('cta.title') }}</h2>
      <p class="reveal">{{ t('cta.subtitle') }}</p>
      <div class="cta-btns reveal">
        <a href="#" class="btn btn-primary">{{ t('cta.btn1') }}</a>
        <a href="#about" class="btn btn-ghost">{{ t('cta.btn2') }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  locale: string
}>()

const { t } = useI18n()
</script>
