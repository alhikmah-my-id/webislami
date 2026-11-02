import { Flame, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { popularArticles, type Article } from "@/data/articles";

interface PopularPostsProps {
  onOpenArticle: (article: Article) => void;
  excludeSlug?: string;
}

export function PopularPosts({ onOpenArticle, excludeSlug }: PopularPostsProps) {
  const items = popularArticles.filter((a) => a.slug !== excludeSlug).slice(0, 5);

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
            <Flame className="h-4 w-4" />
          </span>
          <h3 className="font-serif text-lg font-bold text-slate-900">Popular Post</h3>
        </div>
        <div className="mt-4 space-y-3">
          {items.map((a, i) => (
            <button
              key={a.slug}
              type="button"
              onClick={() => onOpenArticle(a)}
              className="group flex w-full gap-3 rounded-xl border border-transparent p-2 text-left transition hover:border-emerald-200 hover:bg-emerald-50/60"
            >
              <span className="relative shrink-0">
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-14 w-16 rounded-lg object-cover"
                  loading="lazy"
                />
                <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                  {i + 1}
                </span>
              </span>
              <span className="min-w-0">
                <span className="line-clamp-2 text-sm font-semibold leading-snug text-slate-800 group-hover:text-emerald-800">
                  {a.title}
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                  <TrendingUp className="h-3 w-3" /> {a.category}
                </span>
              </span>
            </button>
          ))}
        </div>
        <Badge className="mt-4 w-full justify-center bg-rose-50 text-rose-600 hover:bg-rose-50">
          Diperbarui setiap hari
        </Badge>
      </CardContent>
    </Card>
  );
}