/**
 * Reveal generik (.reveal) dan kutipan singkat (.quote-line)
 * memakai IntersectionObserver bawaan browser -- tanpa library.
 */
export function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal, .quote-line");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

export function initScrollProgress() {
  const bar = document.querySelector("[data-scroll-progress]");
  if (!bar) return;

  function update() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
