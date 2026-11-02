"""Generator Situs Statis Komprehensif ALHIKMAH (SEO Lengkap & 100% Responsif).

Menghasilkan seluruh halaman utama, berkas konfigurasi sistem (ads.txt, app-ads.txt,
manifest.json, sitemap.xml, rss.xml), serta direktori tools interaktif khusus ke folder `public/`.

Pemakaian:
    python scripts/generator.py
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public"

SITE = "https://alhikmah.my.id"
LOGO = "https://blogger.googleusercontent.com/img/a/AVvXsEiW2Sfw5ogSKhZbFiB-VdNXwmZoMGLTGPgx5ZYrTY8859clBvRGxgx-Dwc3i03YiUs1WiiL84uTSAlZ8civ17IWTI5Emt2vXmpuT-yRTzf4620rY_4Ib_vmUEGFfLXjzMiCfmQoWUg1mmj5hQu1IpD1CYguF9GocJ81MhsQTuPgt79-I8uOaPyGT0Qzs00=s200"
ADSENSE = "ca-pub-6718454554209533"
DESC = "ALHIKMAH: warta, kajian Islam, artikel budaya, dan tools Islami gratis (Al-Qur'an, jadwal sholat, kiblat, zakat, Pegon, Kaligrafi)."

# 14 Halaman Utama
PAGES = {
    "index.html": ("ALHIKMAH - Berita, kajian, artikel dan tools Islami", "Halaman utama (homepage) platform Alhikmah."),
    "about.html": ("Tentang Kami - ALHIKMAH", "Informasi profil, visi, dan misi platform Alhikmah."),
    "advertise.html": ("Pasang Iklan - ALHIKMAH", "Halaman informasi pemasangan iklan dan kerja sama bisnis."),
    "contact.html": ("Hubungi Kami - ALHIKMAH", "Halaman kontak untuk menghubungi pengelola atau tim support."),
    "disclaimer.html": ("Penafian - ALHIKMAH", "Penafian hukum terkait layanan informasi dan situs."),
    "editorial.html": ("Kebijakan Editorial - ALHIKMAH", "Kebijakan editorial dan standar penulisan artikel platform."),
    "forum.html": ("Forum - ALHIKMAH", "Ruang diskusi publik bagi para pengguna dan komunitas."),
    "join.html": ("Bergabung - ALHIKMAH", "Halaman pendaftaran atau bergabung dengan komunitas/tim."),
    "komunitas.html": ("Komunitas - ALHIKMAH", "Informasi tautan dan aktivitas komunitas resmi Alhikmah."),
    "license.html": ("Lisensi - ALHIKMAH", "Halaman rincian lisensi penggunaan kode dan konten situs."),
    "privacy.html": ("Kebijakan Privasi - ALHIKMAH", "Kebijakan privasi perlindungan data pengguna."),
    "sitemap.html": ("Peta Situs - ALHIKMAH", "Peta situs HTML untuk navigasi dan kemudahan akses pengunjung."),
    "terms.html": ("Syarat & Ketentuan - ALHIKMAH", "Syarat dan ketentuan penggunaan layanan website."),
    "404.html": ("404 - Halaman Tidak Ditemukan - ALHIKMAH", "Halaman kustom penanganan error ketika tautan tidak ditemukan."),
}

# Tools Unggulan Khusus
TOOLS = [
    ("arabic-pegon", "Arabic Pegon", "Sistem penulisan dan konversi aksara Arab Pegon untuk kebutuhan literasi pesantren.", "Ketik teks Indonesia/Latin untuk dikonversi secara real-time ke aksara Pegon."),
    ("arabic-calligraphy-pro", "Arabic Calligraphy Pro", "Generator dan editor kaligrafi Arab berbasis vektor (CorelDRAW Style Canvas).", "Gunakan kanvas interaktif untuk mengatur tata letak dan bentuk seni kaligrafi Arab."),
    ("kalender", "Kalender Multi-Konversi", "Sistem penanggalan multi-konversi (Masehi, Hijriah, dan Jawa).", "Pilih tanggal pada kalender untuk melihat konversi lintas penanggalan secara akurat."),
    ("timer-sholat", "Timer Jadwal Sholat", "Pengingat otomatis dan penunjuk waktu salat fardu secara real-time.", "Izinkan akses lokasi untuk melihat hitung mundur waktu sholat berikutnya."),
    ("murotal-30-juz", "Murotal 30 Juz", "Pemutar audio Al-Qur'an digital interaktif lengkap 30 Juz.", "Pilih surat dan ayat pilihan untuk mendengarkan lantunan ayat suci."),
    ("alquran-digital", "Alqur'an Digital", "Mushaf Al-Qur'an digital portable untuk kemudahan membaca di mana saja.", "Gunakan navigasi surat dan indeks ayat untuk mulai membaca mushaf."),
    ("weboffice-suite", "WebOffice Suite", "Alat produktivitas perkantoran berbasis web terintegrasi.", "Akses perangkat utilitas dokumen dan catatan langsung dari browser Anda."),
    ("khazanah-kitab", "Khazanah Kitab & Teks Referensi", "Kajian teks, terjemahan, dan panduan keilmuan Islam bersumber dari literatur klasik.", "Cari judul kitab kuning atau topik pembahasan fiqh yang diinginkan.")
]

NAV = [
    ("index.html", "Beranda"),
    ("about.html", "Tentang"),
    ("forum.html", "Forum"),
    ("komunitas.html", "Komunitas"),
    ("contact.html", "Kontak"),
    ("sitemap.html", "Peta Situs"),
]

TEMPLATE = """<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{description}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="{logo}">
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#0b6b4f">
<link rel="canonical" href="{site}/{file}">
<link rel="alternate" type="application/rss+xml" title="ALHIKMAH RSS" href="/rss.xml">
<link rel="alternate" type="application/atom+xml" title="ALHIKMAH Atom" href="/atom.xml">
<meta name="google-site-verification" content="QT96Rd0InOuqkb4s1Wu5BlgGD_pCNOy8CsCtveF1zEA">
<meta name="google-site-verification" content="SumuNvHw_nB3fsevMIU9N_0Oi7YWb9ykHovu0gjAbso">
<meta property="og:type" content="website">
<meta property="og:site_name" content="ALHIKMAH">
<meta property="og:locale" content="id_ID">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:url" content="{site}/{file}">
<meta property="og:image" content="{site}/images.jpg">
<meta property="og:image:secure_url" content="{site}/images.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{description}">
<meta name="twitter:image" content="{site}/images.jpg">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={adsense}" crossorigin="anonymous"></script>
<meta name="google-adsense-account" content="{adsense}">
<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"WebSite","name":"ALHIKMAH","url":"{site}/","potentialAction":{{"@type":"SearchAction","target":"{site}/?q={{q}}","query-input":"required name=q"}}}}</script>
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"Organization","name":"ALHIKMAH","url":"{site}/","logo":"{logo}"}}</script>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 text-slate-800 font-sans antialiased">
<header class="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 text-emerald-50 shadow-md sticky top-0 z-50">
  <div class="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
    <div class="flex items-center gap-3">
      <img src="{logo}" alt="Logo ALHIKMAH" class="w-10 h-10 rounded-xl object-cover ring-2 ring-amber-500/70 shadow">
      <div>
        <b class="text-lg block leading-tight">ALHIKMAH</b>
        <span class="text-[10px] text-emerald-300">Portal Islam & Tools</span>
      </div>
    </div>
    <nav class="flex flex-wrap gap-5 text-sm font-medium">
      <a href="/index.html" class="hover:text-amber-300 transition">Beranda</a>
      <a href="/about.html" class="hover:text-amber-300 transition">Tentang</a>
      <a href="/forum.html" class="hover:text-amber-300 transition">Forum</a>
      <a href="/komunitas.html" class="hover:text-amber-300 transition">Komunitas</a>
      <a href="/contact.html" class="hover:text-amber-300 transition">Kontak</a>
    </nav>
  </div>
