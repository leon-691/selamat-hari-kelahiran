import { content } from "../data/content.js";
import { initPasswordGate } from "./passwordGate.js";
import { initConfirmStep } from "./confirmStep.js";
import { initMusicPlayer } from "./musicPlayer.js";
import { initScrollReveal, initScrollProgress } from "./scrollReveal.js";
import { initLetterScrub } from "./letterScrub.js";
import { burstConfetti } from "./confetti.js";

/** Isi semua elemen [data-key] dengan teks dari content.js */
function populateStaticText() {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.dataset.key;
    if (content[key] !== undefined) el.textContent = content[key];
  });

  // Elemen yang butuh nilai jadi atribut src (mis. iframe), bukan teks
  document.querySelectorAll("[data-key-src]").forEach((el) => {
    const key = el.dataset.keySrc;
    if (content[key] !== undefined) el.src = content[key];
  });

  document.title = `Untuk ${content.friendName}`;
}

/** Render baris-baris kutipan singkat, satu fokus per layar */
function renderQuoteLines() {
  const container = document.querySelector("[data-quote-lines]");
  if (!container) return;

  container.innerHTML = content.quoteLines
    .map((line) => `<p class="quote-line">${line}</p>`)
    .join("");
}

/** Render surat panjang sebagai kalimat-kalimat yang menyala saat discroll */
function renderLetterBody() {
  const container = document.querySelector("[data-letter-body]");
  if (!container) return;

  container.innerHTML = content.letterBody
    .map((sentence) => `<p class="letter-sentence">${sentence}</p>`)
    .join("");
}

/** Render grid galeri foto dari content.gallery */
function renderGallery() {
  const container = document.querySelector("[data-gallery-grid]");
  if (!container) return;

  container.innerHTML = content.gallery
    .map(
      ({ src, caption }) => `
      <figure class="photo-card reveal">
        <span class="washi-tape" aria-hidden="true"></span>
        <div class="photo-card__frame">
          <img src="${src}" alt="${caption}" loading="lazy"
               onerror="this.closest('.photo-card__frame').innerHTML='Taruh foto di assets/images/'" />
        </div>
        <figcaption class="photo-card__caption">${caption}</figcaption>
      </figure>`
    )
    .join("");
}

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function setupGate(music) {
  initPasswordGate({
    password: content.password,
    wrongMessage: content.gateWrongMessage,
    onFirstInput: () => music.unlock(),
    onSuccess: () => scrollTo("#sapaan"),
  });
}

function setupGreeting() {
  document.querySelector("[data-greeting-next]")?.addEventListener("click", () => {
    scrollTo("#konfirmasi");
  });
}

function setupConfirm() {
  const revealNumberEl = document.querySelector("[data-reveal-number]");
  if (revealNumberEl) revealNumberEl.textContent = content.age;

  initConfirmStep({
    onConfirm: () => {
      scrollTo("#reveal");
      revealNumberEl?.classList.add("is-flipping");
      setTimeout(() => burstConfetti(revealNumberEl), 300);
    },
  });
}

function setupMessage() {
  document.querySelector("[data-message-next]")?.addEventListener("click", () => {
    scrollTo("#transisi");
  });
}

function setupReplay() {
  document.querySelector("[data-replay-button]")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function init() {
  // Tiap langkah dibungkus try/catch sendiri-sendiri -- kalau satu
  // fitur error (mis. salah format di content.js), fitur lain di
  // halaman ini tetap jalan normal, bukan mati total tanpa pesan.
  const steps = [
    ["teks & konten", () => {
      populateStaticText();
      renderQuoteLines();
      renderLetterBody();
      renderGallery();
    }],
    ["musik & gerbang", () => {
      const music = initMusicPlayer({
        src: content.backgroundAudioSrc,
        title: content.backgroundAudioTitle,
        subtitle: content.backgroundAudioSubtitle,
      });
      setupGate(music);
    }],
    ["sapaan", setupGreeting],
    ["konfirmasi", setupConfirm],
    ["pesan utama", setupMessage],
    ["tombol ulang", setupReplay],
    ["animasi scroll", initScrollReveal],
    ["progress bar", initScrollProgress],
    ["efek surat", initLetterScrub],
  ];

  steps.forEach(([label, fn]) => {
    try {
      fn();
    } catch (err) {
      console.error(`Gagal menjalankan bagian "${label}":`, err);
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
