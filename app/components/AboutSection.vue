<template>
  <section class="section" id="about">
    <div class="wrap about-grid">
      <div class="about-visual reveal">
        <div class="desk-card">
          <img src="/RI1.png" alt="RuangImprove" width="420" height="380" />
        </div>
      </div>

      <div class="about-copy reveal">
        <span class="eyebrow kicker-line" style="margin-bottom:18px;">{{ t('about.eyebrow') }}</span>
        <h2>{{ t('about.title') }}</h2>
        <p>{{ t('about.p1') }}</p>
        <p>{{ t('about.p2') }}</p>
        <p><span class="lead-highlight">{{ t('about.p3') }}</span></p>
        <div class="stat-row" style="display:none;">
          <div class="stat"><b>{{ t('about.stat1') }}</b><span>{{ t('about.stat1Label') }}</span></div>
          <div class="stat"><b>{{ t('about.stat2') }}</b><span>{{ t('about.stat2Label') }}</span></div>
          <div class="stat"><b>{{ t('about.stat3') }}</b><span>{{ t('about.stat3Label') }}</span></div>
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
