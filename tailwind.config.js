/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js}',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F8FC',
        'paper-note': '#FFFDF6',
        ink: '#1E1B4B',
        'ink-soft': '#565277',
        'ink-faint': '#8783A6',
        violet: '#6C5CE7',
        'violet-dark': '#4E3FD1',
        'violet-tint': '#EDEBFC',
        highlighter: '#FFD93D',
        'highlighter-dark': '#E8BE00',
        mint: '#00B894',
        coral: '#FF6B6B',
        line: '#E4E1F5'
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        DEFAULT: '0 8px 24px rgba(30,27,75,0.08)',
        lift: '0 16px 40px rgba(30,27,75,0.14)'
      }
    }
  },
  plugins: []
}
