// AUTO-GENERATED oleh scripts/generate_categories.py
// Jangan edit manual — jalankan ulang skrip untuk memperbarui data.

export interface Category {
  slug: string;
  label: string;
  count: number;
  icon: string;
}

export const categories: Category[] = [
  {"slug": "artikel-santri", "label": "Artikel Santri", "count": 128, "icon": "pen-line"},
  {"slug": "blog-series", "label": "Blog Series", "count": 42, "icon": "newspaper"},
  {"slug": "cendekia", "label": "Cendekia", "count": 31, "icon": "graduation-cap"},
  {"slug": "download-buku", "label": "Download Buku", "count": 76, "icon": "download"},
  {"slug": "download-kitab", "label": "Download Kitab", "count": 54, "icon": "library"},
  {"slug": "fiqh", "label": "Fiqh", "count": 210, "icon": "scroll-text"},
  {"slug": "ilmu-tafsir", "label": "Ilmu Tafsir", "count": 88, "icon": "book-open"},
  {"slug": "informasi-santri", "label": "Informasi Santri", "count": 19, "icon": "users"},
  {"slug": "khutbah-jumat", "label": "Khutbah Jumat", "count": 63, "icon": "mic-2"},
  {"slug": "kisah-salihin", "label": "Kisah Salihin", "count": 47, "icon": "heart"},
  {"slug": "kumpulan-doa", "label": "Kumpulan Doa", "count": 95, "icon": "sparkles"},
  {"slug": "lagu-islami", "label": "Lagu Islami", "count": 22, "icon": "moon"},
  {"slug": "nahwu", "label": "Nahwu", "count": 34, "icon": "feather"},
  {"slug": "opini-santri", "label": "Opini Santri", "count": 58, "icon": "message-circle-question"},
  {"slug": "pojok-santri", "label": "Pojok Santri", "count": 41, "icon": "book-marked"},
  {"slug": "post-promosi", "label": "Post Promosi", "count": 12, "icon": "store"},
  {"slug": "santri-bertanya", "label": "Santri Bertanya", "count": 73, "icon": "message-circle-question"},
  {"slug": "shorof", "label": "Shorof", "count": 28, "icon": "book-text"},
  {"slug": "tajwid-dan-tahsin-al-quran", "label": "Tajwid dan Tahsin al-Quran", "count": 66, "icon": "book-open"},
  {"slug": "tasawwuf", "label": "Tasawwuf", "count": 39, "icon": "heart"},
  {"slug": "tutorial", "label": "Tutorial", "count": 25, "icon": "graduation-cap"},
  {"slug": "wawasan-qurani", "label": "Wawasan Qurani", "count": 84, "icon": "book-open"},
  {"slug": "wawasan-sunnah", "label": "Wawasan Sunnah", "count": 91, "icon": "scroll-text"},
];

export const totalArticles = categories.reduce((sum, c) => sum + c.count, 0);