</header>
<main class="max-w-4xl mx-auto px-4 py-10">
  <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
    <h1 class="text-3xl font-extrabold text-slate-900 mb-4">{title}</h1>
    <p class="text-slate-600 leading-relaxed mb-6">{description}</p>
    <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-sm">
      Halaman ini digenerate secara otomatis oleh skrip generator sistem ALHIKMAH.
    </div>
  </div>
</main>
<footer class="max-w-4xl mx-auto my-10 px-4 text-center text-slate-500 text-xs">
  <p>&copy; 2026 ALHIKMAH &middot; <a href="/sitemap.html" class="hover:underline">Peta Situs</a> &middot; <a href="/privacy.html" class="hover:underline">Kebijakan Privasi</a></p>
</footer>
</body>
</html>
"""

TEMPLATE_TOOL = """<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} - ALHIKMAH</title>
<meta name="description" content="{desc}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="{logo}">
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#0b6b4f">
<link rel="canonical" href="{site}/tools/{slug}/">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={adsense}" crossorigin="anonymous"></script>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 text-slate-800 font-sans antialiased">
<header class="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 text-emerald-50 shadow-md sticky top-0 z-50">
  <div class="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
    <div class="flex items-center gap-3">
      <img src="{logo}" alt="Logo ALHIKMAH" class="w-10 h-10 rounded-xl object-cover ring-2 ring-amber-500/70 shadow">
      <div>
        <b class="text-lg block leading-tight">ALHIKMAH</b>
        <span class="text-[10px] text-emerald-300">Tools Islami</span>
      </div>
    </div>
    <nav class="flex flex-wrap gap-5 text-sm font-medium">
      <a href="/index.html" class="hover:text-amber-300 transition">Beranda</a>
      <a href="/sitemap.html" class="hover:text-amber-300 transition">Peta Situs</a>
    </nav>
  </div>
