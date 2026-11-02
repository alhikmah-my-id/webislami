import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AdminSidebar, MemberSidebar } from "@/components/Sidebar";
import { AdminDashboard } from "@/components/AdminDashboard";
import { MemberWorkspace } from "@/components/MemberWorkspace";
import { QuranReader } from "@/components/QuranReader";
import { QuranSidebar } from "@/components/QuranSidebar";
import { HomePage } from "@/components/HomePage";
import { CategoryPage } from "@/components/CategoryPage";
import { ArticlePage } from "@/components/ArticlePage";
import { ToolsPage } from "@/components/ToolsPage";
import { SeoHead } from "@/components/SeoHead";
import { SITE } from "@/data/site";
import type { Category } from "@/data/categories";
import type { Article } from "@/data/articles";

type Role = "admin" | "member";
type Page = "home" | "dashboard" | "quran" | "category" | "tools" | "article";

export default function App() {
  const [role, setRole] = useState<Role>("admin");
  const [page, setPage] = useState<Page>("home");
  const [aiOn, setAiOn] = useState(true);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const openCategory = (category: Category) => {
    setActiveCategory(category);
    setPage("category");
  };

  const openArticle = (article: Article) => {
    setActiveArticle(article);
    setPage("article");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const seo =
    page === "article" && activeArticle
      ? {
          title: `${activeArticle.title} - ${SITE.name}`,
          description: activeArticle.excerpt,
          path: `/artikel/${activeArticle.slug}`,
        }
      : page === "tools"
      ? {
          title: `Tools Islami - ${SITE.name}`,
          description:
            "Al-Qur'an digital, jadwal sholat, kalender Hijriah, kaligrafi Arab, dan khazanah kitab gratis.",
          path: "/tools",
        }
      : page === "category" && activeCategory
      ? {
          title: `${activeCategory.label} - ${SITE.name}`,
          description: `${activeCategory.count} tulisan kategori ${activeCategory.label} di ALHIKMAH.`,
          path: `/kategori/${activeCategory.slug}`,
        }
      : page === "quran"
      ? {
          title: `Al-Qur'an Digital - ${SITE.name}`,
          description: "Mushaf Al-Qur'an digital portable untuk membaca di mana saja.",
          path: "/quran",
        }
      : {
          title: `${SITE.name} - ${SITE.tagline}`,
          description: SITE.description,
          path: "/",
        };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <SeoHead title={seo.title} description={seo.description} path={seo.path} />
      <AppHeader
        role={role}
        onRoleChange={(r) => {
          setRole(r);
          setPage("dashboard");
        }}
        aiOn={aiOn}
        onToggleAi={() => setAiOn((v) => !v)}
        onOpenQuran={() => setPage("quran")}
        onOpenHome={() => setPage("home")}
        onOpenTools={() => setPage("tools")}
        quranActive={page === "quran"}
        homeActive={page === "home"}
        toolsActive={page === "tools"}
      />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 lg:px-8">
        <aside className="hidden w-64 shrink-0 lg:block">
          {page === "quran" ? (
            <QuranSidebar onBack={() => setPage("home")} />
          ) : role === "admin" ? (
            <AdminSidebar />
          ) : (
            <MemberSidebar />
          )}
        </aside>
        <main className="min-w-0 flex-1">
          {page === "home" ? (
            <HomePage onOpenCategory={openCategory} onOpenArticle={openArticle} />
          ) : page === "tools" ? (
            <ToolsPage />
          ) : page === "article" && activeArticle ? (
            <ArticlePage
              article={activeArticle}
              onBack={() => setPage("home")}
              onOpenArticle={openArticle}
            />
          ) : page === "category" && activeCategory ? (
            <CategoryPage
              category={activeCategory}
              onBack={() => setPage("home")}
              onOpenArticle={openArticle}
            />
          ) : page === "quran" ? (
            <QuranReader />
          ) : role === "admin" ? (
            <AdminDashboard aiOn={aiOn} onToggleAi={setAiOn} />
          ) : (
            <MemberWorkspace aiOn={aiOn} />
          )}
        </main>
      </div>
    </div>
  );
}