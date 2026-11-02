import { ArrowUpRight, PlayCircle, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { tools, calligraphyDemoUrl } from "@/data/tools";

export function ToolsPage() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-700 p-6 text-white shadow-md sm:p-8">
        <Badge className="bg-amber-400 text-emerald-950 hover:bg-amber-400">
          <Wrench className="mr-1 h-3 w-3" /> Tools Islami Gratis
        </Badge>
        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
          Perangkat Digital untuk Santri &amp; Jemaah
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-emerald-100">
          Al-Qur'an, jadwal sholat, kiblat, zakat, kaligrafi, dan khazanah kitab —
          semuanya dapat diakses langsung dari peramban.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => (
          <Card
            key={t.slug}
            className="group flex flex-col border-slate-200 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
          >
            <CardContent className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-xl transition group-hover:bg-emerald-700">
                  {t.emoji}
                </span>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                  {t.tag}
                </Badge>
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-slate-900">
                {t.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{t.description}</p>
              <Button
                asChild
                variant="ghost"
                className="mt-4 justify-start px-0 text-emerald-700 hover:bg-transparent hover:text-emerald-900"
              >
                <a href={t.href}>
                  Buka tool <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-amber-200 bg-amber-50 shadow-sm">
        <CardContent className="flex flex-wrap items-center justify-between gap-4 p-6">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white">
              <PlayCircle className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-bold text-amber-900">
                Tonton demo visual
              </h3>
              <p className="text-sm text-amber-800/80">
                Calligraphy Video Guide — panduan penggunaan Arabic Calligraphy Pro.
              </p>
            </div>
          </div>
          <Button asChild className="bg-amber-500 text-white hover:bg-amber-600">
            <a href={calligraphyDemoUrl} target="_blank" rel="noreferrer">
              <PlayCircle className="mr-2 h-4 w-4" /> Tonton Video
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}