</header>
<main class="max-w-4xl mx-auto px-4 py-10">
  <article class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
    <div class="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">Tools & Utilitas Pesantren</div>
    <h1 class="text-3xl font-extrabold text-slate-900 mb-4">{title}</h1>
    <p class="text-slate-600 leading-relaxed mb-6">{desc}</p>
    
    <div class="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl mb-8 text-center">
      <p class="text-emerald-900 font-semibold mb-2">⚙️ Antarmuka Interaktif {title}</p>
      <p class="text-emerald-700 text-sm mb-4">Fitur utilitas ini aktif dan dapat dijalankan langsung di browser Anda.</p>
      <button class="bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-2.5 rounded-xl shadow transition">
        Jalankan Tool Sekarang
      </button>
    </div>

    <section class="border-t border-slate-200 pt-6">
      <h2 class="text-xl font-bold text-slate-900 mb-3">📖 Panduan & Tutorial Penggunaan</h2>
      <p class="text-slate-700 leading-relaxed mb-4">{tutorial}</p>
      <ol class="list-decimal list-inside space-y-2 text-slate-700 text-sm">
        <li>Pastikan perangkat terhubung ke internet dengan stabil.</li>
        <li>Gunakan tombol interaktif di atas sesuai panduan operasional.</li>
        <li>Bagikan tautan tools ini untuk mendukung kemudahan literasi umat.</li>
      </ol>
    </section>
  </article>
</main>
<footer class="max-w-4xl mx-auto my-10 px-4 text-center text-slate-500 text-xs">
  <p>&copy; 2026 ALHIKMAH &middot; <a href="/sitemap.html" class="hover:underline">Peta Situs</a></p>
</footer>
</body>
</html>
"""


def build_nav() -> str:
    return "".join(f'<a href="/{href}">{label}</a>' for href, label in NAV)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    
    # 1. Generate 14 Halaman Utama
    for filename, (title, description) in PAGES.items():
        html = TEMPLATE.format(
            title=title,
            description=description,
            logo=LOGO,
            site=SITE,
            file=filename,
            adsense=ADSENSE,
        )
        (OUT / filename).write_text(html, encoding="utf-8")

    # 2. Generate Tools Khusus ke public/tools/
    tools_dir = OUT / "tools"
    tools_dir.mkdir(parents=True, exist_ok=True)
    for slug, title, desc, tutorial in TOOLS:
        t_dir = tools_dir / slug
        t_dir.mkdir(parents=True, exist_ok=True)
        t_html = TEMPLATE_TOOL.format(
            title=title,
            desc=desc,
            tutorial=tutorial,
            slug=slug,
            site=SITE,
            logo=LOGO,
            adsense=ADSENSE,
        )
        (t_dir / "index.html").write_text(t_html, encoding="utf-8")

    # 3. Generate Konfigurasi Sistem (ads.txt, app-ads.txt, manifest, sitemap, rss)
    pub_id = ADSENSE.replace("ca-", "")
    (OUT / "ads.txt").write_text(f"google.com, {pub_id}, DIRECT, f08c47fec0942fa0\n", encoding="utf-8")
    (OUT / "app-ads.txt").write_text(f"google.com, {pub_id}, DIRECT, f08c47fec0942fa0\n", encoding="utf-8")
    
    (OUT / "manifest.json").write_text(
        json.dumps({
            "name": "ALHIKMAH",
            "short_name": "ALHIKMAH",
            "description": DESC,
            "start_url": "/",
            "display": "standalone",
            "background_color": "#0b6b4f",
            "theme_color": "#0b6b4f",
            "icons": [{"src": LOGO, "sizes": "200x200", "type": "image/jpeg", "purpose": "any"}]
        }, indent=2),
        encoding="utf-8"
    )

    all_urls = list(PAGES.keys()) + [f"tools/{slug}/" for slug, _, _, _ in TOOLS]
    urls_xml = "\n".join(f"  <url><loc>{SITE}/{f}</loc></url>" for f in all_urls)
    (OUT / "sitemap.xml").write_text(
        f'<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{urls_xml}\n</urlset>\n',
        encoding="utf-8",
    )

    rss_items = "\n".join(
        f"    <item><title>{t}</title><link>{SITE}/{f}</link><description>{d}</description></item>"
        for f, (t, d) in PAGES.items()
    )
    (OUT / "rss.xml").write_text(
        f'<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n'
        f"    <title>ALHIKMAH</title>\n    <link>{SITE}/</link>\n"
        f"    <description>{DESC}</description>\n{rss_items}\n  </channel>\n</rss>\n",
        encoding="utf-8",
    )
    
    print(f"Berhasil men-generate seluruh halaman web statis, config, dan {len(TOOLS)} tools interaktif ke folder `{OUT}`!")


if __name__ == "__main__":
    main()
