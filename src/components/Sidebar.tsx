import {
  BookOpen,
  Coins,
  FileText,
  LayoutDashboard,
  Plug,
  Settings,
  Sparkles,
  Upload,
  Users,
  Bookmark,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  badge?: number;
  active?: boolean;
}

function NavList({ items }: { items: NavItem[] }) {
  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          className={cn(
            "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition",
            item.active
              ? "bg-emerald-800 text-white shadow-sm"
              : "text-emerald-900/80 hover:bg-emerald-100 hover:text-emerald-900"
          )}
        >
          <span className={cn(item.active ? "text-amber-300" : "text-emerald-700")}>
            {item.icon}
          </span>
          <span className="flex-1">{item.label}</span>
          {item.badge ? (
            <span className="rounded-full bg-amber-400 px-2 py-0.5 text-xs font-bold text-emerald-950">
              {item.badge}
            </span>
          ) : null}
        </button>
      ))}
    </nav>
  );
}

function SidebarShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="sticky top-24 rounded-2xl border border-emerald-200/70 bg-white p-4 shadow-sm">
      <div className="mb-4 rounded-xl bg-emerald-50 px-3 py-2.5">
        <p className="font-serif text-sm font-bold text-emerald-900">{title}</p>
        <p className="text-xs text-emerald-700/80">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

export function AdminSidebar() {
  const items: NavItem[] = [
    { label: "Ikhtisar Utama", icon: <LayoutDashboard className="h-4 w-4" />, active: true },
    { label: "Manajemen User", icon: <Users className="h-4 w-4" /> },
    { label: "Persetujuan", icon: <Users className="h-4 w-4" />, badge: 2 },
    { label: "Konten Dakwah", icon: <FileText className="h-4 w-4" />, badge: 5 },
    { label: "Qur'an & Hadits", icon: <BookOpen className="h-4 w-4" /> },
    { label: "Finansial Umat", icon: <Coins className="h-4 w-4" /> },
    { label: "Plugin & Addons", icon: <Plug className="h-4 w-4" /> },
    { label: "Mode Asisten/AI", icon: <Sparkles className="h-4 w-4" /> },
    { label: "Pengaturan Umum", icon: <Settings className="h-4 w-4" /> },
  ];
  return (
    <SidebarShell title="Panel Kontrol" subtitle="Moderasi & Dewan Ustaz">
      <NavList items={items} />
    </SidebarShell>
  );
}

export function MemberSidebar() {
  const items: NavItem[] = [
    { label: "Ikhtisar Member", icon: <LayoutDashboard className="h-4 w-4" />, active: true },
    { label: "Artikel Anda", icon: <FileText className="h-4 w-4" /> },
    { label: "Unggah Audio/Video", icon: <Upload className="h-4 w-4" /> },
    { label: "Disimpan (Save)", icon: <Bookmark className="h-4 w-4" /> },
    { label: "Jurnal Ibadah", icon: <Activity className="h-4 w-4" /> },
    { label: "Riwayat Ziswaf", icon: <Coins className="h-4 w-4" /> },
    { label: "Asisten AI", icon: <Sparkles className="h-4 w-4" /> },
    { label: "Pengaturan Profil", icon: <Settings className="h-4 w-4" /> },
  ];
  return (
    <SidebarShell title="Deen Hub" subtitle="Kontribusi & Ibadah Harian">
      <NavList items={items} />
    </SidebarShell>
  );
}