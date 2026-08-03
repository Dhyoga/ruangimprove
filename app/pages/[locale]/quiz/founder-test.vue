<template>
  <div class="quiz-page">
    <div class="quiz-app">
      <div class="quiz-header">
        <NuxtLink :to="`/${locale.value}`" class="quiz-logo-link">
          <img src="/RI1.png" alt="RuangImprove" class="logo-img" height="28" />
        </NuxtLink>
      </div>
      <div class="progress-wrap">
        <div class="progress-bar" :style="{ width: progressWidth }"></div>
      </div>
      <div class="steps">
        <!-- Intro -->
        <div v-if="step === 0" class="step active">
          <div class="eyebrow">{{ t('quiz.eyebrow') }}</div>
          <h1>{{ t('quiz.introTitle') }}</h1>
          <p class="sub">{{ t('quiz.introSub') }}</p>
          <button class="btn" @click="go(1)">{{ t('quiz.start') }}</button>
        </div>

        <!-- Name & Email -->
        <div v-if="step === 1" class="step active">
          <div class="meta"><span>Step 1 of {{ questions.length + 1 }}</span></div>
          <h2>{{ t('quiz.nameEmailTitle') }}</h2>
          <input
            type="text"
            :placeholder="t('quiz.namePlaceholder')"
            v-model="name"
            @input="validateStep1"
          />
          <input
            type="email"
            :placeholder="t('quiz.emailPlaceholder')"
            v-model="email"
            @input="validateStep1"
          />
          <div class="footer-nav">
            <button class="btn" :disabled="!canProceed" @click="go(2)">{{ t('quiz.next') }}</button>
          </div>
        </div>

        <!-- Questions -->
        <div v-if="step >= 2 && step < questions.length + 2" class="step active">
          <div class="meta"><span>Step {{ step - 1 }} of {{ questions.length + 1 }}</span></div>
          <h2>{{ step - 1 }}. {{ currentQuestion.text }}</h2>
          <div v-if="currentQuestion.visual" class="color-block" :style="{ background: currentQuestion.visual.value }"></div>
          <div id="optionsWrap">
            <div
              v-for="opt in currentQuestion.options"
              :key="opt.type"
              class="option"
              :class="{ selected: selectedAnswer === opt.type }"
              @click="selectAnswer(opt.type)"
            >
              <div class="dot"></div>
              <span>{{ opt.label }}</span>
            </div>
          </div>
          <div class="footer-nav">
            <button class="btn ghost" @click="go(step - 1)">{{ t('quiz.back') }}</button>
            <button class="btn" :disabled="!selectedAnswer" @click="go(step + 1)">{{ t('quiz.next') }}</button>
          </div>
        </div>

        <!-- Result -->
        <div v-if="step === questions.length + 2 && resultData" class="step active">
          <div class="eyebrow">{{ t('quiz.resultTitle') }}</div>
          <span class="result-badge" :style="{ background: resultData.color }">{{ resultData.title }}</span>
          <h1>{{ t('quiz.resultYouAre', { title: resultData.title }) }}</h1>
          <p class="sub">{{ resultData.desc }}</p>
          <div class="share-row">
            <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`" target="_blank">Facebook</a>
            <a :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`" target="_blank">X</a>
            <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()
const { quizData, computeResult } = await import('~/data/quiz')

const data = computed(() => quizData[locale.value] || quizData.id)
const questions = computed(() => data.value.questions)
const results = computed(() => data.value.results)

const step = ref(0)
const name = ref('')
const email = ref('')
const answers = ref<Record<string, string>>({})
const selectedAnswer = ref('')
const resultData = ref<{ title: string; color: string; desc: string } | null>(null)
const submitted = ref(false)
const pageUrl = ref('')

onMounted(() => {
  pageUrl.value = window.location.href
})

const totalSteps = computed(() => 2 + questions.value.length + 1)
const progressWidth = computed(() => `${(step.value / (totalSteps.value - 1)) * 100}%`)
const currentQuestion = computed(() => questions.value[step.value - 2])

const shareText = computed(() => {
  if (!resultData.value) return ''
  return t('quiz.shareText', { title: resultData.value.title })
})

const canProceed = computed(() => name.value.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))

function go(newStep: number) {
  step.value = newStep
  selectedAnswer.value = ''
}

function validateStep1() {
  // canProceed is computed, no need for manual validation
}

