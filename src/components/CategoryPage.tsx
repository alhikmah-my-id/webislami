import { ArrowLeft, BookOpen, Clock, Download, FileText, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SeoHead } from "@/components/SeoHead";
import { PopularPosts } from "@/components/PopularPosts";
import { SITE } from "@/data/site";
import { articlesByCategory, type Article } from "@/data/articles";
import type { Category } from "@/data/categories";

interface CategoryPageProps {
  category: Category;
  onBack: () => void;
  onOpenArticle: (article: Article) => void;
}

export function CategoryPage({ category, onBack, onOpenArticle }: CategoryPageProps) {
  const items = articlesByCategory(category.slug);
  const fallback = items.length === 0;

  return (
    <div className="space-y-6">
      <SeoHead
        title={`${category.label} - ${SITE.name}`}
        description={`${category.count} tulisan kategori ${category.label} di ALHIKMAH — kajian Islam terverifikasi.`}
        path={`/kategori/${category.slug}`}
        keywords={`${category.label}, kajian islam, artikel islami`}
        section={category.label}
      />

      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={onBack}
          className="border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
        </Button>
        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Kategori</Badge>
      </div>

      <section className="overflow-hidden rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-700 p-6 text-white shadow-md sm:p-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-emerald-950">
            <BookOpen className="h-6 w-6" />
          </span>
          <div>
            <h1 className="font-serif text-2xl font-bold sm:text-3xl">{category.label}</h1>
            <p className="mt-1 text-sm text-emerald-100">
              {category.count} tulisan tersedia &middot; diperbarui berkala oleh asatidz
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {fallback ? (
            <Card className="border-dashed border-slate-300 bg-white shadow-sm">
              <CardContent className="p-8 text-center">
                <FileText className="mx-auto h-8 w-8 text-slate-400" />
                <h3 className="mt-3 font-serif text-lg font-bold text-slate-900">
                  Belum ada artikel contoh
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Kategori {category.label} memiliki {category.count} tulisan di arsip.
                  Artikel pilihan sedang disiapkan.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((a) => (
                <button
                  key={a.slug}
                  type="button"
                  onClick={() => onOpenArticle(a)}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-36 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="line-clamp-2 font-semibold leading-snug text-slate-900 group-hover:text-emerald-800">
                      {a.title}
                    </h3>
                    <Separator className="my-3" />
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <UserRound className="h-3.5 w-3.5" /> {a.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {a.readMinutes} menit
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          <Card className="mt-6 border-amber-200 bg-amber-50 shadow-sm">
            <CardContent className="flex flex-wrap items-center justify-between gap-4 p-6">
              <div>
                <h3 className="font-serif text-lg font-bold text-amber-900">
                  Unduh Kumpulan Materi
                </h3>
                <p className="text-sm text-amber-800/80">
                  Dapatkan bundel PDF kategori {category.label} untuk kajian offline.
                </p>
              </div>
              <Button className="bg-amber-500 text-white hover:bg-amber-600">
                <Download className="mr-2 h-4 w-4" /> Unduh PDF
              </Button>
            </CardContent>
          </Card>
        </div>

        <aside>
          <PopularPosts onOpenArticle={onOpenArticle} />
        </aside>
      </div>
    </div>
  );
}