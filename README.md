# Website SLB Autis Alamanda

Ini adalah kode sumber untuk website resmi SLB Autis Alamanda, yang dikembangkan berdasarkan PRD dan Dokumen Arsitektur Proyek v1.0.

## Struktur Proyek

```
/
|-- index.html
|-- tentang.html
|-- program.html
|-- fasilitas.html
|-- tim.html
|-- pendaftaran.html
|-- donasi.html
|-- kontak.html
|-- /css/
|   |-- style.css
|-- /js/
|   |-- main.js
|-- /images/
|   |-- (kosong, letakkan aset gambar di sini)
|-- README.md
```

## Cara Publikasi di GitHub Pages

1.  **Buat Repositori**: Buat sebuah repositori baru di GitHub (misalnya, `slb-alamanda-website`).
2.  **Upload File**: Upload semua file dan folder dari proyek ini ke repositori tersebut.
3.  **Aktifkan GitHub Pages**:
    * Di repositori Anda, pergi ke `Settings` > `Pages`.
    * Di bawah `Build and deployment`, pilih `Source` sebagai `Deploy from a branch`.
    * Pilih branch `main` (atau `master`) dan folder `/ (root)`.
    * Klik `Save`.
    * Tunggu beberapa menit hingga situs Anda dipublikasikan. URL-nya akan ditampilkan di halaman pengaturan yang sama.

## Konfigurasi Formulir Kontak

Formulir kontak di `kontak.html` menggunakan **Formspree** untuk berfungsi tanpa memerlukan backend.

1.  Buka [Formspree.io](https://formspree.io/) dan buat akun gratis.
2.  Buat formulir baru dan Anda akan mendapatkan URL unik, contohnya `https://formspree.io/f/YOUR_UNIQUE_ID`.
3.  Buka file `kontak.html`.
4.  Cari baris kode berikut:
    ```html
    <form action="[https://formspree.io/f/YOUR_UNIQUE_ID](https://formspree.io/f/YOUR_UNIQUE_ID)" method="POST">
    ```
5.  Ganti `YOUR_UNIQUE_ID` dengan ID unik yang Anda dapatkan dari Formspree.
6.  Simpan file, lalu commit dan push perubahan ke GitHub. Formulir kontak Anda sekarang sudah aktif.
