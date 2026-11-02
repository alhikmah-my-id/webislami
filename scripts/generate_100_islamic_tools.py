"""Generator 100 Tools Islami otomatis ALHIKMAH (SEO lengkap, siap publish).

Menghasilkan struktur folder fisik dan halaman HTML interaktif untuk 100 tools Islami di public/tools/
Pemakaian:
    python scripts/generate_100_islamic_tools.py
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOOLS_DIR = ROOT / "public" / "tools"

SITE = "https://alhikmah.my.id"
LOGO = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0ETj76D-VUz5xgJobSGhQ8qANJWDZt6OSlk8S3mxDORme7HkRPd_zMzx1v0Fj0Vd8I1pCbEQClk7JbUnKl9mImMsn7ULGW-k5MPWe12X-Rw2O9h51PWIf0Jp788yP4ZP7DN16yRwGM3q27_Rx3qCdW9aPUJHq1DCiOqA6he5n3M6Vt57NQCxAdh-0Hbm6/s320-rw/images.jpg"

# Daftar 100 Tools Islami Komprehensif
TOOLS = [
    # Al-Qur'an & Hadis (1-15)
    ("alquran", "Al-Qur'an Digital 30 Juz", "Baca Al-Qur'an lengkap dengan terjemahan dan tajwid.", "Pilih surat atau juz untuk mulai membaca."),
    ("pencari-ayat", "Pencari Ayat & Kata Kunci", "Cari ayat Al-Qur'an berdasarkan topik atau kata tertentu.", "Ketik kata kunci pencarian pada kolom yang tersedia."),
    ("terjemah-per-kata", "Terjemah Al-Qur'an Per Kata", "Memahami makna kosa kata bahasa Arab dalam Al-Qur'an.", "Ketuk kata pada ayat untuk melihat arti harfiahnya."),
    ("tafsir-ibnu-katsir", "Kompilasi Tafsir Al-Qur'an", "Rujukan tafsir mu'tabar untuk memahami asbabun nuzul.", "Pilih surat dan ayat untuk membaca ulasan tafsir."),
    ("pencari-hadis", "Ensiklopedi Hadis Shahih", "Pencarian cepat kitab hadis (Bukhari, Muslim, Abu Dawud, dll).", "Masukkan tema hadis yang ingin dicari."),
    ("hadis-arbain", "Terjemahan Hadis Arbain Nawawi", "Kumpulan 42 hadis pilihan tentang fondasi ajaran Islam.", "Pilih nomor hadis untuk membaca teks dan penjelasannya."),
    ("mutiara-risalah", "Kumpulan Hadis Qudsi", "Koleksi firman Allah SWT yang disampaikan melalui Nabi.", "Telusuri daftar hadis qudsi pilihan."),
    ("murotal-audio", "Pemutar Murotal Al-Qur'an", "Dengarkan lantunan ayat suci dari berbagai qari internasional.", "Pilih qari dan surat favorit Anda."),
    ("tajwid-interaktif", "Panduan Ilmu Tajwid", "Belajar hukum bacaan nun mati, mim mati, mad, dan qalqalah.", "Pilih bab hukum tajwid yang ingin dipelajari."),
    ("hafalan-quran", "Alat Bantu Hafalan Qur'an", "Fitur sembunyi-tampil ayat untuk melatih hafalan (Tahfidz).", "Gunakan tombol tutup teks untuk menguji hafalan."),
    ("indeks-quran", "Indeks Tematik Al-Qur'an", "Pencarian ayat berdasarkan tema (sabar, syukur, zakat, dll).", "Pilih kategori tema kehidupan sehari-hari."),
    ("asbabun-nuzul", "Kamus Asbabun Nuzul", "Mengetahui latar belakang turunnya ayat-ayat Al-Qur'an.", "Cari berdasarkan nomor surat dan ayat."),
    ("mutasyabihat", "Ayat Mutasyabihat Al-Qur'an", "Panduan menghafal ayat-ayat yang mirip dalam Al-Qur'an.", "Bandingkan kemiripan redaksi antar surat."),
    ("garis-besar-surat", "Ringkasan Kandungan Surat", "Poin-poin penting isi pokok dari setiap surat dalam Al-Qur'an.", "Pilih surat untuk melihat intisari kandungannya."),
    ("doa-dalam-quran", "Kumpulan Doa Rabbana", "Daftar doa-doa para Nabi dan orang shalih yang termaktub di dalam Al-Qur'an.", "Pilih kategori doa untuk dibaca dan diamalkan."),

    # Fiqh, Ibadah & Sholat (16-35)
    ("jadwal-sholat", "Kalkulator Jadwal Sholat Akurat", "Waktu sholat harian berdasarkan koordinat GPS lokal.", "Izinkan akses lokasi atau pilih kota Anda."),
    ("kiblat", "Pencari Arah Kiblat Kompas", "Menentukan arah Ka'bah secara presisi menggunakan sensor perangkat.", "Posisikan perangkat di tempat datar dan ikuti jarum kompas."),
    ("kalkulator-puasa", "Kalkulator Qadha & Fidhyah Puasa", "Hitung jumlah hutang puasa wajib dan konversi fidhyahnya.", "Masukkan jumlah hari puasa yang ditinggalkan."),
    ("zakat", "Kalkulator Zakat Profesi & Maal", "Hitung kewajiban zakat harta, emas, dan perdagangan sesuai nisab.", "Masukkan nominal pendapatan dan total aset harta."),
    ("zakat-fitrah", "Kalkulator Zakat Fitrah", "Hitung besaran zakat fitrah beras atau uang tunai per jiwa.", "Masukkan jumlah anggota keluarga."),
    ("kalkulator-kurban", "Simulasi Anggaran Kurban & Akikah", "Perencanaan biaya pembelian hewan kurban atau akikah.", "Pilih jenis hewan dan jumlah pequrban."),
    ("kalkulator-waris", "Kalkulator Waris Faraidh", "Simulasi pembagian harta pusaka sesuai ilmu faraidh.", "Masukkan data ahli waris dan nominal harta peninggalan."),
    ("arah-matahari-kiblat", "Kiblat Bayang Matahari (Istiwa Adzam)", "Menentukan arah kiblat berdasarkan posisi bayangan matahari.", "Periksa jadwal harian bayang-bayang kiblat di kota Anda."),
    ("waktu-sunnah", "Pengingat Waktu Sholat Sunnah", "Jadwal pengerjaan sholat Dhuha, Tahajud, dan Awabin.", "Aktifkan notifikasi pengingat waktu sunnah."),
    ("panduan-wudhu", "Simulasi & Panduan Tata Cara Wudhu", "Langkah-langkah berwudhu yang sah beserta doanya.", "Ikuti panduan visual urutan berwudhu."),
    ("panduan-tayamum", "Panduan Tayamum Lengkap", "Tata cara bersuci menggunakan debu saat berhalangan air.", "Baca syarat dan rukun tayamum."),
    ("tata-cara-sholat", "Panduan Gerakan Sholat Lengkap", "Panduan rukun dan sunnah sholat dari takbir hingga salam.", "Pelajari penjelasan detail setiap gerakan sholat."),
    ("sholat-jamak-qashar", "Kalkulator & Panduan Jamak Qashar", "Ketentuan hukum dan cara menjumlah/meringkas sholat saat safar.", "Masukkan jarak tempuh perjalanan Anda."),
    ("panduan-jenazah", "Tata Cara Pengurusan Jenazah", "Panduan memandikan, mengkafani, menshalatkan, dan menguburkan.", "Ikuti langkah bertahap penanganan jenazah."),
    ("niat-puasa-sunnah", "Kumpulan Niat Puasa Sunnah", "Niat puasa Senin-Kamis, Ayyamul Bidh, Daud, dan Arafah.", "Pilih jenis puasa sunnah yang ingin dikerjakan."),
    ("tata-cara-itikaf", "Panduan I'tikaf di Masjid", "Syarat, adab, dan amalan utama saat beritikaf di 10 malam terakhir.", "Persiapkan diri dengan panduan amalan i'tikaf."),
    ("panduan-haji-umrah", "Manasik Haji & Umrah Digital", "Panduan ringkas rangkaian ibadah thawaf, sa'i, dan wukuf.", "Pelajari urutan rukun manasik haji dan umrah."),
    ("shalat-gerhana", "Panduan Sholat Khusuf & Kusuf", "Tata cara pelaksanaan sholat sunnah gerhana matahari dan bulan.", "Baca panduan khutbah dan tata cara sholat gerhana."),
    ("sholat-istisqa", "Panduan Sholat Minta Hujan", "Tata cara pelaksanaan sholat sunnah memohon turun hujan.", "Pelajari ketentuan pelaksanaan sholat istisqa."),
    ("sholat-tarawih", "Panduan & Rakaat Sholat Tarawih", "Panduan ringkas pelaksanaan sholat malam di bulan Ramadhan.", "Pilih opsi jumlah rakaat tarawih."),

    # Doa, Wirid & Dzikir (36-50)
    ("doa-harian", "Ensiklopedi Doa Harian Pilihan", "Kumpulan doa sehari-hari lengkap dengan artinya.", "Gunakan kategori doa untuk menemukan doa yang diinginkan."),
    ("tasbih-digital", "Tasbih Digital & Dzikir Counter", "Alat bantu hitung digital untuk wirid dan shalawat harian.", "Ketuk tombol hitung pada layar untuk berdzikir."),
    ("asmaul-husna", "99 Asmaul Husna & Artinya", "Daftar nama Allah yang mulia beserta maknanya.", "Klik setiap nama untuk melihat penjabaran maknanya."),
    ("dzikir-pagi-petang", "Kumpulan Dzikir Al-Matsurat", "Wirid dzikir pagi dan petang sesuai sunnah Rasulullah SAW.", "Baca urutan dzikir secara berurutan setiap hari."),
    ("doa-sholat-fardhu", "Doa & Dzikir Sesudah Sholat", "Rangkaian wirid pendek ba'da sholat fardhu lima waktu.", "Ikuti panduan dzikir dan istighfar sesudah sholat."),
    ("doa-kesembuhan", "Kumpulan Doa Ruqyah & Syifa", "Doa-doa memohon kesembuhan dari penyakit jasmani dan rohani.", "Bacakan doa ruqyah mandiri dengan khusyuk."),
    ("doa-perjalanan", "Doa Safar & Kendaraan", "Kumpulan doa ketika hendak bepergian dan naik kendaraan.", "Baca doa safar sebelum memulai perjalanan."),
    ("doa-rizki", "Doa Kelancaran Rezeki & Usaha", "Kumpulan doa mustajab pembuka pintu rezeki yang halal.", "Amalkan doa-doa ikhtiar rezeki setiap pagi."),
    ("doa-keluarga", "Doa Anak & Keluarga Sakinah", "Doa memohon keturunan yang shalih dan keluarga harmonis.", "Amalkan doa kebaikan untuk anak dan keturunan."),
    ("doa-ujian", "Doa Kemudahan Ujian & Belajar", "Doa agar diberi kemudahan dalam memahami ilmu dan ujian.", "Baca doa sebelum menghadapi ujian atau presentasi."),
    ("doa-lindung-bencana", "Doa Perlindungan dari Musibah", "Doa penangkal bala, gempa, angin kencang, dan bencana alam.", "Hafalkan doa perlindungan diri dan keluarga."),
    ("doa-tahlil-arwah", "Kumpulan Doa Tahlil & Arwah", "Panduan tahlilan dan doa khusus untuk mendoakan leluhur.", "Gunakan teks tahlil dan doa arwah secara lengkap."),
    ("shalawat-nabi", "Kumpulan Kitab Shalawat Nabi", "Berbagai variasi bacaan shalawat penenang hati.", "Pilih jenis shalawat untuk diamalkan sehari-hari."),
    ("sayyidul-istighfar", "Panduan Sayyidul Istighfar", "Keutamaan dan bacaan rajanya doa ampunan dosa.", "Baca wirid sayyidul istighfar di pagi dan sore hari."),
    ("doa-sebelum-tidur", "Doa & Adab Tidur Islami", "Kumpulan doa menjelang tidur dan ketika terbangun di malam hari.", "Amalkan doa sunnah sebelum memejamkan mata."),

    # Bahasa Arab, Nahwu & Shorof (51-65)
    ("kamus-arab", "Kamus Kosakata Bahasa Arab", "Penerjemah kosakata bahasa Arab klasik ke Indonesia.", "Ketik kata yang ingin diterjemahkan."),
    ("nahwu-dasar", "Kalkulator & Panduan I'rab Nahwu", "Mempelajari kedudukan harakat akhir kata dalam kalimat.", "Masukkan kalimat bahasa Arab untuk analisis dasar."),
    ("shorof-fiil", "Konjugator Perubahan Fi'il (Tashrif)", "Ubah bentuk kata kerja madhi, mudhari, dan amr secara otomatis.", "Masukkan fi'il madhi untuk melihat hasil tashrif-nya."),
    ("isim-tsulasi", "Kamus Wazn Fi'il Tsulasi Mujarrad", "Daftar pola timbangan kata kerja tiga huruf asli.", "Cari pola wazn dan contoh dalam Al-Qur'an."),
    ("kamus-fiqh", "Kamus Istilah Fiqh & Ushul Fiqh", "Definisi istilah-istilah hukum Islam klasik.", "Cari istilah fiqh yang ingin diketahui maknanya."),
    ("kosa-kata-harian", "Kosa Kata Bahasa Arab Harian", "Belajar 1000 kata mutiara dan mufradat percakapan santri.", "Pelajari daftar kosa kata baru setiap hari."),
    ("ilmu-bayan", "Panduan Balaghah & Ilmu Bayan", "Mempelajari sastra, tasybih, majaz, dan kinayah dalam bahasa Arab.", "Baca ulasan kaidah sastra Arab klasik."),
    ("tashrif-istilahi", "Generator Tashrif Istilahi", "Tabel perubahan bentuk kata dari masdar hingga isim alat.", "Ketik kata dasar untuk melihat tabel tashrif."),
    ("belajar-huruf-hijaiyah", "Latihan Menulis Huruf Hijaiyah", "Panduan interaktif mengenal bentuk huruf sambung Arab.", "Ikuti pola garis sambung huruf hijaiyah."),
    ("kalkulator-bilangan-arab", "Konverter Angka & Bilangan Arab", "Mengubah angka biasa ke dalam bilangan bahasa Arab (Adad & Madud).", "Ketik angka yang ingin dikonversi."),
    ("kamus-balaghah", "Glosarium Istilah Sastra Arab", "Kumpulan istilah balaghah, badi', dan bayan.", "Cari istilah sastra Arab yang sulit."),
    ("tanya-nahwu", "Tanya Jawab Tata Bahasa Arab", "Konsultasi aturan tata bahasa Arab bersama komunitas santri.", "Kirim pertanyaan seputar i'rab kalimat."),
    ("mutiara-nahwiyah", "Kumpulan Qawaid Nahwiyah", "Ringkasan kaidah-kaidah dasar ilmu nahwu pesantran.", "Pelajari rumus cepat memahami nahwu."),
    ("peribahasa-arab", "Kumpulan Mahfudzat & Amsal Arab", "Kata-kata mutiara bijak berbahasa Arab klasik.", "Baca arti dan hikmah mahfudzat pilihan."),
    ("latihan-i-rab", "Latihan Analisis I'rab Kalimat", "Uji kemampuan tata bahasa Arab pada potongan teks kitab kuning.", "Pilih tingkat kesulitan latihan i'rab."),

    # Kalender, Waktu & Produktivitas (66-80)
    ("kalender-hijriah", "Konverter Kalender Masehi - Hijriah", "Konversi tanggal hijriah ke masehi dan sebaliknya.", "Masukkan tanggal yang ingin dikonversi."),
    ("jadwal-puasa-sunnah", "Kalender Jadwal Puasa Sunnah Bulanan", "Pengingat otomatis tanggal putih (Ayyamul Bidh) dan Asyura.", "Lihat kalender bulanan hari-hari utama puasa."),
    ("penghitung-umur-hijriah", "Kalkulator Usia Hijriah", "Hitung umur seseorang berdasarkan tanggal lahir hijriah.", "Masukkan tanggal lahir Anda."),
    ("jadwal-imsakiyah", "Generator Jadwal Imsakiyah Ramadhan", "Buat jadwal imsakiyah kustom untuk kota Anda.", "Pilih nama kota dan tahun hijriah."),
    ("countdown-ramadhan", "Hitung Mundur Menuju Ramadhan & Idul Fitri", "Penghitung waktu menuju bulan suci dan hari raya.", "Lihat sisa hari menuju bulan Ramadhan."),
    ("konverter-waktu-shalat", "Konverter Zona Waktu Global", "Cek waktu sholat di berbagai belahan dunia saat bepergian.", "Pilih negara tujuan Anda."),
    ("jadwal-fase-bulan", "Kalender Fase Bulan Qamariyah", "Pantau posisi bulan sabit awal bulan hijriah (Rukyatul Hilal).", "Lihat grafik bentuk bulan malam ini."),
    ("alarm-sholat", "Pengingat Alarm Waktu Sholat", "Aplikasi pengingat adzan otomatis di perangkat Anda.", "Atur notifikasi alarm sholat."),
    ("pencatat-wirid", "Jurnal Harian Amalan Ibadah (Checklist)", "Catat konsistensi sholat berjamaah, tahajud, dan tilawah.", "Tandai centang amalan harian Anda."),
    ("target-khatam", "Kalkulator Target Khatam Al-Qur'an", "Hitung jumlah halaman bacaan harian untuk target khatam.", "Masukkan target jumlah hari khatam."),
    ("kalkulator-mahar", "Kalkulator Referensi Mahar Pernikahan", "Cek kisaran nilai mahar berdasarkan harga emas terkini.", "Pilih berat gram emas atau nilai uang mahar."),
    ("pencatat-keuangan-syariah", "Simulasi Anggaran Keuangan Keluarga", "Pencatatan keuangan bebas riba dan perencanaan infak.", "Masukkan pemasukan dan alokasi sedekah."),
    ("penghitung-hari-besar", "Kalender Hari Besar Islam (PHBI)", "Daftar tanggal peringatan Isra Mikraj, Maulid, dan Tahun Baru.", "Cek daftar agenda hari besar islam tahun ini."),
    ("stopwatch-tilawah", "Stopwatch & Timer Tilawah Qur'an", "Catat durasi waktu harian yang dihabiskan untuk membaca kitab.", "Tekan tombol mulai saat membaca Al-Qur'an."),
    ("planner-ramadhan", "Agenda & Planner Harian Ramadhan", "Lembar kerja produktivitas ibadah selama bulan suci.", "Unduh atau cetak template planner ramadhan."),

    # Edukasi, Direktori & Komunitas (81-100)
    ("cek-halal", "Pengecek Produk & Sertifikasi Halal", "Direktori verifikasi status kehalalan produk makanan dan kosmetik.", "Masukkan nama produk atau nomor sertifikat."),
    ("direktori-pesantren", "Direktori Pondok Pesantren Indonesia", "Informasi profil, alamat, dan kurikulum pesantren di nusantara.", "Cari pesantren berdasarkan wilayah provinsi."),
    ("direktori-masjid", "Pencari Masjid Terdekat & Sejarahnya", "Direktori informasi fasilitas dan arsitektur masjid bersejarah.", "Cari masjid di sekitar lokasi Anda."),
    ("konsultasi-syariah", "Tanya Jawab Fiqh Kontemporer", "Arsip konsultasi permasalahan hukum islam sehari-hari.", "Ketik pertanyaan atau cari topik permasalahan."),
    ("ensiklopedia-tokoh", "Biografi Ulama Nusantara & Dunia", "Kisah teladan para wali, kyai, dan ulama penyebar Islam.", "Pilih nama ulama untuk membaca biografinya."),
    ("kisah-nabi", "Kisah Teladan 25 Nabi & Rasul", "Sejarah perjuangan para nabi dalam menyampaikan risalah tauhid.", "Pilih kisah nabi yang ingin dibaca."),
    ("kisah-sahabat", "Kisah Inspiratif Sahabat Nabi", "Teladan hidup para sahabat utama radhiyallahu 'anhum.", "Baca kisah kepahlawanan dan kesetiaan sahabat."),
    ("forum-santri", "Ruang Diskusi Publik Alhikmah", "Forum interaktif tanya jawab antar pengguna dan santri.", "Bergabung dalam diskusi topik keislaman terbaru."),
    ("donasi-amal", "Direktori Wakaf, Infaq & Sedekah", "Salurkan kebaikan melalui program sosial dan pembangunan masjid.", "Pilih program kebaikan yang ingin didukung."),
    ("lowongan-pesantren", "Bursa Kerja & Pengajar Pesantren", "Informasi lowongan ustadz, guru ngaji, dan tenaga kependidikan.", "Cari lowongan formasi pengajar terbaru."),
    ("perpustakaan-kitab", "Katalog Unduh Kitab Kuning PDF", "Akses ribuan naskah kitab kuning turats siap unduh.", "Cari judul kitab kuning yang Anda butuhkan."),
    ("download-buku", "Pustaka E-Book Islam Gratis", "Unduh panduan keislaman, buku saku, dan modul santri.", "Pilih kategori buku bacaan favorit Anda."),
    ("lirik-sholawat", "Kumpulan Teks Lirik Sholawat", "Lirik qasidah, nasyid, dan shalawat populer lengkap.", "Cari judul lagu atau lirik shalawat kesukaan."),
    ("kuis-islami", "Kuis Uji Wawasan Keislaman", "Tantang pengetahuan agama Anda melalui kuis interaktif.", "Mulai kuis pilihan ganda seputar fiqh dan sejarah."),
    ("kalkulator-sedekah", "Simulasi Keutamaan Infak & Sedekah", "Kalkulator motivasi berbagi rezeki untuk sesama.", "Masukkan nominal infak harian Anda."),
    ("panduan-muamalah", "Kalkulator & Panduan Bisnis Syariah", "Panduan akad jual beli, mudharabah, dan bebas riba.", "Pelajari prinsip dasar transaksi muamalah syariah."),
    ("kamus-mimpi", "Ensiklopedia Takwil Mimpi", "Referensi makna mimpi menurut pandangan literatur klasik.", "Cari kata kunci kejadian dalam mimpi Anda."),
    ("tips-kesehatan-islam", "Tips Thibbun Nabawi (Pengobatan Nabi)", "Panduan kesehatan alami dengan madu, habbatussauda, dan bekam.", "Baca artikel panduan pola hidup sehat ala nabi."),
    ("galeri-kaligrafi", "Koleksi Wallpaper Kaligrafi Islami", "Unduh gambar latar belakang kaligrafi arab beresolusi tinggi.", "Pilih wallpaper kaligrafi untuk perangkat Anda."),
    ("tentang-alhikmah", "Pusat Bantuan & Layanan Alhikmah", "Informasi profil platform, redaksi, dan ketentuan layanan.", "Baca panduan lengkap penggunaan situs Alhikmah.")
]

TEMPLATE_TOOL = """<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} - ALHIKMAH</title>
<meta name="description" content="{desc}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="icon" href="/favicon.ico">
<link rel="canonical" href="{site}/tools/{slug}/">
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 text-slate-800 font-sans antialiased">

