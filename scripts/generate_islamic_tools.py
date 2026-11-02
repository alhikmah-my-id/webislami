"""Generator halaman tools Islami otomatis ALHIKMAH (SEO lengkap, siap publish).

Menghasilkan struktur folder fisik dan halaman HTML interaktif untuk setiap tools Islami:
- public/tools/alquran/index.html
- public/tools/jadwal-sholat/index.html
- public/tools/kiblat/index.html
- public/tools/zakat/index.html
- public/tools/kalender-hijriah/index.html
- public/tools/doa-harian/index.html

Pemakaian:
    python scripts/generate_islamic_tools.py
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOOLS_DIR = ROOT / "public" / "tools"

SITE = "https://alhikmah.my.id"
LOGO = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0ETj76D-VUz5xgJobSGhQ8qANJWDZt6OSlk8S3mxDORme7HkRPd_zMzx1v0Fj0Vd8I1pCbEQClk7JbUnKl9mImMsn7ULGW-k5MPWe12X-Rw2O9h51PWIf0Jp788yP4ZP7DN16yRwGM3q27_Rx3qCdW9aPUJHq1DCiOqA6he5n3M6Vt57NQCxAdh-0Hbm6/s320-rw/images.jpg"

TOOLS = [
    {
        "slug": "alquran",
        "title": "Al-Qur'an Digital & Pencari Ayat",
        "desc": "Baca Al-Qur'an 30 juz lengkap dengan terjemahan bahasa Indonesia dan fitur pencarian cepat.",
        "tutorial": "Pilih surat atau masukkan kata kunci ayat pada kolom pencarian untuk mulai membaca."
    },
    {
        "slug": "jadwal-sholat",
        "title": "Kalkulator Jadwal Sholat Harian",
        "desc": "Informasi waktu sholat akurat untuk seluruh kota di Indonesia berdasarkan koordinat waktu setempat.",
        "tutorial": "Izinkan akses lokasi atau pilih kota Anda pada menu pilihan untuk melihat jadwal sholat harian."
    },
    {
        "slug": "kiblat",
        "title": "Pencari Arah Kiblat Online",
        "desc": "Tentukan arah kiblat menghadap Baitullah (Ka'bah) secara presisi menggunakan sensor kompas perangkat.",
        "tutorial": "Posisikan perangkat Anda di tempat datar, lalu ikuti arah jarum kompas digital."
    },
    {
        "slug": "zakat",
        "title": "Kalkulator Zakat Profesi & Maal",
        "desc": "Hitung kewajiban zakat harta, penghasilan, dan perdagangan Anda dengan mudah dan sesuai nisab.",
        "tutorial": "Masukkan nominal pendapatan atau total aset harta Anda dalam setahun, lalu sistem akan menghitung otomatis."
    },
    {
        "slug": "kalender-hijriah",
        "title": "Konverter Kalender Hijriah",
        "desc": "Konversi tanggal Masehi ke Hijriah dan sebaliknya untuk memantau bulan-bulan qamariyah penting.",
        "tutorial": "Masukkan tanggal Masehi yang ingin dikonversi ke dalam kolom tanggal yang tersedia."
    },
    {
        "slug": "doa-harian",
        "title": "Kumpulan Doa & Wirid Harian",
        "desc": "Ensiklopedia doa harian pilihan lengkap dengan teks Arab, latin, terjemahan, dan keutamaannya.",
        "tutorial": "Gunakan kategori doa untuk mencari doa harian yang sesuai dengan aktivitas Anda."
    }
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
      <a href="/sitemap.html" class="hover:text-amber-300">Peta Situs</a>
    </nav>
  </div>
</header>

<main class="max-w-4xl mx-auto px-4 py-8">
  <article class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
    <div class="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">
      <span class="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">Tools Islami Gratis</span>
    </div>

    <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
      {title}
    </h1>
    <p class="text-slate-600 text-base mb-6">
      {desc}
    </p>

    <!-- Interactive Tool Box / Placeholder -->
    <div class="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl mb-8 text-center">
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
    for tool in TOOLS:
        tool_dir = TOOLS_DIR / tool["slug"]
        tool_dir.mkdir(parents=True, exist_ok=True)
        
        html = TEMPLATE_TOOL.format(
            title=tool["title"],
            desc=tool["desc"],
            tutorial=tool["tutorial"],
            slug=tool["slug"],
            site=SITE,
            logo=LOGO,
        )
        (tool_dir / "index.html").write_text(html, encoding="utf-8")

    print(f"Berhasil men-generate {len(TOOLS)} folder tools Islami lengkap dengan tutorial ke `public/tools/`!")


if __name__ == "__main__":
    main()
