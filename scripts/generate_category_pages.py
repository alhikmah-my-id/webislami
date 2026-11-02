"""Generator artikel dan folder kategori otomatis ALHIKMAH (SEO lengkap, siap publish).

Menghasilkan:
1. Berkas data `src/data/categories.ts`
2. Struktur folder fisik dan halaman HTML indeks untuk setiap kategori di `public/kategori/<slug>/index.html`

Pemakaian:
    python scripts/generate_category_pages.py
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_TS = ROOT / "src" / "data" / "categories.ts"
PUBLIC_DIR = ROOT / "public" / "kategori"

SITE = "https://alhikmah.my.id"
LOGO = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0ETj76D-VUz5xgJobSGhQ8qANJWDZt6OSlk8S3mxDORme7HkRPd_zMzx1v0Fj0Vd8I1pCbEQClk7JbUnKl9mImMsn7ULGW-k5MPWe12X-Rw2O9h51PWIf0Jp788yP4ZP7DN16yRwGM3q27_Rx3qCdW9aPUJHq1DCiOqA6he5n3M6Vt57NQCxAdh-0Hbm6/s320-rw/images.jpg"
ADSENSE = "ca-pub-6718454554209533"

CATEGORIES = [
    ("Artikel Santri", 128, "pen-line"),
    ("Blog Series", 42, "newspaper"),
    ("Cendekia", 31, "graduation-cap"),
    ("Download Buku", 76, "download"),
    ("Download Kitab", 54, "library"),
    ("Fiqh", 210, "scroll-text"),
    ("Ilmu Tafsir", 88, "book-open"),
    ("Informasi Santri", 19, "users"),
    ("Khutbah Jumat", 63, "mic-2"),
    ("Kisah Salihin", 47, "heart"),
    ("Kumpulan Doa", 95, "sparkles"),
    ("Lagu Islami", 22, "moon"),
    ("Nahwu", 34, "feather"),
    ("Opini Santri", 58, "message-circle-question"),
    ("Pojok Santri", 41, "book-marked"),
    ("Post Promosi", 12, "store"),
    ("Santri Bertanya", 73, "message-circle-question"),
    ("Shorof", 28, "book-text"),
    ("Tajwid dan Tahsin al-Quran", 66, "book-open"),
    ("Tasawwuf", 39, "heart"),
    ("Tutorial", 25, "graduation-cap"),
    ("Wawasan Qurani", 84, "book-open"),
    ("Wawasan Sunnah", 91, "scroll-text"),
]


def slugify(label: str) -> str:
    return (
        label.lower()
        .replace("'", "")
        .replace("&", "dan")
        .replace(" ", "-")
    )


TEMPLATE_HTML = """<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{label} - Arsip Artikel & Kajian ALHIKMAH</title>
<meta name="description" content="Kumpulan artikel, panduan, dan kajian Islam pilihan dalam kategori {label} di platform ALHIKMAH. Total {count} artikel tersedia.">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="icon" href="/favicon.ico">
<link rel="canonical" href="{site}/kategori/{slug}/">
<script src="https://cdn.tailwindcss.com"></script>
<style>
  .prose h2 {{ @apply text-2xl font-bold text-slate-900 mt-8 mb-4; }}
  .prose p {{ @apply text-slate-700 leading-relaxed mb-4; }}
