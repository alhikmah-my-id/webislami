import { useState } from "react";
import {
  Check,
  X,
  Settings2,
  Trash2,
  Plug,
  Sparkles,
  ShieldCheck,
  Clock,
  FileText,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface PendingUser {
  id: number;
  name: string;
  email: string;
  role: string;
  initials: string;
}

interface Plugin {
  id: number;
  name: string;
  version: string;
  icon: string;
  active: boolean;
}

const initialUsers: PendingUser[] = [
  { id: 1, name: "Ahmad", email: "ahmad@email.com", role: "Penulis Fiqih", initials: "AH" },
  { id: 2, name: "Siti", email: "siti@email.com", role: "Penerima Zakat", initials: "SI" },
];

const initialPlugins: Plugin[] = [
  { id: 1, name: "Plugin Jam Masjid", version: "v1.2", icon: "📦", active: true },
  { id: 2, name: "Gateway Zakat Online", version: "v2.0", icon: "💳", active: true },
  { id: 3, name: "Kalkulator Warisan", version: "v0.9", icon: "🧮", active: false },
];

function StatCard({
  label,
  value,
  hint,
  icon,
  tone,
}: {
  label: string;
  value: string;
  hint: string;
  icon: React.ReactNode;
  tone: "emerald" | "amber" | "teal";
}) {
  const tones = {
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    teal: "bg-teal-100 text-teal-700",
  };
  return (
    <Card className="border-emerald-100 shadow-sm">
      <CardContent className="flex items-center gap-4 p-5">
        <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", tones[tone])}>
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-900">{value}</p>
          <p className="text-sm font-medium text-slate-600">{label}</p>
          <p className="text-xs text-slate-400">{hint}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function AdminDashboard({
  aiOn,
  onToggleAi,
}: {
  aiOn: boolean;
  onToggleAi: (v: boolean) => void;
}) {
  const [users, setUsers] = useState(initialUsers);
  const [plugins, setPlugins] = useState(initialPlugins);
  const [madzhab, setMadzhab] = useState("syafii");

  const resolveUser = (id: number) => setUsers((prev) => prev.filter((u) => u.id !== id));
  const removePlugin = (id: number) => setPlugins((prev) => prev.filter((p) => p.id !== id));
  const togglePlugin = (id: number) =>
    setPlugins((prev) => prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p)));

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Home &gt; Dashboard
        </p>
        <h1 className="font-serif text-3xl font-bold text-slate-900">Ikhtisar Moderasi</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Tinjau pendaftaran, konten, dan plugin yang masuk ke platform.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Menunggu Verifikasi"
          value={String(users.length)}
          hint="Pendaftaran baru"
          icon={<Clock className="h-6 w-6" />}
          tone="amber"
        />
        <StatCard
          label="Konten Pending"
          value="5"
          hint="Siap direview"
          icon={<FileText className="h-6 w-6" />}
          tone="emerald"
        />
        <StatCard
          label="Plugin Aktif"
          value={String(plugins.filter((p) => p.active).length)}
          hint="Terpasang & berjalan"
          icon={<Plug className="h-6 w-6" />}
          tone="teal"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="border-emerald-100 shadow-sm lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="flex items-center gap-2 font-serif text-lg text-slate-900">
              <Users className="h-5 w-5 text-emerald-600" /> Persetujuan Pengguna Baru
            </CardTitle>
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
              {users.length} pending
            </Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            {users.length === 0 ? (
              <div className="rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 p-8 text-center">
                <ShieldCheck className="mx-auto h-8 w-8 text-emerald-500" />
                <p className="mt-2 text-sm font-medium text-emerald-800">
                  Semua pendaftaran sudah ditinjau
                </p>
                <p className="text-xs text-emerald-600">Tidak ada antrean verifikasi saat ini.</p>
              </div>
            ) : (
              users.map((u) => (
                <div
                  key={u.id}
                  className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3 transition hover:border-emerald-200 hover:bg-emerald-50/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                    {u.initials}
                  </div>
                  <div className="min-w-40 flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      {u.name}{" "}
                      <span className="font-normal text-slate-400">({u.email})</span>
                    </p>
                    <p className="text-xs text-slate-500">Ajuan Peran: {u.role}</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => resolveUser(u.id)}
                    className="bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    <Check className="mr-1 h-4 w-4" /> Setuju
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => resolveUser(u.id)}
                    className="border-rose-200 text-rose-600 hover:bg-rose-50"
                  >
                    <X className="mr-1 h-4 w-4" /> Tolak
                  </Button>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="border-emerald-100 shadow-sm lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-serif text-lg text-slate-900">
              <Sparkles className="h-5 w-5 text-amber-500" /> Pengaturan Mode Asisten &amp; AI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-3">
              <div>
                <Label className="text-sm font-semibold text-emerald-900">Otomatisasi AI</Label>
                <p className="text-xs text-emerald-700/80">
                  AI menyortir pertanyaan syariah masuk
                </p>
              </div>
              <Switch checked={aiOn} onCheckedChange={onToggleAi} />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">Batasan Bot</Label>
              <Select value={madzhab} onValueChange={setMadzhab}>
                <SelectTrigger className="border-emerald-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="syafii">Hanya Rujukan Madzhab Syafi'i</SelectItem>
                  <SelectItem value="hanafi">Madzhab Hanafi</SelectItem>
                  <SelectItem value="maliki">Madzhab Maliki</SelectItem>
                  <SelectItem value="hambali">Madzhab Hambali</SelectItem>
                  <SelectItem value="semua">Semua Madzhab</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
              AI memvalidasi harakat Arab &amp; mencocokkan nomor hadits sebelum konten masuk antrean.
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-emerald-100 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="flex items-center gap-2 font-serif text-lg text-slate-900">
            <Plug className="h-5 w-5 text-teal-600" /> Manajemen Plugin
          </CardTitle>
          <Button
            size="sm"
            variant="outline"
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          >
            + Pasang Plugin
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {plugins.length === 0 ? (
            <div className="rounded-xl border border-dashed border-teal-200 bg-teal-50/50 p-8 text-center">
              <Plug className="mx-auto h-8 w-8 text-teal-500" />
              <p className="mt-2 text-sm font-medium text-teal-800">Belum ada plugin terpasang</p>
            </div>
          ) : (
            plugins.map((p) => (
              <div
                key={p.id}
                className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3 transition hover:border-teal-200 hover:bg-teal-50/50"
              >
                <span className="text-xl">{p.icon}</span>
                <div className="min-w-40 flex-1">
                  <p className="text-sm font-semibold text-slate-800">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.version}</p>
                </div>
                <Badge
                  className={cn(
                    "hover:bg-transparent",
                    p.active ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-600"
                  )}
                >
                  {p.active ? "Aktif" : "Nonaktif"}
                </Badge>
                <Switch checked={p.active} onCheckedChange={() => togglePlugin(p.id)} />
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-200 text-slate-600 hover:bg-slate-100"
                >
                  <Settings2 className="mr-1 h-4 w-4" /> Kelola Data
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => removePlugin(p.id)}
                  className="border-rose-200 text-rose-600 hover:bg-rose-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}