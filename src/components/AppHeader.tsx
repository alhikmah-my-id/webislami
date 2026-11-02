import { BookOpen, Home, Search, Sparkles, UserCog, UserRound, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

type Role = "admin" | "member";

interface AppHeaderProps {
  role: Role;
  onRoleChange: (role: Role) => void;
  aiOn: boolean;
  onToggleAi: () => void;
  onOpenQuran: () => void;
  onOpenHome: () => void;
  onOpenTools: () => void;
  quranActive: boolean;
  homeActive: boolean;
  toolsActive: boolean;
}

export function AppHeader({
  role,
  onRoleChange,
  aiOn,
  onToggleAi,
  onOpenQuran,
  onOpenHome,
  onOpenTools,
  quranActive,
  homeActive,
  toolsActive,
}: AppHeaderProps) {
  const isAdmin = role === "admin";

  const navBtn = (active: boolean) =>
    cn(
      "h-8 rounded-full px-3 text-xs text-emerald-100 hover:bg-emerald-800/70 hover:text-white",
      active && "bg-amber-400 text-emerald-950 hover:bg-amber-300 hover:text-emerald-950"
    );

  return (
    <header className="sticky top-0 z-30 border-b border-emerald-900/30 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 text-emerald-50 shadow-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 lg:px-8">
        <button type="button" onClick={onOpenHome} className="flex items-center gap-3 text-left">
          <img
            src={SITE.logo}
            alt="Logo ALHIKMAH"
            className="h-10 w-10 rounded-xl object-cover shadow-sm ring-2 ring-amber-400/60"
          />
          <div className="leading-tight">
            <p className="font-serif text-lg font-bold tracking-tight">
              {isAdmin ? "Kontrol Islami" : "Platform Islami"}
            </p>
            <p className="text-xs text-emerald-200/80">
              {isAdmin ? "Panel Moderasi & Ustaz" : "Deen Hub Kontributor"}
            </p>
          </div>
        </button>

        <div className="relative order-last w-full sm:order-none sm:ml-6 sm:w-auto sm:flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-200/70" />
          <Input
            placeholder={isAdmin ? "Cari data, user, konten..." : "Cari artikel, surah, doa..."}
            className="border-emerald-700/60 bg-emerald-950/40 pl-9 text-emerald-50 placeholder:text-emerald-200/60 focus-visible:ring-amber-300"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="ghost" onClick={onOpenHome} className={navBtn(homeActive)}>
            <Home className="mr-1 h-3.5 w-3.5" /> Beranda
          </Button>
          <Button size="sm" variant="ghost" onClick={onOpenTools} className={navBtn(toolsActive)}>
            <Wrench className="mr-1 h-3.5 w-3.5" /> Tools
          </Button>
          <Button size="sm" variant="ghost" onClick={onOpenQuran} className={navBtn(quranActive)}>
            <BookOpen className="mr-1 h-3.5 w-3.5" /> Quran
          </Button>

          <button
            type="button"
            onClick={onToggleAi}
            className={cn(
              "flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition",
              aiOn
                ? "border-amber-300/70 bg-amber-400/20 text-amber-100 hover:bg-amber-400/30"
                : "border-emerald-700/60 bg-emerald-950/40 text-emerald-200/70 hover:bg-emerald-900/60"
            )}
          >
            <Sparkles className="h-3.5 w-3.5" />
            AI: {aiOn ? "ON" : "OFF"}
          </button>

          <div className="flex items-center gap-1 rounded-full border border-emerald-700/60 bg-emerald-950/40 p-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onRoleChange("admin")}
              className={cn(
                "h-7 rounded-full px-3 text-xs text-emerald-100 hover:bg-emerald-800/70 hover:text-white",
                isAdmin && "bg-amber-400 text-emerald-950 hover:bg-amber-300 hover:text-emerald-950"
              )}
            >
              <UserCog className="mr-1 h-3.5 w-3.5" /> Admin
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onRoleChange("member")}
              className={cn(
                "h-7 rounded-full px-3 text-xs text-emerald-100 hover:bg-emerald-800/70 hover:text-white",
                !isAdmin && "bg-amber-400 text-emerald-950 hover:bg-amber-300 hover:text-emerald-950"
              )}
            >
              <UserRound className="mr-1 h-3.5 w-3.5" /> Member
            </Button>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-700/60 bg-emerald-950/40 py-1 pl-1 pr-3 sm:flex">
            <Avatar className="h-7 w-7">
              <AvatarImage src={SITE.logo} alt="Avatar" />
              <AvatarFallback className="bg-teal-600 text-xs font-semibold text-white">
                {isAdmin ? "SA" : "BD"}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs font-medium">{isAdmin ? "Super Admin" : "Akun Budi"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}