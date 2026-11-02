import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Link2,
  Share2,
  ThumbsUp,
  Send,
  UserRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SeoHead } from "@/components/SeoHead";
import { PopularPosts } from "@/components/PopularPosts";
import { SITE } from "@/data/site";
import type { Article } from "@/data/articles";

interface ArticlePageProps {
  article: Article;
  onBack: () => void;
  onOpenArticle: (article: Article) => void;
}

export function ArticlePage({ article, onBack, onOpenArticle }: ArticlePageProps) {
  const url = `${SITE.url}/artikel/${article.slug}`;

  return (
    <div className="space-y-6">
      <SeoHead
        title={`${article.title} - ${SITE.name}`}
        description={article.excerpt}
        path={`/artikel/${article.slug}`}
        image={article.image}
        type="article"
        keywords={article.keywords}
        publishedTime={article.date}
        author={article.author}
        section={article.category}
      />

      <Button
        variant="outline"
        size="sm"
        onClick={onBack}
        className="border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
      </Button>

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <Card className="overflow-hidden border-slate-200 shadow-sm">
            <img
              src={article.image}
              alt={article.title}
              className="h-56 w-full object-cover sm:h-72"
              loading="lazy"
            />
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                  {article.category}
                </Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                  {article.readMinutes} menit baca
                </Badge>
              </div>

              <h1 className="mt-4 font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                {article.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <UserRound className="h-3.5 w-3.5" /> {article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {article.readMinutes} menit
                </span>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                {article.body.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-8 text-slate-700"
                    dir={/[\u0600-\u06FF]/.test(p) ? "rtl" : "ltr"}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
                  <Share2 className="h-4 w-4" /> Bagikan:
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-200 text-slate-700 hover:bg-slate-50"
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        article.title
                      )}&url=${encodeURIComponent(url)}`,
                      "_blank"
                    )
                  }
                >
                  <Send className="mr-1.5 h-3.5 w-3.5" /> Twitter
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-200 text-slate-700 hover:bg-slate-50"
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                      "_blank"
                    )
                  }
                >
                  <ThumbsUp className="mr-1.5 h-3.5 w-3.5" /> Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-200 text-slate-700 hover:bg-slate-50"
                  onClick={() => navigator.clipboard?.writeText(url)}
                >
                  <Link2 className="mr-1.5 h-3.5 w-3.5" /> Salin Tautan
                </Button>
              </div>
            </CardContent>
          </Card>
        </article>

        <aside className="space-y-6">
          <PopularPosts onOpenArticle={onOpenArticle} excludeSlug={article.slug} />
          <Card className="border-emerald-200 bg-emerald-50 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-serif text-lg font-bold text-emerald-900">
                Dukung Dakwah
              </h3>
              <p className="mt-2 text-sm text-emerald-800/80">
                Setiap donasi membantu kami menyebarkan kajian yang terverifikasi.
              </p>
              <Button className="mt-4 w-full bg-emerald-700 text-white hover:bg-emerald-800">
                Donasi Sekarang
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}