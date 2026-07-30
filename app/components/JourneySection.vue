<template>
  <section class="section cork-section" id="journey">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow" style="margin-bottom:16px;">perjalanan kami</span>
        <h2>Dari Grup WhatsApp Jadi Komunitas</h2>
        <p>Semua besar dari yang kecil. Ini catetan perjalanan RuangImprove sejauh ini.</p>
      </div>
      <div class="board">
        <div class="thread"></div>

        <div v-for="item in milestones" :key="item.date" class="pin-row reveal">
          <div class="pin-card">
            <div class="pin-dot"></div>
            <span class="pin-date">{{ item.date }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const milestones = [
  {
    date: 'Maret 2024',
    title: 'Mulai dari Grup WhatsApp',
    desc: '20 mahasiswa random ikutan curhat bareng — ternyata semua ngerasain hal yang sama.'
  },
  {
    date: 'Juni 2024',
    title: 'Sharing Session Pertama',
    desc: 'Ngundang kating yang udah kerja di startup buat cerita jujur soal dunia kerja.'
  },
  {
    date: 'Agustus 2024',
    title: 'Squad Angkatan Pertama',
    desc: '15 mahasiswa gabung program mentoring 8 minggu, bikin project bareng dari nol.'
  },
  {
    date: 'November 2024',
    title: 'Kolaborasi Sama BEM & UKM',
    desc: 'Ruang belajar kita mulai nyambung ke organisasi kampus lain se-Indonesia.'
  },
  {
    date: '5 Januari 2025',
    title: 'RuangImprove Resmi Jadi Komunitas',
    desc: 'Legit jadi wadah nasional buat mahasiswa yang pengen naik level bareng-bareng.'
  }
]
</script>
