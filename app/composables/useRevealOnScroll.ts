export function useRevealOnScroll() {
  if (import.meta.server) return

  nextTick(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${(i % 4) * 0.06}s`
      io.observe(el)
    })
  })
}
