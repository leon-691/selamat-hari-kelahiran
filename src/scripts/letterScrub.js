/**
 * Efek "sorotan baca" untuk surat panjang: kalimat yang paling
 * dekat ke tengah layar menyala (warna biru, penuh), yang lain
 * meredup. Dihitung dari posisi elemen saat scroll, bukan
 * IntersectionObserver biasa, supaya terasa mengikuti posisi baca.
 */
export function initLetterScrub() {
  const container = document.querySelector("[data-scroll-container]");
  const sentences = [...document.querySelectorAll(".letter-sentence")];
  if (!container || !sentences.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    sentences.forEach((el) => el.classList.add("is-active"));
    return;
  }

  let ticking = false;

  function update() {
    const containerRect = container.getBoundingClientRect();
    const viewportCenter = containerRect.top + containerRect.height / 2;
    const activeRange = containerRect.height * 0.38;

    sentences.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2;
      const distance = Math.abs(elCenter - viewportCenter);
      el.classList.toggle("is-active", distance < activeRange);
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  container.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}
