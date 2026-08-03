export interface QuizOption {
  label: string
  type: string
}

export interface QuizQuestion {
  id: string
  text: string
  options: QuizOption[]
  visual?: { type: string; value: string }
}

export interface QuizResult {
  title: string
  color: string
  desc: string
}

export interface QuizData {
  questions: QuizQuestion[]
  results: Record<string, QuizResult>
}

export const quizData: Record<string, QuizData> = {
  id: {
    questions: [
      {
        id: "q2",
        text: "Kamu sarapan apa hari ini?",
        options: [
          { label: "Apa adanya di kulkas", type: "hacker" },
          { label: "Cereal atau roti buatan sendiri", type: "hustler" },
          { label: "Kopi", type: "hipster" },
        ]
      },
      {
        id: "q3",
        text: "Dalam rapat tim, aku biasanya:",
        options: [
          { label: "Diam-diem nurutin", type: "hacker" },
          { label: "Bicara dan catat catatan", type: "hustler" },
          { label: "Pedesan coret-coretan", type: "hipster" },
        ]
      },
      {
        id: "q4",
        text: "Aku punya:",
        options: [
          { label: "Beberapa sahabat dekat", type: "hipster" },
          { label: "Banyak teman/kelompok teman", type: "hustler" },
          { label: "Kelompok kecil yang beragam tapi akrab", type: "hacker" },
        ]
      },
      {
        id: "q5",
        text: "Warna ini:",
        visual: { type: "color", value: "rgb(0,255,255)" },
        options: [
          { label: "R:0 G:255 B:255", type: "hacker" },
          { label: "Cerah dan mencolok", type: "hustler" },
          { label: "Campuran warna yang nyaman dan enak dipandang", type: "hipster" },
        ]
      },
      {
        id: "q6",
        text: "Kalau punya banyak duit, kamu lebih suka belanja di:",
        options: [
          { label: "Uniqlo", type: "hacker" },
          { label: "Hugo Boss", type: "hustler" },
          { label: "Boutique kecil", type: "hipster" },
        ]
      },
      {
        id: "q7",
        text: "Apakah kamu orang yang:",
        options: [
          { label: "Fokus satu hal dalam waktu yang sama", type: "hacker" },
          { label: "Banyak hal sekaligus", type: "hustler" },
          { label: "Pikir semua detail sebelum mulai", type: "hipster" },
        ]
      },
      {
        id: "q8",
        text: "Steve Jobs adalah:",
        options: [
          { label: "Genius teknis", type: "hacker" },
          { label: "Genius bisnis", type: "hustler" },
          { label: "Genius desain", type: "hipster" },
        ]
      },
    ],
    results: {
      hacker: {
        title: "Hacker",
        color: "#1f8a70",
        desc: "Hacker mengembangkan teknologi baru untuk bisnis, membuat prototipe produk, dan bekerja pada pengembangan produk."
      },
      hipster: {
        title: "Hipster",
        color: "#c9781a",
        desc: "Hipster membentuk tampilan dan rasa produk — terobsesi dengan desain, pengalaman pengguna, dan cerita yang dibrandingkan."
      },
      hustler: {
        title: "Hustler",
        color: "#c0355f",
        desc: "Hustler mendorong bisnis maju — penjualan, deal, kemitraan, dan memastikan produk benar-benar sampai ke orang."
      }
    }
  },
  en: {
    questions: [
      {
        id: "q2",
        text: "What do you eat for breakfast?",
        options: [
          { label: "Whatever is in my fridge", type: "hacker" },
          { label: "Home made cereal or toast", type: "hustler" },
          { label: "Coffee", type: "hipster" },
        ]
      },
      {
        id: "q3",
        text: "In a team meeting I am most likely to be:",
        options: [
          { label: "Listening quietly", type: "hacker" },
          { label: "Talking and taking notes", type: "hustler" },
          { label: "Doodling", type: "hipster" },
        ]
      },
      {
        id: "q4",
        text: "I have:",
        options: [
          { label: "A few best friends", type: "hipster" },
          { label: "Lots of friends / friend groups", type: "hustler" },
          { label: "A small diverse group of close friends", type: "hacker" },
        ]
      },
      {
        id: "q5",
        text: "This colour is:",
        visual: { type: "color", value: "rgb(0,255,255)" },
        options: [
          { label: "R:0 G:255 B:255", type: "hacker" },
          { label: "Nice and bright", type: "hustler" },
          { label: "A comfortable blend of colours that creates a nice feeling", type: "hipster" },
        ]
      },
      {
        id: "q6",
        text: "If you had lots of money would you prefer to shop at:",
        options: [
          { label: "Uniqlo", type: "hacker" },
          { label: "Hugo Boss", type: "hustler" },
          { label: "A boutique", type: "hipster" },
        ]
      },
      {
        id: "q7",
        text: "Are you someone who:",
        options: [
          { label: "Has one focus at a time", type: "hacker" },
          { label: "Juggles lots of things at once", type: "hustler" },
          { label: "Thinks about all the details before commencing", type: "hipster" },
        ]
      },
      {
        id: "q8",
        text: "Steve Jobs was:",
        options: [
          { label: "A technical genius", type: "hacker" },
          { label: "A business genius", type: "hustler" },
          { label: "A design genius", type: "hipster" },
        ]
      },
    ],
    results: {
      hacker: {
        title: "Hacker",
        color: "#1f8a70",
        desc: "The Hacker develops the new technology for the business, builds new product prototypes, and works on product development."
      },
      hipster: {
        title: "Hipster",
        color: "#c9781a",
        desc: "The Hipster shapes how the product looks and feels — obsessed with design, user experience, and the story the brand tells."
      },
      hustler: {
        title: "Hustler",
        color: "#c0355f",
        desc: "The Hustler drives the business forward — sales, deals, partnerships, and making sure the product actually reaches people."
      }
    }
  }
}

export function computeResult(answers: Record<string, string>) {
  const tally = { hacker: 0, hipster: 0, hustler: 0 }
  Object.values(answers).forEach(type => {
    if (type in tally) tally[type]++
  })

  const ranked = Object.entries(tally).sort((a, b) => b[1] - a[1])
  const topScore = ranked[0][1]
  const winners = ranked
    .filter(([, score]) => score === topScore)
    .map(([type]) => type)

  return winners
}
