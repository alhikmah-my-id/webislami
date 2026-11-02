import os
import json
from datetime import datetime

SITE_NAME = "ALHIKMAH"
BASE_URL = "https://alhikmah.my.id"
LOGO_URL = "https://blogger.googleusercontent.com/img/a/AVvXsEiW2Sfw5ogSKhZbFiB-VdNXwmZoMGLTGPgx5ZYrTY8859clBvRGxgx-Dwc3i03YiUs1WiiL84uTSAlZ8civ17IWTI5Emt2vXmpuT-yRTzf4620rY_4Ib_vmUEGFfLXjzMiCfmQoWUg1mmj5hQu1IpD1CYguF9GocJ81MhsQTuPgt79-I8uOaPyGT0Qzs00=s200"

def get_header():
    return f"""
    <header class="site-header">
        <div class="logo-container">
            <a href="/index.html">
                <img src="{LOGO_URL}" alt="ALHIKMAH Logo" width="45" height="45">
                <span>{SITE_NAME}</span>
            </a>
        </div>
        <nav class="main-nav">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li class="dropdown">
                    <a href="/tools/">Tools ▾</a>
                    <ul class="dropdown-menu">
                        <li><a href="/tools/arabic-pegon.html">✍️ Arabic Pegon</a></li>
                        <li><a href="/tools/arabic-calligraphy.html">✒️ Arabic Calligraphy Pro</a></li>
                        <li><a href="/tools/calendar.html">📅 Kalender</a></li>
                        <li><a href="/tools/prayer-timer.html">⏱️ Timer Jadwal Sholat</a></li>
                        <li><a href="/tools/murotal.html">🎧 Murotal 30 Juz</a></li>
                        <li><a href="/tools/alquran.html">📖 Alqur'an Digital</a></li>
                        <li><a href="/tools/weboffice.html">💼 WebOffice Suite</a></li>
                        <li><a href="/tools/kitab.html">📚 Khazanah Kitab</a></li>
                    </ul>
                </li>
                <li><a href="/finders.html">Finders</a></li>
                <li><a href="/games.html">Games</a></li>
                <li><a href="/resources.html">Resources</a></li>
                <li><a href="/company/about.html">Company</a></li>
                <li><a href="/contact.html">Contact</a></li>
                <li><a href="/terms.html">Terms</a></li>
                <li><a href="/privacy.html">Privacy Policy</a></li>
            </ul>
        </nav>
        <div class="lang-switcher">
            <label for="lang">🌐</label>
            <select id="lang" onchange="location = this.value;">
                <option value="/en/">English</option>
                <option value="/ru/">Rusia</option>
                <option value="/eu/">Eropa</option>
                <option value="/jp/">Jp</option>
                <option value="/id/" selected>Id</option>
                <option value="/ar/">Arab</option>
            </select>
        </div>
    </header>
    """

def generate_article(title, slug, category):
    filename = f"public_html/blog/{slug}.html"
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    
    html = f"""<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - {SITE_NAME}</title>
    <link rel="canonical" href="{BASE_URL}/blog/{slug}.html">
    <meta name="description" content="Panduan mendalam mengenai {title} di {SITE_NAME}. Memuat kajian lengkap, sejarah, dan referensi terpercaya.">
    <meta name="keywords" content="{title}, kajian islam, {category}, alhikmah">
    <link rel="icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="{LOGO_URL}">
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#0b6b4f">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="{SITE_NAME}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="Kajian lengkap dan mendalam seputar {title}.">
    <meta property="og:url" content="{BASE_URL}/blog/{slug}.html">
    <meta property="og:image" content="{LOGO_URL}">
    <link rel="stylesheet" href="/wp-content/themes/alhikmah/style.css">
</head>
<body>
    {get_header()}
    <main class="container article-container">
        <h1>{title}</h1>
        <div class="toc">
            <h3>Daftar Isi (Table of Contents)</h3>
            <ul>
                <li><a href="#pendahuluan">1. Pendahuluan</a></li>
                <li><a href="#sejarah">2. Sejarah dan Landasan</a></li>
                <li><a href="#implementasi">3. Implementasi dalam Kehidupan</a></li>
                <li><a href="#faq">4. Pertanyaan Umum (FAQ)</a></li>
                <li><a href="#kesimpulan">5. Kesimpulan</a></li>
            </ul>
        </div>
        
        <h2 id="pendahuluan">1. Pendahuluan</h2>
        <p>Artikel komprehensif ini membahas secara mendalam mengenai {title}. Ditulis secara human-crafted untuk memberikan wawasan bernilai tinggi bagi pembaca setia ALHIKMAH.</p>
        <img src="/wp-content/uploads/sample-1.jpg" alt="Ilustrasi {title}">
        
        <h2 id="sejarah">2. Sejarah dan Landasan</h2>
        <p>Dalam tradisi keilmuan Islam, pemahaman yang lurus bersumber dari Al-Qur'an dan Sunnah serta literatur ulama salaf.</p>
        
        <h2 id="implementasi">3. Implementasi dalam Kehidupan</h2>
        <p>Penerapan nilai-nilai Islami dalam era modern memerlukan perangkat digital dan literasi yang memadai.</p>

        <h2 id="faq">4. Pertanyaan Umum (FAQ)</h2>
        <div class="faq-item">
            <h4>Q: Apa itu {title}?</h4>
            <p>A: Merupakan kajian esensial dalam khazanah Islam yang dibahas secara mendalam di platform ALHIKMAH.</p>
        </div>

        <h2 id="kesimpulan">5. Kesimpulan</h2>
        <p>Dengan memanfaatkan fasilitas digital seperti Al-Qur'an online dan tools Islami, umat dapat memperdalam ilmu dengan lebih mudah.</p>
        
        <div class="social-share">
            <span>Bagikan artikel ini:</span>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">WhatsApp</a>
        </div>
    </main>
</body>
</html>
    """
    with open(filename, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"[+] Artikel generated: {slug}.html")

if __name__ == "__main__":
    generate_article("Mengenal Khazanah Keilmuan Pesantren", "mengenal-khazanah-pesantren", "Kajian")
