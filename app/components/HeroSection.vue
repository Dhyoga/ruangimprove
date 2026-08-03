<template>
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <span class="eyebrow reveal">{{ t('hero.eyebrow') }}</span>
        <h1 class="reveal">
          <span class="accent">
            {{ t('hero.title').split('Naik Level.')[0] }}
            <svg class="underline-svg" viewBox="0 0 300 16" preserveAspectRatio="none"><path d="M2 10 C 60 2, 240 2, 298 9" stroke="#FFD93D" stroke-width="10" fill="none" stroke-linecap="round"/></svg>
          </span>
          Naik Level.
        </h1>
        <p class="lede reveal">{{ t('hero.lede') }}</p>
        <div class="hero-ctas reveal">
          <a href="#join" class="btn btn-primary">{{ t('hero.cta1') }}</a>
          <a href="#about" class="btn btn-ghost">{{ t('hero.cta2') }}</a>
        </div>
        <div class="hero-proof reveal d-none" style="display: none;">
          <div class="avatars">
            <span>A</span><span>R</span><span>D</span><span>+</span>
          </div>
          <span>{{ t('hero.proof') }}</span>
        </div>
      </div>

      <div class="chat-card reveal">
        <div class="chat-head">
          <span class="chat-title">{{ t('hero.chatTitle') }}</span>
          <span class="status">Online</span>
        </div>
        <div class="bubble left">Kak, gue bingung mau develop diri mulai dari mana... 😭</div>
        <div class="bubble right">Santai. Di RuangImprove ada squad bareng temen seangkatan + mentor yang udah ngejalanin duluan.</div>
        <div class="bubble left">Mentornya kating doang kan, kak?</div>
        <div class="bubble right alt">Nah, ini bedanya. Ada aja mentor kita yang udah lulus dan kerja, tapi mereka juga masih terus belajar kok kayak kita. Jadi ngobrolnya bareng-bareng, real talk, bukan digurui.</div>
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
