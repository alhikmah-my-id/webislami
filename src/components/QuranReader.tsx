import { useState } from "react";
import { BookOpen, Play, Pause, Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const surahs = [
  { id: 1, arabic: "الفاتحة", latin: "Al-Fatihah", verses: 7 },
  { id: 2, arabic: "البقرة", latin: "Al-Baqarah", verses: 286 },
  { id: 3, arabic: "آل عمران", latin: "Ali 'Imran", verses: 200 },
  { id: 4, arabic: "النساء", latin: "An-Nisa", verses: 176 },
  { id: 5, arabic: "المائدة", latin: "Al-Ma'idah", verses: 120 },
];

const fatihah = [
  { n: 1, arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", latin: "Bismillāhir-raḥmānir-raḥīm" },
  { n: 2, arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ", latin: "Al-ḥamdu lillāhi rabbil-'ālamīn" },
  { n: 3, arabic: "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", latin: "Ar-raḥmānir-raḥīm" },
  { n: 4, arabic: "مَٰلِكِ يَوْمِ ٱلدِّينِ", latin: "Māliki yaumid-dīn" },
  { n: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", latin: "Iyyāka na'budu wa iyyāka nasta'īn" },
  { n: 6, arabic: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ", latin: "Ihdinaṣ-ṣirāṭal-mustaqīm" },
  {
    n: 7,
    arabic: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
    latin: "Ṣirāṭal-lażīna an'amta 'alaihim gairil-magḍūbi 'alaihim wa laḍ-ḍāllīn",
  },
];

export function QuranReader() {
  const [selected, setSelected] = useState(1);
  const [edition, setEdition] = useState("hafs");
  const [reciter, setReciter] = useState("alafasy");
  const [playing, setPlaying] = useState(false);
  const [saved, setSaved] = useState<number[]>([]);

  const current = surahs.find((s) => s.id === selected) ?? surahs[0];

  const toggleSave = (n: number) =>
    setSaved((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Home &gt; Quran Reader
          </p>
          <h1 className="font-serif text-3xl font-bold text-slate-900">Al-Qur'an Al-Karim</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Baca, dengarkan, dan simpan ayat dengan terjemahan &amp; tafsir.
          </p>
        </div>
        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
          {saved.length} ayat tersimpan
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="border-emerald-100 shadow-sm lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-serif text-lg text-slate-900">
              <BookOpen className="h-5 w-5 text-emerald-600" /> Daftar Surah
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {surahs.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelected(s.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border p-3 text-left transition",
                  selected === s.id
                    ? "border-emerald-300 bg-emerald-50 shadow-sm"
                    : "border-slate-100 bg-slate-50/70 hover:border-emerald-200 hover:bg-emerald-50/60"
                )}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold",
                    selected === s.id
                      ? "bg-emerald-700 text-white"
                      : "bg-white text-emerald-700"
                  )}
                >
                  {s.id}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">
                    {s.id}. {s.arabic} - {s.latin}
                  </p>
                  <p className="text-xs text-slate-500">{s.verses} ayat</p>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6 lg:col-span-3">
          <Card className="border-emerald-100 shadow-sm">
            <CardContent className="grid gap-4 p-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-slate-700">Edition</Label>
                <Select value={edition} onValueChange={setEdition}>
                  <SelectTrigger className="border-emerald-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hafs">حفص - Hafs</SelectItem>
                    <SelectItem value="warsh">ورش - Warsh</SelectItem>
                    <SelectItem value="qalun">قالون - Qalun</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-slate-700">Reciter</Label>
                <Select value={reciter} onValueChange={setReciter}>
                  <SelectTrigger className="border-emerald-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alafasy">Mishary Alafasy</SelectItem>
                    <SelectItem value="abdulbasit">Abdul Basit</SelectItem>
                    <SelectItem value="sudais">Abdurrahman As-Sudais</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-emerald-100 shadow-sm">
            <div className="bg-gradient-to-r from-emerald-800 to-teal-700 px-6 py-5 text-white">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-serif text-2xl font-bold">
                    {current.arabic} - {current.latin}
                  </p>
                  <p className="text-xs text-emerald-100">
                    {current.verses} ayat &middot; {edition === "hafs" ? "Hafs" : edition}
                  </p>
                </div>
                <Button
                  size="icon"
                  onClick={() => setPlaying((v) => !v)}
                  className="h-11 w-11 rounded-full bg-amber-400 text-emerald-950 hover:bg-amber-300"
                >
                  {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
              </div>
            </div>
            <CardContent className="space-y-3 p-6">
              {selected === 1 ? (
                fatihah.map((v) => (
                  <div
                    key={v.n}
                    className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/50"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                        {v.n}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleSave(v.n)}
                        className={cn(
                          "shrink-0 rounded-lg p-1.5 transition",
                          saved.includes(v.n)
                            ? "bg-amber-100 text-amber-600"
                            : "text-slate-400 hover:bg-slate-100 hover:text-emerald-600"
                        )}
                      >
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>
                    <p dir="rtl" className="mt-2 text-right font-serif text-2xl leading-loose text-slate-900">
                      {v.arabic}
                    </p>
                    <p className="mt-2 text-sm italic text-emerald-700">{v.latin}</p>
                  </div>
                ))
              ) : (
                <div className="rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 p-10 text-center">
                  <BookOpen className="mx-auto h-8 w-8 text-emerald-500" />
                  <p className="mt-2 text-sm font-medium text-emerald-800">
                    Surah {current.latin} siap dibaca
                  </p>
                  <p className="text-xs text-emerald-600">
                    Pilih surah lain atau lanjutkan tilawah Anda.
                  </p>
                </div>
              )}
            </CardContent>
            <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
              <Button
                variant="outline"
                disabled={selected === 1}
                onClick={() => setSelected((s) => Math.max(1, s - 1))}
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Sebelumnya
              </Button>
              <span className="text-xs font-medium text-slate-500">
                Surah {selected} dari {surahs.length}
              </span>
              <Button
                variant="outline"
                disabled={selected === surahs.length}
                onClick={() => setSelected((s) => Math.min(surahs.length, s + 1))}
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                Selanjutnya <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}