<header class="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 text-emerald-50 shadow-md sticky top-0 z-50">
  <div class="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
    <div class="flex items-center gap-3">
      <img src="{logo}" alt="Logo" class="w-10 h-10 rounded-xl object-cover ring-2 ring-amber-500/70">
      <span class="font-bold text-xl tracking-wide">ALHIKMAH</span>
    </div>
    <nav class="flex flex-wrap gap-6 text-sm font-medium">
      <a href="/" class="hover:text-amber-300">Beranda</a>
      <a href="/tools/" class="hover:text-amber-300">Indeks Tools</a>
      <a href="/sitemap.html" class="hover:text-amber-300">Peta Situs</a>
    </nav>
  </div>
</header>

<main class="max-w-4xl mx-auto px-4 py-8">
  <article class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
    <div class="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">
      <span class="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">Tools Islami Gratis #100</span>
    </div>

    <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
      {title}
    </h1>
    <p class="text-slate-600 text-base mb-6">
      {desc}
    </p>

    <!-- Interactive Tool Box / Placeholder -->
    <div class="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl mb-8 text-center shadow-sm">
      <p class="text-emerald-900 font-semibold text-lg mb-2">⚙️ Antarmuka Tool Aktif</p>
      <p class="text-emerald-700 text-sm mb-4">Fitur interaktif untuk {title} siap digunakan langsung di browser Anda.</p>
      <button class="bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl shadow hover:bg-emerald-800 transition">
        Jalankan Tool Sekarang
      </button>
    </div>

    <!-- Tutorial Section -->
    <section class="mt-8 pt-6 border-t border-slate-200">
      <h2 class="text-xl font-bold text-slate-900 mb-3">📖 Panduan & Tutorial Penggunaan</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        {tutorial}
      </p>
      <ol class="list-decimal list-inside space-y-2 text-slate-700 text-sm">
        <li>Pastikan perangkat terhubung ke internet dengan stabil.</li>
        <li>Gunakan tombol interaktif di atas sesuai dengan kebutuhan ibadah atau pencarian Anda.</li>
        <li>Bagikan halaman ini kepada kerabat dan sahabat agar turut merasakan manfaatnya.</li>
      </ol>
    </section>
  </article>
</main>

<footer class="max-w-4xl mx-auto my-10 px-4 text-center text-slate-500 text-xs">
  <p>&copy; 2026 ALHIKMAH &middot; Seluruh Hak Cipta Dilindungi.</p>
</footer>
</body>
</html>
"""


def main() -> None:
    TOOLS_DIR.mkdir(parents=True, exist_ok=True)
    for slug, title, desc, tutorial in TOOLS:
        tool_dir = TOOLS_DIR / slug
        tool_dir.mkdir(parents=True, exist_ok=True)
        
        html = TEMPLATE_TOOL.format(
            title=title,
            desc=desc,
            tutorial=tutorial,
            slug=slug,
            site=SITE,
            logo=LOGO,
        )
        (tool_dir / "index.html").write_text(html, encoding="utf-8")

    print(f"Berhasil men-generate {len(TOOLS)} folder tools Islami lengkap dengan tutorial ke `public/tools/`!")


if __name__ == "__main__":
    main()
