import { content } from "../data/content.js";
import { initPasswordGate } from "./passwordGate.js";
import { initConfirmStep } from "./confirmStep.js";
import { initMusicPlayer } from "./musicPlayer.js";
import { initPageFlow } from "./pageFlow.js";
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

/**
 * Bangun satu halaman (.view) terpisah untuk tiap kutipan singkat,
 * lalu sisipkan ke tempat placeholder-nya di HTML -- supaya urutan
 * halaman di DOM tetap benar (dipakai pageFlow untuk urutan navigasi).
 */
function renderQuotePages() {
  const placeholder = document.querySelector("[data-quote-pages]");
  if (!placeholder) return;

  const fragment = document.createDocumentFragment();

  content.quoteLines.forEach((line, i) => {
    const view = document.createElement("section");
    view.className = "view";
    view.id = `kutipan-${i + 1}`;
    view.innerHTML = `
      <p class="quote-line">${line}</p>
      <button class="btn" data-next>${content.continueLabel}</button>
    `;
    fragment.appendChild(view);
  });

  placeholder.replaceWith(fragment);
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
      <figure class="photo-card">
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

function setupGate(music, pageFlow) {
  initPasswordGate({
    password: content.password,
    wrongMessage: content.gateWrongMessage,
    onFirstInput: () => music.unlock(),
    onSuccess: () => pageFlow.next(),
  });
}

function setupConfirm(pageFlow) {
  const revealNumberEl = document.querySelector("[data-reveal-number]");
  if (revealNumberEl) revealNumberEl.textContent = content.age;

  initConfirmStep({
    onConfirm: () => {
      pageFlow.next();
      revealNumberEl?.classList.add("is-flipping");
      setTimeout(() => burstConfetti(revealNumberEl), 300);
    },
  });
}

function init() {
  // Tiap langkah dibungkus try/catch sendiri-sendiri -- kalau satu
  // fitur error (mis. salah format di content.js), fitur lain di
  // halaman ini tetap jalan normal, bukan mati total tanpa pesan.
  let pageFlow;

  const steps = [
    ["konten", () => {
      renderQuotePages();
      populateStaticText();
      renderLetterBody();
      renderGallery();
    }],
    ["navigasi halaman", () => {
      pageFlow = initPageFlow();
    }],
    ["musik & gerbang", () => {
      const music = initMusicPlayer({
        src: content.backgroundAudioSrc,
        title: content.backgroundAudioTitle,
        subtitle: content.backgroundAudioSubtitle,
      });
      setupGate(music, pageFlow);
    }],
    ["konfirmasi", () => setupConfirm(pageFlow)],
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
