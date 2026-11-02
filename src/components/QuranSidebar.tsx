import {
  ArrowLeft,
  BookOpen,
  Bookmark,
  Calendar,
  Compass,
  Heart,
  Landmark,
  Moon,
  ScrollText,
  Settings,
  Sparkles,
  Timer,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tools = [
  { label: "Quran", icon: <BookOpen className="h-4 w-4" />, active: true },
  { label: "Quran Verse Image Maker", icon: <Sparkles className="h-4 w-4" /> },
  { label: "Hadith", icon: <ScrollText className="h-4 w-4" /> },
  { label: "Prayer Times", icon: <Timer className="h-4 w-4" /> },
  { label: "99 Names of Allah", icon: <Heart className="h-4 w-4" /> },
  { label: "Mosque Finder", icon: <Landmark className="h-4 w-4" /> },
  { label: "Qibla", icon: <Compass className="h-4 w-4" /> },
  { label: "Hijri Date", icon: <Calendar className="h-4 w-4" /> },
  { label: "Articles", icon: <ScrollText className="h-4 w-4" /> },
  { label: "Zakat", icon: <Landmark className="h-4 w-4" /> },
  { label: "Ramadan", icon: <Moon className="h-4 w-4" /> },
  { label: "Tasbeeh", icon: <Sparkles className="h-4 w-4" /> },
  { label: "Inheritance", icon: <Users className="h-4 w-4" /> },
  { label: "Duas", icon: <Heart className="h-4 w-4" /> },
  { label: "Settings", icon: <Settings className="h-4 w-4" /> },
];

export function QuranSidebar({ onBack }: { onBack: () => void }) {
  return (
    <div className="sticky top-24 space-y-4">
      <div className="rounded-2xl border border-emerald-200/70 bg-white p-4 shadow-sm">
        <button
          type="button"
          onClick={onBack}
          className="mb-3 flex items-center gap-2 text-xs font-semibold text-emerald-700 transition hover:text-emerald-900"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Kembali ke Dashboard
        </button>
        <div className="rounded-xl bg-gradient-to-br from-emerald-700 to-teal-700 px-3 py-3 text-white">
          <p className="font-serif text-sm font-bold">Quran Reader</p>
          <p className="text-xs text-emerald-100">Guide &amp; Offline</p>
        </div>
        <nav className="mt-4 space-y-1">
          {tools.map((t) => (
            <button
              key={t.label}
              type="button"
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium transition",
                t.active
                  ? "bg-emerald-800 text-white shadow-sm"
                  : "text-emerald-900/80 hover:bg-emerald-100 hover:text-emerald-900"
              )}
            >
              <span className={cn(t.active ? "text-amber-300" : "text-emerald-700")}>
                {t.icon}
              </span>
              <span className="flex-1">{t.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔥</span>
          <div>
            <p className="text-sm font-bold text-amber-900">1 day streak</p>
            <p className="text-xs text-amber-700">Jaga konsistensi tilawahmu</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-emerald-200/70 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 text-emerald-800">
          <Bookmark className="h-4 w-4" />
          <p className="text-sm font-semibold">Saved</p>
          <span className="ml-auto rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
            0
          </span>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Simpan ayat favorit untuk dibaca ulang nanti.
        </p>
      </div>
    </div>
  );
}