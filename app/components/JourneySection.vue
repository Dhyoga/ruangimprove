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
    date: 'Jan 2026',
    title: 'Mulai dari WA',
    desc: 'Berkumpulnya 20 mahasiswa random curhat bareng.'
  },
  {
    date: 'Mar 2026',
    title: 'Sharing Pertama',
    desc: 'Ngundang kating dan relasi cerita dunia setelah kuliah.'
  },
  {
    date: 'Mei 2026',
    title: 'Squad Angkatan 1',
    desc: '15 mahasiswa ikut mentoring, diskusi, badminton 8 minggu.'
  },
  {
    date: 'Jul 2026',
    title: 'Konsolidasi',
    desc: 'Komitmen bersama membangun wadah mahasiswa.'
  },
  {
    date: 'Agu 2026',
    title: 'Komunitas Berdiri',
    desc: 'Resmi jadi wadah komunitas mahasiswa.'
  }
]
</script>
