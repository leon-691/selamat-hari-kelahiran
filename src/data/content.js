/**
 * ==========================================================================
 * ISI KONTEN WEBSITE
 * ==========================================================================
 * Ini SATU-SATUNYA file yang perlu Anda edit untuk mengganti teks.
 * Tidak perlu sentuh HTML/CSS/JS lain sama sekali.
 *
 * Urutan & gaya konten di file ini mengikuti video referensi asli
 * (hasil transkrip OCR per detik), sudah diubah ke versi teman
 * dekat/adik -- bukan pasangan. Tetap wajib kamu sesuaikan, terutama
 * yang bertanda "GANTI INI" (data personal yang tidak bisa ditebak).
 * ==========================================================================
 */

export const content = {
  // Nama panggilan adik/teman dekat kamu. Muncul di beberapa halaman.
  friendName: "GANTI INI: nama panggilan adik",

  // Nama kamu sendiri, muncul di akhir surat.
  fromName: "GANTI INI: nama kamu",

  // Umur yang dirayakan (angka besar di halaman reveal).
  age: 16,

  // Label tombol lanjut yang dipakai bersama di beberapa halaman
  // sederhana (reveal, transisi, galeri, kutipan) -- biar konsisten.
  continueLabel: "lanjut",


  // password harus string angka, panjangnya menentukan jumlah kotak PIN.
  // Contoh aman: tanggal lahir format DDMM -> "2807"
  // ------------------------------------------------------------------
  password: "2807", // GANTI INI kalau mau pakai kode lain
  passwordClue: "petunjuk: tanggal ulang tahun kamu, format DDMM",
  gateSubtitle: "coba tebak kodenya, kamu pasti tau kok",
  gateWrongMessage: "yah, salah. coba lagi!",

  // ------------------------------------------------------------------
  // 2. SAPAAN -- muncul setelah kode benar
  // ------------------------------------------------------------------
  greetingText: "hai!",
  greetingButton: "lanjut",

  // ------------------------------------------------------------------
  // 3. KONFIRMASI -- pertanyaan yes/no, ada reaksi lucu kalau pilih "tidak"
  // ------------------------------------------------------------------
  confirmQuestion: "udah siap buka kejutannya?",
  confirmYes: "udah siap",
  confirmNo: "belum siap",
  confirmReactionText: "yaah, padahal udah aku siapin dari kemarin",
  confirmReactionButton: "oke deh, siap sekarang",

  // ------------------------------------------------------------------
  // 4. REVEAL UMUR
  // ------------------------------------------------------------------
  revealPrefix: "selamat ulang tahun ke-",
  revealSuffix: "semoga makin keren dan makin bahagia!",

  // ------------------------------------------------------------------
  // 5. PESAN UTAMA
  // ------------------------------------------------------------------
  mainMessageTitle: "buat kamu yang spesial",
  mainMessageBody:
    "Selamat ulang tahun buat adik/teman terbaik yang paling baik, " +
    "perhatian, dan selalu ada. Makasih ya udah jadi kamu yang sekarang.",
  mainMessageButton: "aku punya sesuatu buat kamu",

  // ------------------------------------------------------------------
  // 6. TRANSISI -- satu baris singkat sebelum galeri
  // ------------------------------------------------------------------
  transitionText: "oke, ini yang terakhir, aku siapin sesuatu buat kamu, baca pelan-pelan ya",

  // ------------------------------------------------------------------
  // 7. GALERI FOTO
  // src: path ke file foto di folder assets/images/
  // caption: teks singkat di bawah foto
  // ------------------------------------------------------------------
  gallery: [
    { src: "assets/images/foto-1.jpg", caption: "ini foto pertama kita, momen yang bakal selalu aku inget" },
    { src: "assets/images/foto-2.jpg", caption: "momen paling receh tapi paling sering aku inget" },
    { src: "assets/images/foto-3.jpg", caption: "salah satu hari favoritku" },
    { src: "assets/images/foto-4.jpg", caption: "semoga masih banyak lagi momen kayak gini" },
  ],

  // ------------------------------------------------------------------
  // 8. KUTIPAN SINGKAT -- tiap item tampil sendiri, satu fokus per layar
  // ------------------------------------------------------------------
  quoteLines: [
    "aku bersyukur banget buat setiap momen yang udah kita lewatin bareng",
    "makasih udah jadi bagian dari hari-hariku dan bikin semuanya terasa lebih hangat",
    "semoga kita terus bikin banyak kenangan bareng, besar maupun kecil",
    "kamu pantas dapetin yang terbaik -- kamu gak pernah nyerah, dan buat itu aku selalu bersyukur",
  ],

  // ------------------------------------------------------------------
  // 9. LAGU KENANGAN
  // Cara ambil embedSrc:
  // 1. Buka playlist di Spotify -> titik tiga (...) -> Share -> Embed playlist
  // 2. Salin URL di dalam atribut src= pada kode yang diberikan Spotify
  // 3. Tempel di sini.
  // ------------------------------------------------------------------
  songTitle: "lagu-lagu buat kamu",
  songSubtitle: "beberapa lagu yang ngingetin aku sama kamu",
  spotifyEmbedSrc: "https://open.spotify.com/embed/playlist/GANTI_INI?utm_source=generator",

  // ------------------------------------------------------------------
  // 10. SURAT PANJANG -- satu paragraf mengalir, muncul paling akhir.
  // Judul tetap terlihat (sticky) sementara isi surat terungkap
  // kalimat demi kalimat saat discroll -- sesuai gaya video referensi.
  // Tombol "kembali ke awal" ada di ujung surat ini.
  // ------------------------------------------------------------------
  letterHeading: "selamat ulang tahun ya",
  letterBody: [
    "Di hari spesialmu ini, aku cuma mau bilang aku bersyukur banget punya kamu di hidupku.",
    "Makasih udah jadi orang yang luar biasa -- baik, perhatian, dan selalu bikin suasana lebih hangat cuma dengan kehadiranmu.",
    "Semoga tahun baru dalam hidupmu ini bawa kebahagiaan, ketenangan, dan semua hal baik yang udah kamu harapkan.",
    "Semoga tiap langkah yang kamu ambil terasa lebih ringan, dan semoga kamu selalu dikelilingi orang-orang yang benar-benar peduli sama kamu.",
    "Kamu pantas dapetin lebih dari yang kamu sadari.",
    "Aku bersyukur bisa ikut ngerayain harimu, hari ini dan semoga masih banyak lagi ke depannya.",
    "Aku juga masih pengen terus bikin kenangan bareng kamu, tumbuh bareng, dan selalu ada buat kamu di hal-hal kecil yang paling berarti.",
    "Selamat ulang tahun.",
  ],
  closingButton: "kembali ke awal",

  // ------------------------------------------------------------------
  // MUSIK LATAR (widget mengambang)
  // src: path ke file mp3 di folder assets/audio/
  // title/subtitle: teks yang tampil di pil musik
  // ------------------------------------------------------------------
  backgroundAudioSrc: "assets/audio/lagu-latar.mp3",
  backgroundAudioTitle: "GANTI INI: judul lagu",
  backgroundAudioSubtitle: "lagu latar",
};
