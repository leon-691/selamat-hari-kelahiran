# Website Ulang Tahun untuk Adik

Kado digital sederhana, urutannya mengikuti video referensi:
gerbang kata sandi → sapaan → konfirmasi (+ reaksi lucu kalau "belum
siap") → reveal umur → pesan utama → galeri foto → kutipan singkat →
lagu kenangan → surat panjang (dengan tombol "kembali ke awal").

## 1. Yang wajib kamu isi sebelum di-deploy

Semua teks ada di **satu file**: `src/data/content.js`. Cari semua
baris bertanda `GANTI INI` dan isi dengan kata-katamu sendiri —
tidak perlu sentuh file lain.

Checklist:
- [ ] `friendName`, `fromName`
- [ ] `password` + `passwordClue` (default: tanggal lahir format DDMM)
- [ ] `mainMessageBody`, `quoteLines`, `letterBody` (boleh tambah/kurang jumlah baris/kalimat)
- [ ] `gallery` — taruh 4 foto di `assets/images/` dengan nama `foto-1.jpg` s/d `foto-4.jpg`
      (atau ubah nama filenya di `content.js`)
- [ ] `spotifyEmbedSrc` — lihat cara ambilnya di komentar dalam `content.js`
- [ ] `backgroundAudioSrc` — taruh file mp3 di `assets/audio/lagu-latar.mp3`

Kalau foto atau audio belum ditaruh, situsnya tidak akan error — foto
akan menampilkan teks placeholder, dan tombol musik akan diam saja
sampai file-nya ada.

## 2. Menjalankan di komputer sendiri

**Penting:** jangan buka `index.html` langsung dengan cara diklik dua kali.
Browser modern memblokir JavaScript modular (`type="module"`) yang
dibuka lewat `file://`. Situs harus dijalankan lewat server lokal kecil:

```bash
# Dari dalam folder project ini:
python3 -m http.server 8000
# lalu buka http://localhost:8000 di browser
```

Atau kalau pakai VS Code, extension **Live Server** juga bisa.

## 3. Deploy (gratis)

Cara termudah: [Netlify Drop](https://app.netlify.com/drop) — tinggal
drag-and-drop seluruh folder project ini ke browser, langsung dapat link.
Alternatif lain: Vercel atau GitHub Pages, caranya serupa.

## 4. Struktur folder

```
index.html              halaman utama, semua section ada di sini
src/
  styles/                design tokens & komponen CSS, terpisah per keperluan
  scripts/                logic interaktif, satu modul per fitur
    passwordGate.js       gerbang PIN
    confirmStep.js         konfirmasi yes/no + reaksi
    letterScrub.js          efek sorotan baca di surat panjang
    musicPlayer.js           widget musik mengambang
    scrollReveal.js           animasi muncul saat discroll
    confetti.js                efek konfeti
  data/content.js         SEMUA teks & konfigurasi -- edit di sini saja
assets/
  images/                 taruh foto di sini
  audio/                  taruh file musik latar di sini
```

## 5. Kalau mau ubah warna

Semua warna & font ada di `src/styles/variables.css`, di bagian atas
sendiri. Ubah nilai hex-nya, otomatis berlaku ke seluruh halaman.
