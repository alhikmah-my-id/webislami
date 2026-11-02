import {
  BookMarked,
  BookOpen,
  BookText,
  Compass,
  Download,
  Feather,
  GraduationCap,
  Heart,
  Library,
  MessageCircleQuestion,
  Mic2,
  Moon,
  Newspaper,
  PenLine,
  ScrollText,
  Sparkles,
  Store,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories, totalArticles, type Category } from "@/data/categories";
import { articles, type Article } from "@/data/articles";
import { PopularPosts } from "@/components/PopularPosts";
import { cn } from "@/lib/utils";

const iconMap: Record<string, ReactNode> = {
  "pen-line": <PenLine className="h-4 w-4" />,
  newspaper: <Newspaper className="h-4 w-4" />,
  "graduation-cap": <GraduationCap className="h-4 w-4" />,
  download: <Download className="h-4 w-4" />,
  library: <Library className="h-4 w-4" />,
  "scroll-text": <ScrollText className="h-4 w-4" />,
  "book-open": <BookOpen className="h-4 w-4" />,
  users: <Users className="h-4 w-4" />,
  "mic-2": <Mic2 className="h-4 w-4" />,
  heart: <Heart className="h-4 w-4" />,
  sparkles: <Sparkles className="h-4 w-4" />,
  moon: <Moon className="h-4 w-4" />,
  feather: <Feather className="h-4 w-4" />,
  "message-circle-question": <MessageCircleQuestion className="h-4 w-4" />,
  "book-marked": <BookMarked className="h-4 w-4" />,
  store: <Store className="h-4 w-4" />,
  "book-text": <BookText className="h-4 w-4" />,
};

const quickLinks = [
  { label: "Pelajari Teologi", icon: <GraduationCap className="h-4 w-4" /> },
  { label: "Hubungi Kami", icon: <MessageCircleQuestion className="h-4 w-4" /> },
  { label: "Tentang Kami", icon: <Users className="h-4 w-4" /> },
  { label: "Masukan & Saran", icon: <PenLine className="h-4 w-4" /> },
  { label: "Donasi", icon: <Heart className="h-4 w-4" /> },
];

const discover = [
  { label: "Cari Buku Islam", icon: <Library className="h-4 w-4" /> },
  { label: "Pelajari Teologi", icon: <GraduationCap className="h-4 w-4" /> },
  { label: "Produk Budaya Islami", icon: <Store className="h-4 w-4" /> },
];

const footerLinks = ["Islam", "Sitemap", "Blog", "Pedoman Media Siber", "Privacy Policy"];

interface HomePageProps {
  onOpenCategory: (category: Category) => void;
  onOpenArticle: (article: Article) => void;
}

export function HomePage({ onOpenCategory, onOpenArticle }: HomePageProps) {
  const featured = articles[0];
  const latest = articles.slice(1, 5);

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-700 p-6 text-white shadow-md sm:p-8">
        <Badge className="bg-amber-400 text-emerald-950 hover:bg-amber-400">
          ALHIKMAH &middot; Portal Dakwah
        </Badge>
        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
          Menuntut Ilmu, Menjaga Sanad, Menyebar Manfaat
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-emerald-100">
          Kumpulan artikel, kitab, khutbah, dan kajian santri — disusun rapi dengan
          bimbingan asatidz dan verifikasi dalil.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            onClick={() => onOpenArticle(featured)}
            className="bg-amber-400 text-emerald-950 hover:bg-amber-300"
          >
            <BookOpen className="mr-2 h-4 w-4" /> Mulai Membaca
          </Button>
          <Button
            variant="outline"
            className="border-emerald-300/60 bg-emerald-900/30 text-emerald-50 hover:bg-emerald-900/60 hover:text-white"
          >
            <Download className="mr-2 h-4 w-4" /> Unduh Kitab
          </Button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-4 font-serif text-2xl font-bold text-slate-900">
            Artikel Terbaru
          </h2>
          <button
            type="button"
            onClick={() => onOpenArticle(featured)}
            className="group block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="h-52 w-full object-cover sm:h-64"
              loading="lazy"
            />
            <div className="p-5">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                {featured.category}
              </Badge>
              <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-slate-900 group-hover:text-emerald-800">
                {featured.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                {featured.excerpt}
              </p>
            </div>
          </button>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {latest.map((a) => (
              <button
                key={a.slug}
                type="button"
                onClick={() => onOpenArticle(a)}
                className="group flex gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
              >
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-20 w-24 shrink-0 rounded-lg object-cover"
                  loading="lazy"
                />
                <span className="min-w-0">
                  <span className="text-xs font-semibold text-emerald-700">
                    {a.category}
                  </span>
                  <span className="mt-1 line-clamp-3 block text-sm font-semibold leading-snug text-slate-800 group-hover:text-emerald-800">
                    {a.title}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <PopularPosts onOpenArticle={onOpenArticle} />
        </aside>
      </section>

      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900">Kategori</h2>
            <p className="text-sm text-muted-foreground">
              Jelajahi kajian sesuai bidang keilmuan.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              {categories.length} kategori
            </Badge>
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
              {totalArticles.toLocaleString("id-ID")} tulisan
            </Badge>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => onOpenCategory(c)}
              className={cn(
                "group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition",
                "hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/60 hover:shadow-md"
              )}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                {iconMap[c.icon] ?? <BookOpen className="h-4 w-4" />}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-slate-800">
                  {c.label}
                </span>
                <span className="text-xs text-slate-500">{c.count} tulisan</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card className="border-emerald-100 shadow-sm lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="font-serif text-lg font-bold text-slate-900">Tautan Cepat</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {quickLinks.map((l) => (
                <button
                  key={l.label}
                  type="button"
                  className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-100"
                >
                  {l.icon}
                  {l.label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-serif text-lg font-bold text-amber-900">
              Temukan Lebih Banyak
            </h3>
            <div className="mt-4 space-y-2">
              {discover.map((d) => (
                <button
                  key={d.label}
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl border border-amber-200 bg-white px-4 py-3 text-left text-sm font-medium text-amber-900 transition hover:border-amber-400 hover:bg-amber-100"
                >
                  <span className="text-amber-600">{d.icon}</span>
                  {d.label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-2">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0ETj76D-VUz5xgJobSGhQ8qANJWDZt6OSlk8S3mxDORme7HkRPd_zMzx1v0Fj0Vd8I1pCbEQClk7JbUnKl9mImMsn7ULGW-k5MPWe12X-Rw2O9h51PWIf0Jp788yP4ZP7DN16yRwGM3q27_Rx3qCdW9aPUJHq1DCiOqA6he5n3M6Vt57NQCxAdh-0Hbm6/s320-rw/images.jpg"
              alt="Logo ALHIKMAH"
              className="h-8 w-8 rounded-lg object-cover"
            />
            <span className="font-serif text-base font-bold text-slate-900">ALHIKMAH</span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footerLinks.map((f) => (
              <button
                key={f}
                type="button"
                className="text-sm text-slate-600 transition hover:text-emerald-700"
              >
                {f}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <p className="text-xs text-slate-500">© 2026 ALHIKMAH</p>
          <button
            type="button"
            className="flex items-center gap-2 text-xs font-semibold text-emerald-700 transition hover:text-emerald-900"
          >
            <Compass className="h-3.5 w-3.5" /> Pelajari Teologi
          </button>
        </div>
      </footer>
    </div>
  );
}