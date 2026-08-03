<template>
  <section class="section" id="programs">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow" style="margin-bottom:16px;">{{ t('programs.eyebrow') }}</span>
        <h2>{{ t('programs.title') }}</h2>
        <p>{{ t('programs.subtitle') }}</p>
      </div>
      <div class="programs-row">
        <div class="prog-card reveal">
          <div class="prog-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l9 5-9 5-9-5 9-5z" stroke="#6C5CE7" stroke-width="1.8" stroke-linejoin="round"/><path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" stroke="#6C5CE7" stroke-width="1.8" stroke-linecap="round"/></svg></div>
          <h3>{{ t('programs.card1Title') }}</h3>
          <p>{{ t('programs.card1Desc') }}</p>
          <span class="prog-tag">{{ t('programs.card1Tag') }}</span>
        </div>
        <div class="prog-card reveal">
          <div class="prog-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 5h16M4 12h16M4 19h10" stroke="#E8BE00" stroke-width="1.8" stroke-linecap="round"/></svg></div>
          <h3>{{ t('programs.card2Title') }}</h3>
          <p>{{ t('programs.card2Desc') }}</p>
          <span class="prog-tag">{{ t('programs.card2Tag') }}</span>
        </div>
        <div class="prog-card reveal">
          <div class="prog-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="7" rx="1.5" stroke="#00B894" stroke-width="1.8"/><rect x="13" y="4" width="7" height="7" rx="1.5" stroke="#00B894" stroke-width="1.8"/><rect x="4" y="13" width="7" height="7" rx="1.5" stroke="#00B894" stroke-width="1.8"/><rect x="13" y="13" width="7" height="7" rx="1.5" stroke="#00B894" stroke-width="1.8"/></svg></div>
          <h3>{{ t('programs.card3Title') }}</h3>
          <p>{{ t('programs.card3Desc') }}</p>
          <span class="prog-tag">{{ t('programs.card3Tag') }}</span>
        </div>
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