function selectAnswer(type: string) {
  selectedAnswer.value = type
  if (currentQuestion.value) {
    answers.value[currentQuestion.value.id] = type
  }
}

async function submitResult() {
  if (submitted.value || !resultData.value) return
  submitted.value = true

  const winnerKeys = computeResult(answers.value)
  const resultKey = winnerKeys.join('-')

  try {
    await $fetch('/api/quiz/founder-test/submit', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        result: resultKey,
        answers: answers.value,
        locale: locale.value
      }
    })
  } catch (e) {
    // non-blocking
    console.error('Failed to submit quiz', e)
  }
}

watch(step, (newStep) => {
  if (newStep === questions.value.length + 2) {
    const winnerKeys = computeResult(answers.value)
    const r = results.value[winnerKeys[0]]
    if (winnerKeys.length > 1) {
      const parts = winnerKeys.map(k => results.value[k])
      const typesText = parts.map(p => p.title).join(', ')
      resultData.value = {
        title: parts.map(p => p.title).join('-'),
        color: parts[0].color,
        desc: t('quiz.resultHybrid', { types: typesText })
      }
    } else {
      resultData.value = {
        title: r.title,
        color: r.color,
        desc: r.desc
      }
    }
    submitResult()
  }
})

useHead({
  htmlAttrs: { lang: locale.value }
})
</script>

<style scoped>
.quiz-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #faf7f2;
  color: #1b1730;
}
.quiz-header {
  padding: 14px 32px 0;
}
.quiz-logo-link {
  display: inline-flex;
  text-decoration: none;
}
.quiz-app {
  width: 100%;
  max-width: 520px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(27,23,48,0.08);
  overflow: hidden;
  border: 1px solid #e7e2d8;
}
.progress-wrap {
  height: 6px;
  background: #efeaff;
}
.progress-bar {
  height: 100%;
  background: #5b3df5;
  transition: width .35s ease;
}
.steps {
  padding: 36px 32px 32px;
}
.step {
  display: none;
  animation: fade .3s ease;
}
.step.active {
  display: block;
}
@keyframes fade {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #5b3df5;
  margin-bottom: 10px;
}
h1 {
  font-size: 28px;
  line-height: 1.15;
  margin: 0 0 12px;
}
h2 {
  font-size: 22px;
  line-height: 1.25;
  margin: 0 0 22px;
}
p.sub {
  color: #6b6580;
  font-size: 15px;
  margin-top: 0;
}
.btn {
  appearance: none;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  padding: 14px 22px;
  border-radius: 12px;
  width: 100%;
  margin-top: 8px;
  background: #5b3df5;
  color: #fff;
  transition: transform .15s ease, opacity .15s ease;
}
.btn:hover {
  transform: translateY(-1px);
}
.btn:disabled {
  opacity: .4;
  cursor: not-allowed;
  transform: none;
}
.btn.ghost {
  background: transparent;
  color: #5b3df5;
  border: 1.5px solid #5b3df5;
}
input[type=text], input[type=email] {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1.5px solid #e7e2d8;
  font-size: 15px;
  margin-bottom: 14px;
  background: #fff;
  color: #1b1730;
}
input:focus {
  outline: 2px solid #5b3df5;
  outline-offset: 1px;
}
.option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1.5px solid #e7e2d8;
  margin-bottom: 10px;
  cursor: pointer;
  transition: .15s ease;
}
.option:hover {
  border-color: #5b3df5;
}
.option.selected {
  border-color: #5b3df5;
  background: #efeaff;
}
.option .dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #e7e2d8;
  flex-shrink: 0;
  position: relative;
}
.option.selected .dot {
  border-color: #5b3df5;
}
.option.selected .dot::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: #5b3df5;
}
.color-block {
  width: 100%;
  height: 160px;
  border-radius: 14px;
  margin-bottom: 20px;
  border: 1px solid rgba(0,0,0,0.06);
}
.meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #948e9f;
  margin-bottom: 6px;
}
.footer-nav {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}
.footer-nav .btn {
  margin-top: 0;
}
.result-badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 13px;
  color: #fff;
  margin-bottom: 16px;
}
.share-row {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.share-row a {
  flex: 1;
  text-align: center;
  padding: 12px;
  border-radius: 10px;
  border: 1.5px solid #e7e2d8;
  text-decoration: none;
  color: #1b1730;
  font-size: 13px;
  font-weight: 600;
}
</style>
