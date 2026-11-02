"""Generator halaman statis ALHIKMAH (SEO lengkap, siap publish).

Menghasilkan berkas HTML statis beserta pendukung (ads.txt, manifest.json,
sitemap.xml, rss.xml) ke folder `public/`.

Pemakaian:
    python scripts/generate_static_pages.py
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public"

SITE = "https://alhikmah.my.id"
LOGO = (
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0ETj76D-VUz5xgJobSGhQ8qANJWDZt6OSlk8S3mxDORme7HkRPd_zMzx1v0Fj0Vd8I1pCbEQClk7JbUnKl9mImMsn7ULGW-k5MPWe12X-Rw2O9h51PWIf0Jp788yP4ZP7DN16yRwGM3q27_Rx3qCdW9aPUJHq1DCiOqA6he5n3M6Vt57NQCxAdh-0Hbm6/s320-rw/images.jpg"
)
ADSENSE = "ca-pub-6718454554209533"
TAGLINE = "Berita, kajian, artikel dan tools Islami"
DESC = (
    "ALHIKMAH: warta, kajian Islam, artikel budaya, dan tools Islami gratis "
    "(Al-Qur'an, jadwal sholat, kiblat, zakat)."
)

PAGES = {
    "index.html": ("ALHIKMAH - Berita, kajian, artikel dan tools Islami", "Halaman utama (homepage) platform Alhikmah."),
    "about.html": ("Tentang Kami - ALHIKMAH", "Informasi profil, visi, dan misi platform Alhikmah."),
    "advertise.html": ("Pasang Iklan - ALHIKMAH", "Halaman informasi pemasangan iklan dan kerja sama bisnis."),
    "contact.html": ("Hubungi Kami - ALHIKMAH", "Halaman kontak untuk menghubungi pengelola atau tim support."),
    "disclaimer.html": ("Penafian - ALHIKMAH", "Penafian hukum terkait layanan finansial dan informasi situs."),
    "editorial.html": ("Kebijakan Editorial - ALHIKMAH", "Kebijakan editorial dan standar penulisan artikel platform."),
    "forum.html": ("Forum - ALHIKMAH", "Ruang diskusi publik bagi para pengguna dan investor."),
    "join.html": ("Bergabung - ALHIKMAH", "Halaman pendaftaran atau bergabung dengan komunitas/tim."),
    "komunitas.html": ("Komunitas - ALHIKMAH", "Informasi tautan dan aktivitas komunitas resmi Alhikmah."),
    "license.html": ("Lisensi - ALHIKMAH", "Halaman rincian lisensi penggunaan kode dan konten situs."),
    "privacy.html": ("Kebijakan Privasi - ALHIKMAH", "Kebijakan privasi perlindungan data pengguna."),
    "sitemap.html": ("Peta Situs - ALHIKMAH", "Peta situs HTML untuk navigasi dan kemudahan akses pengunjung."),
    "terms.html": ("Syarat & Ketentuan - ALHIKMAH", "Syarat dan ketentuan penggunaan layanan website."),
    "404.html": ("404 - Halaman Tidak Ditemukan - ALHIKMAH", "Halaman kustom penanganan error ketika tautan tidak ditemukan."),
}

NAV = [
    ("index.html", "Beranda"),
    ("about.html", "Tentang"),
    ("forum.html", "Forum"),
    ("komunitas.html", "Komunitas"),
    ("contact.html", "Kontak"),
    ("sitemap.html", "Peta Situs"),
]

TEMPLATE = """<!DOCTYPE html>
<html lang="id">
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
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{description}">
<meta name="twitter:image" content="{site}/images.jpg">
<meta name="google-adsense-account" content="{adsense}">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={adsense}" crossorigin="anonymous"></script>
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"WebSite","name":"ALHIKMAH","url":"{site}/","potentialAction":{{"@type":"SearchAction","target":"{site}/?q={{q}}","query-input":"required name=q"}}}}</script>
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"Organization","name":"ALHIKMAH","url":"{site}/","logo":"{logo}"}}</script>
<style>
:root{{--emerald:#0b6b4f;--amber:#f59e0b;--ink:#0f172a}}
*{{box-sizing:border-box}}
body{{margin:0;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--ink);background:#f1f5f9}}
header{{background:linear-gradient(90deg,#064e3b,#0b6b4f,#0f766e);color:#ecfdf5;padding:14px 20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center}}
header img{{width:40px;height:40px;border-radius:12px;object-fit:cover;box-shadow:0 0 0 2px rgba(245,158,11,.6)}}
header b{{font-size:18px}}
nav{{display:flex;flex-wrap:wrap;gap:14px;margin-left:auto}}
nav a{{color:#d1fae5;text-decoration:none;font-size:14px}}
nav a:hover{{color:#fcd34d}}
main{{max-width:960px;margin:24px auto;padding:0 20px}}
.card{{background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:24px;box-shadow:0 1px 3px rgba(15,23,42,.08)}}
h1{{font-size:28px;margin:0 0 8px}}
p{{line-height:1.7;color:#475569}}
footer{{max-width:960px;margin:32px auto;padding:20px;color:#64748b;font-size:13px;text-align:center}}
</style>
</head>
<body>
<header>
<img src="{logo}" alt="Logo ALHIKMAH">
<b>ALHIKMAH</b>
<nav>{nav}</nav>
</header>
<main>
<div class="card">
<h1>{title}</h1>
<p>{description}</p>
<p>Halaman ini dihasilkan otomatis oleh <code>scripts/generate_static_pages.py</code>.</p>
</div>
</main>
<footer>&copy; 2026 ALHIKMAH &middot; <a href="/sitemap.html">Peta Situs</a> &middot; <a href="/privacy.html">Privacy Policy</a></footer>
</body>
</html>
"""


def build_nav() -> str:
    return "".join(f'<a href="/{href}">{label}</a>' for href, label in NAV)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    nav = build_nav()
    for filename, (title, description) in PAGES.items():
        html = TEMPLATE.format(
            title=title,
            description=description,
            logo=LOGO,
            site=SITE,
            file=filename,
            adsense=ADSENSE,
            nav=nav,
        )
        (OUT / filename).write_text(html, encoding="utf-8")

    pub_id = ADSENSE.replace("ca-", "")
    (OUT / "ads.txt").write_text(
        f"google.com, {pub_id}, DIRECT, f08c47fec0942fa0\n", encoding="utf-8"
    )
    (OUT / "app-ads.txt").write_text(
        f"google.com, {pub_id}, DIRECT, f08c47fec0942fa0\n", encoding="utf-8"
    )
    (OUT / "manifest.json").write_text(
        json.dumps(
            {
                "name": "ALHIKMAH",
                "short_name": "ALHIKMAH",
                "description": DESC,
                "start_url": "/",
                "display": "standalone",
                "background_color": "#0b6b4f",
                "theme_color": "#0b6b4f",
                "icons": [
                    {"src": LOGO, "sizes": "320x320", "type": "image/jpeg", "purpose": "any"}
                ],
            },
            indent=2,
        ),
        encoding="utf-8",
    )
    urls = "\n".join(f"  <url><loc>{SITE}/{f}</loc></url>" for f in PAGES)
    (OUT / "sitemap.xml").write_text(
        f'<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{urls}\n</urlset>\n',
        encoding="utf-8",
    )
    rss_items = "\n".join(
        f"    <item><title>{t}</title><link>{SITE}/{f}</link>"
        f"<description>{d}</description></item>"
        for f, (t, d) in PAGES.items()
    )
    (OUT / "rss.xml").write_text(
        f'<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n'
        f"    <title>ALHIKMAH</title>\n    <link>{SITE}/</link>\n"
        f"    <description>{DESC}</description>\n{rss_items}\n  </channel>\n</rss>\n",
        encoding="utf-8",
    )
    print(f"Generated {len(PAGES)} pages + ads.txt, app-ads.txt, manifest.json, sitemap.xml, rss.xml -> {OUT}")


if __name__ == "__main__":
    main()