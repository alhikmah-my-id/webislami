# 🌙 ALHIKMAH (alhikmah.my.id)
# Assalamu’alaikum / Welcome to Al-Hikmah! 👋

Selamat datang di repository resmi **@alhikmah-my-id**! Platform digital yang berfokus pada pengembangan dakwah, pendidikan, dan kebaikan yang berkelanjutan.

🌐 **Website Resmi:**
* [alhikmah](https://alhikmah.my.id)
* [alhikmah](https://alhikmah.eu.org)
* [alhikmah pages](https://alhikmah-my-id.github.io) *(GitHub Pages)*

---

## 🌟 Dukung Gerakan Kami (Sponsors)

Kami memiliki misi besar untuk mengumpulkan **250 monthly sponsors** guna memastikan keberlangsungan dan stabilitas program-program kebaikan kami ke depan. 

Jika Anda ingin berpartisipasi dan menjadi bagian dari perjalanan ini, Anda bisa mendukung kami melalui halaman GitHub Sponsors:

* 💚 **Sponsor alhikmah-my-id:** [github.com/sponsors/alhikmah-my-id](https://github.com/sponsors/alhikmah-my-id)
* 💡 **Sponsor Maintainer (@wahyu9kdl):** [github.com/sponsors/wahyu9kdl](https://github.com/sponsors/wahyu9kdl)

### 💳 Sponsor Card & Button
Anda juga bisa langsung mendukung kami melalui widget di bawah ini:
```
<iframe src="https://github.com/sponsors/alhikmah-my-id/card" title="Sponsor alhikmah-my-id" height="225" width="600" style="border: 0;"></iframe>
```

or


```
<iframe src="https://github.com/sponsors/alhikmah-my-id/button" title="Sponsor alhikmah-my-id" height="32" width="114" style="border: 0; border-radius: 6px;"></iframe>
```
---

## 📊 Target Milestone Sponsor
* [ ] 🎯 **0 / 250 Monthly Sponsors** (Target Utama)

Mari bersama-sama menebar manfaat yang lebih luas. Jazakumullah khairan katsiran atas dukungan Anda! 🙏

> **Portal Warta, Kajian Islam, Artikel Budaya, dan Pustaka 100+ Tools Islami Gratis.**

ALHIKMAH adalah platform berbasis web modern yang dirancang dengan pendekatan *Static Site Generator* (SSG) menggunakan Python. Situs ini mengutamakan kecepatan akses (*lightning fast*), performa optimal, keamanan tinggi, serta kesiapan penuh untuk optimasi mesin pencari (**SEO Ready**) dan monetisasi (**Google AdSense & PWA Ready**).

---

## 🚀 Fitur Utama Platform

*   **Penuh Otomatisasi (SSG Python):** Menghasilkan halaman statis beserta berkas konfigurasi sistem dalam sekali eksekusi skrip.
*   **SEO & Meta Tags Komprehensif:** Dilengkapi tag *Open Graph*, *Twitter Cards*, *Canonical URL*, *Structured Data (JSON-LD)*, dan verifikasi *Google Search Console*.
*   **Monetisasi & Integrasi Iklan:** Dukungan penuh tag script AdSense serta berkas verifikasi `ads.txt` dan `app-ads.txt`.
*   **Progressive Web App (PWA):** Dilengkapi berkas `manifest.json` agar situs dapat diinstal layaknya aplikasi seluler.
*   **Utilitas Pesantren & Tools Islami Interaktif:** Menyediakan direktori khusus tools seperti *Arabic Pegon*, *Arabic Calligraphy Pro*, *Kalender Multi-Konversi*, *Timer Jadwal Sholat*, *Murotal 30 Juz*, *Al-Qur'an Digital*, *WebOffice Suite*, dan *Khazanah Kitab*.

---

## 📂 Struktur Direktori Proyek

```text
ALHIKMAH/
├── public/                 # Hasil keluaran (output) halaman statis & tools siap publish
│   ├── tools/              # Direktori khusus utilities & tools Islami (Arabic Pegon, Murotal, dll)
│   ├── kategori/           # Direktori arsip kategori artikel (Fiqh, Tasawwuf, dll)
│   ├── ads.txt             # Berkas otorisasi iklan Google AdSense
│   ├── app-ads.txt         # Berkas otorisasi iklan aplikasi seluler
│   ├── manifest.json       # Konfigurasi PWA
│   ├── sitemap.xml         # Peta situs XML untuk mesin pencari
│   └── rss.xml             # Berkas umpan RSS web
├── scripts/                # Kumpulan skrip otomatisasi Python
│   ├── generator.py        # Skrip utama Static Site Generator (SSG)
│   ├── generate_categories.py # Skrip generator arsip kategori & TypeScript data
│   └── generate_islamic_tools.py # Skrip generator 100+ tools Islami
├── src/                    # Berkas sumber kode aplikasi / antarmuka utama
│   └── data/               # Berkas data TypeScript (categories.ts)
├── component.tsx           # Komponen UI utama yang dapat digunakan kembali
├── images.jpg              # Aset logo dan gambar utama situs
├── LICENSE                 # Berkas lisensi open-source proyek (MIT License)
└── README.md               # Dokumentasi utama repositori proyek