</style>
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
      <span class="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">Kategori Khusus</span>
      <span>&bull;</span>
      <span>{count} Artikel</span>
    </div>

    <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
      Arsip Kategori: {label}
    </h1>
    <p class="text-slate-600 text-base mb-6">
      Menampilkan daftar publikasi, warta, dan kajian mendalam terkait topik <strong>{label}</strong> yang telah diterbitkan oleh tim redaksi ALHIKMAH.
    </p>

    <!-- Table of Contents -->
    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8">
      <p class="font-bold text-slate-800 text-base mb-2">📑 Navigasi Halaman</p>
      <ul class="text-sm space-y-1.5 text-emerald-700">
        <li><a href="#daftar-artikel" class="hover:underline">1. Daftar Artikel Pilihan {label}</a></li>
        <li><a href="#faq" class="hover:underline">2. Pertanyaan Umum Seputar {label}</a></li>
      </ul>
    </div>

    <div class="prose max-w-none">
      <h2 id="daftar-artikel">1. Daftar Artikel Pilihan {label}</h2>
      <p>Berikut adalah beberapa topik utama yang dibahas dalam kategori ini untuk memperkaya wawasan keislaman dan keilmuan Anda:</p>
      
      <div class="grid gap-4 mt-6">
        <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:border-emerald-500 transition">
          <h3 class="font-bold text-lg text-slate-900 mb-1">Panduan Lengkap Mempelajari {label} bagi Pemula</h3>
          <p class="text-sm text-slate-600 mb-3">Ulasan mendalam mengenai dasar-dasar penting serta metode praktis dalam mendalami bidang {label}.</p>
          <span class="text-xs text-emerald-700 font-semibold">&rarr; Baca Artikel Selengkapnya</span>
        </div>
        <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:border-emerald-500 transition">
          <h3 class="font-bold text-lg text-slate-900 mb-1">Studi Kasus & Tanya Jawab Kontemporer</h3>
          <p class="text-sm text-slate-600 mb-3">Kumpulan tanya jawab serta solusi permasalahan umat yang relevan dengan topik {label} saat ini.</p>
          <span class="text-xs text-emerald-700 font-semibold">&rarr; Baca Artikel Selengkapnya</span>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <section id="faq" class="mt-10 pt-8 border-t border-slate-200">
      <h3 class="text-2xl font-bold text-slate-900 mb-6">Pertanyaan Umum (FAQ)</h3>
      <div class="space-y-4">
        <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <summary class="font-semibold text-slate-800 cursor-pointer">Bagaimana cara berkontribusi artikel dalam kategori {label}?</summary>
          <p class="text-slate-600 text-sm mt-2">Anda dapat mengirimkan naskah atau draf tulisan melalui halaman kontak atau forum resmi komunitas ALHIKMAH.</p>
        </details>
        <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <summary class="font-semibold text-slate-800 cursor-pointer">Apakah materi pada kategori ini dapat diunduh bebas?</summary>
          <p class="text-slate-600 text-sm mt-2">Sebagian besar materi bersifat terbuka untuk dibaca, dipelajari, dan disebarluaskan dengan mencantumkan sumber ALHIKMAH.</p>
        </details>
      </div>
    </section>
  </article>
</main>

<footer class="max-w-4xl mx-auto my-10 px-4 text-center text-slate-500 text-xs">
  <p>&copy; 2026 ALHIKMAH &middot; Kategori {label}</p>
</footer>
</body>
</html>
"""


def build_ts() -> str:
    lines = [
        "// AUTO-GENERATED oleh scripts/generate_category_pages.py",
        "// Jangan edit manual — jalankan ulang skrip untuk memperbarui data.",
        "",
        "export interface Category {",
        "  slug: string;",
        "  label: string;",
        "  count: number;",
        "  icon: string;",
        "}",
        "",
        "export const categories: Category[] = [",
    ]
    for label, count, icon in CATEGORIES:
        entry = {
            "slug": slugify(label),
            "label": label,
            "count": count,
            "icon": icon,
        }
        lines.append(f"  {json.dumps(entry, ensure_ascii=False)},")
    lines.append("];")
    lines.append("")
    lines.append(
        "export const totalArticles = categories.reduce((sum, c) => sum + c.count, 0);"
    )
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    # 1. Tulis categories.ts
    OUTPUT_TS.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_TS.write_text(build_ts(), encoding="utf-8")
    print(f"Berhasil memperbarui data: {OUTPUT_TS}")

    # 2. Buat folder fisik dan file HTML untuk setiap kategori
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    for label, count, _ in CATEGORIES:
        slug = slugify(label)
        cat_dir = PUBLIC_DIR / slug
        cat_dir.mkdir(parents=True, exist_ok=True)
        
        html_content = TEMPLATE_HTML.format(
            label=label,
            count=count,
            slug=slug,
            site=SITE,
            logo=LOGO,
        )
        (cat_dir / "index.html").write_text(html_content, encoding="utf-8")

    print(f"Berhasil men-generate {len(CATEGORIES)} folder kategori beserta halaman statis siap publish di `public/kategori/`!")


if __name__ == "__main__":
    main()
