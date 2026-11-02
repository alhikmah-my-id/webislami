import { useState } from "react";
import {
  Play,
  Save,
  Send,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  BookOpen,
  Mic,
  FileText,
  MessageSquare,
  Upload,
  Download,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Status = "draft" | "submitted";

const contributions = [
  { title: "Adab Menuntut Ilmu", type: "Artikel Teks", status: "review" },
  { title: "Murottal Surah Al-Mulk", type: "Audio MP3", status: "live" },
];

export function MemberWorkspace({ aiOn }: { aiOn: boolean }) {
  const [title, setTitle] = useState("Keutamaan Shalat Tahajjud");
  const [category, setCategory] = useState("Fiqih Ibadah");
  const [body, setBody] = useState(
    "Shalat Tahajjud adalah shalat sunnah yang dikerjakan pada malam hari setelah tidur.\n\nوَمِنَ ٱلَّيْلِ فَتَهَجَّدْ بِهِۦ نَافِلَةً لَّكَ\n\nRasulullah ﷺ bersabda bahwa shalat tahajjud adalah sebaik-baik shalat setelah shalat fardhu. (HR. Bukhari no. 1145)"
  );
  const [status, setStatus] = useState<Status>("draft");
  const [playing, setPlaying] = useState(false);
  const [tilawahDone, setTilawahDone] = useState(false);

  const checks = [
    { ok: true, text: "Teks & Harakat Arab Valid" },
    { ok: true, text: "Hadits Cocok (HR. Bukhari no. 1145)" },
    { ok: false, text: "Catatan: Cek terjemahan versi Kemenag" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Selamat Datang Kembali, Budi 😊
          </p>
          <h1 className="font-serif text-3xl font-bold text-slate-900">Editor &amp; Publikasi</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Susun artikel, unggah media, lalu kirim ke Ustaz untuk ditinjau.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700">
            <FileText className="mr-1 h-4 w-4" /> Buat Artikel
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-teal-200 text-teal-700 hover:bg-teal-50"
          >
            <Upload className="mr-1 h-4 w-4" /> Unggah Audio/Video
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-amber-200 text-amber-700 hover:bg-amber-50"
          >
            <MessageSquare className="mr-1 h-4 w-4" /> Tanya Ustaz
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <Card className="border-emerald-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif text-lg text-slate-900">
                <FileText className="h-5 w-5 text-emerald-600" /> Detail Konten
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Judul</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-emerald-200 focus-visible:ring-emerald-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Kategori</Label>
                  <Input
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border-emerald-200 focus-visible:ring-emerald-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="body">Isi Artikel &amp; Dalil</Label>
                <Textarea
                  id="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={8}
                  className="border-emerald-200 font-serif leading-relaxed focus-visible:ring-emerald-400"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif text-lg text-slate-900">
                <Mic className="h-5 w-5 text-teal-600" /> Media Murottal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 rounded-xl bg-teal-50 p-4">
                <Button
                  size="icon"
                  onClick={() => setPlaying((v) => !v)}
                  className="h-12 w-12 rounded-full bg-teal-600 text-white hover:bg-teal-700"
                >
                  <Play className="h-5 w-5" />
                </Button>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-teal-900">tahajjud-murottal.mp3</p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-teal-200">
                    <div
                      className={cn(
                        "h-full rounded-full bg-teal-600 transition-all duration-700",
                        playing ? "w-2/3" : "w-1/4"
                      )}
                    />
                  </div>
                </div>
                <span className="text-xs font-medium text-teal-700">
                  {playing ? "02:14" : "00:00"}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-100 shadow-sm">
            <CardHeader>
              <CardTitle className="font-serif text-lg text-slate-900">
                📌 Status Kontribusi Terbaru
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {contributions.map((c) => (
                <div
                  key={c.title}
                  className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3"
                >
                  <div className="min-w-40 flex-1">
                    <p className="text-sm font-semibold text-slate-800">{c.title}</p>
                    <p className="text-xs text-slate-500">{c.type}</p>
                  </div>
                  <Badge
                    className={cn(
                      "hover:bg-transparent",
                      c.status === "live"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-800"
                    )}
                  >
                    {c.status === "live" ? "✅ Tayang" : "⏳ Di-review"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <Card className="border-amber-200 bg-gradient-to-b from-amber-50 to-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif text-lg text-slate-900">
                <Sparkles className="h-5 w-5 text-amber-500" /> Analisis Asisten AI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {!aiOn ? (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                  <Sparkles className="mx-auto h-7 w-7 text-slate-400" />
                  <p className="mt-2 text-sm font-medium text-slate-600">Asisten AI nonaktif</p>
                  <p className="text-xs text-slate-400">Aktifkan dari header untuk pre-screening.</p>
                </div>
              ) : (
                checks.map((c) => (
                  <div
                    key={c.text}
                    className={cn(
                      "flex items-start gap-3 rounded-xl border p-3",
                      c.ok ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"
                    )}
                  >
                    {c.ok ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    ) : (
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    )}
                    <p
                      className={cn(
                        "text-sm font-medium",
                        c.ok ? "text-emerald-800" : "text-amber-800"
                      )}
                    >
                      {c.text}
                    </p>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          <Card className="border-emerald-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif text-lg text-slate-900">
                <BookOpen className="h-5 w-5 text-emerald-600" /> Ringkasan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Kategori</span>
                <span className="font-medium text-slate-800">{category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status</span>
                <span className="font-medium text-slate-800">
                  {status === "submitted" ? "Pending Review" : "Draft"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Peninjau</span>
                <span className="font-medium text-slate-800">Dewan Ustaz</span>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              onClick={() => setStatus("draft")}
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              <Save className="mr-2 h-4 w-4" /> Simpan Draft
            </Button>
            <Button
              onClick={() => setStatus("submitted")}
              className="bg-emerald-600 text-white shadow-sm hover:bg-emerald-700"
            >
              <Send className="mr-2 h-4 w-4" /> Kirim ke Ustaz
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-emerald-100 shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-lg text-slate-900">
              📊 Ringkasan Amal Bulan Ini
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 p-5 text-white shadow-sm">
              <p className="text-xs font-medium text-emerald-100">🕌 Total Infaq &amp; Zakat</p>
              <p className="mt-1 text-3xl font-bold">Rp350.000</p>
              <p className="text-xs text-emerald-100">3 Transaksi bulan ini</p>
              <Button
                size="sm"
                variant="secondary"
                className="mt-3 bg-white/20 text-white hover:bg-white/30"
              >
                <Download className="mr-1 h-4 w-4" /> Unduh Semua Kuitansi
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100 shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-lg text-slate-900">
              📅 Target Tilawah Hari Ini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between rounded-xl bg-amber-50 p-5">
              <div>
                <p className="text-2xl font-bold text-amber-900">Juz 24</p>
                <p className="text-xs text-amber-700">Halaman 462 - 472</p>
              </div>
              <Button
                onClick={() => setTilawahDone(true)}
                className={cn(
                  tilawahDone
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-amber-500 text-white hover:bg-amber-600"
                )}
              >
                <Check className="mr-1 h-4 w-4" />
                {tilawahDone ? "Selesai" : "Tandai Selesai"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}