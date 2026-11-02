export interface Tool {
  slug: string;
  emoji: string;
  name: string;
  description: string;
  href: string;
  tag: string;
}

export const tools: Tool[] = [
  {
    slug: "arabic-pegon",
    emoji: "✍️",
    name: "Arabic Pegon",
    description:
      "Sistem penulisan dan konversi aksara Arab Pegon untuk kebutuhan literasi pesantren.",
    href: "/tools/arabic-pegon",
    tag: "Literasi",
  },
  {
    slug: "arabic-calligraphy-pro",
    emoji: "✒️",
    name: "Arabic Calligraphy Pro",
    description:
      "Generator dan editor kaligrafi Arab berbasis vektor (CorelDRAW Style Canvas).",
    href: "/tools/arabic-calligraphy-pro",
    tag: "Desain",
  },
  {
    slug: "kalender",
    emoji: "📅",
    name: "Kalender",
    description: "Sistem penanggalan multi-konversi (Masehi, Hijriah, dan Jawa).",
    href: "/tools/kalender",
    tag: "Waktu",
  },
  {
    slug: "timer-jadwal-sholat",
    emoji: "⏱️",
    name: "Timer Jadwal Sholat",
    description:
      "Pengingat otomatis dan penunjuk waktu salat fardu secara real-time.",
    href: "/tools/timer-jadwal-sholat",
    tag: "Ibadah",
  },
  {
    slug: "murotal-30-juz",
    emoji: "🎧",
    name: "Murotal 30 Juz",
    description: "Pemutar audio Al-Qur'an digital interaktif lengkap 30 Juz.",
    href: "/tools/murotal-30-juz",
    tag: "Audio",
  },
  {
    slug: "alquran-digital",
    emoji: "📖",
    name: "Alqur'an Digital",
    description:
      "Mushaf Al-Qur'an digital portable untuk kemudahan membaca di mana saja.",
    href: "/tools/alquran-digital",
    tag: "Qur'an",
  },
  {
    slug: "weboffice-suite",
    emoji: "💼",
    name: "WebOffice Suite",
    description: "Alat produktivitas perkantoran berbasis web terintegrasi.",
    href: "/tools/weboffice-suite",
    tag: "Produktivitas",
  },
  {
    slug: "khazanah-kitab",
    emoji: "📚",
    name: "Khazanah Kitab & Teks Referensi",
    description:
      "Kajian teks, terjemahan, dan panduan keilmuan Islam bersumber dari literatur klasik terpercaya.",
    href: "/tools/khazanah-kitab",
    tag: "Referensi",
  },
];

export const calligraphyDemoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";