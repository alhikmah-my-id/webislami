"""Generator data kategori ALHIKMAH.

Menjalankan skrip ini akan menulis ulang `src/data/categories.ts`
sehingga setiap kategori pada halaman Beranda dapat dibuka.

Pemakaian:
    python scripts/generate_categories.py
"""

from __future__ import annotations

import json
from pathlib import Path

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

OUTPUT = Path(__file__).resolve().parents[1] / "src" / "data" / "categories.ts"


def slugify(label: str) -> str:
    return (
        label.lower()
        .replace("'", "")
        .replace("&", "dan")
        .replace(" ", "-")
    )


def build_ts() -> str:
    lines = [
        "// AUTO-GENERATED oleh scripts/generate_categories.py",
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
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(build_ts(), encoding="utf-8")
    print(f"Wrote {len(CATEGORIES)} categories -> {OUTPUT}")


if __name__ == "__main__":
    main()