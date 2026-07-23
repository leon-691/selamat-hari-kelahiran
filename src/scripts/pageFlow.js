/**
 * Navigasi antar-halaman (page-based, bukan scroll dokumen).
 * Urutan halaman diambil dari urutan .view di DOM secara otomatis --
 * jadi menambah/menghapus halaman di HTML tidak perlu mengubah file ini.
 */
export function initPageFlow() {
  const progressBar = document.querySelector("[data-page-progress]");

  function getPages() {
    return [...document.querySelectorAll(".view")];
  }

  let currentIndex = Math.max(
    getPages().findIndex((el) => el.classList.contains("is-active")),
    0
  );

  function updateProgress(total) {
    if (!progressBar) return;
    const pct = total > 1 ? (currentIndex / (total - 1)) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  }

  function activate(index) {
    const pages = getPages();
    if (index < 0 || index >= pages.length) return;

    pages.forEach((el) => el.classList.remove("is-active"));
    pages[index].classList.add("is-active");
    currentIndex = index;

    // Reset scroll internal (dipakai halaman surat) tiap kali halaman
    // itu ditampilkan lagi, supaya selalu mulai dari atas.
    pages[index].querySelector("[data-scroll-container]")?.scrollTo(0, 0);

    updateProgress(pages.length);
  }

  function next() {
    activate(currentIndex + 1);
  }

  function goToStart() {
    activate(0);
  }

  // Delegasi satu listener untuk semua tombol "lanjut" generik,
  // supaya tiap halaman baru tidak perlu daftar listener sendiri.
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-next]")) next();
    if (e.target.closest("[data-go-start]")) goToStart();
  });

  updateProgress(getPages().length);

  return { next, goToStart, activate };
}
