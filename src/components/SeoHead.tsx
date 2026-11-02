import { useEffect } from "react";
import { SITE } from "@/data/site";

interface SeoHeadProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  publishedTime?: string;
  author?: string;
  section?: string;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
}

export function SeoHead({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
  type = "website",
  keywords,
  publishedTime,
  author,
  section,
}: SeoHeadProps) {
  useEffect(() => {
    const url = `${SITE.url}${path}`;
    document.title = title;

    upsertMeta("name", "description", description);
    if (keywords) upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("name", "author", author ?? SITE.name);
    upsertMeta("name", "theme-color", SITE.themeColor);
    upsertMeta("name", "google-adsense-account", SITE.adsense);
    upsertMeta("name", "google-site-verification", "QT96Rd0InOuqkb4s1Wu5BlgGD_pCNOy8CsCtveF1zEA");
    upsertMeta("name", "google-site-verification", "SumuNvHw_nB3fsevMIU9N_0Oi7YWb9ykHovu0gjAbso");

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("property", "og:locale", SITE.locale);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:secure_url", image);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    if (publishedTime) upsertMeta("property", "article:published_time", publishedTime);
    if (section) upsertMeta("property", "article:section", section);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", SITE.twitter);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    upsertLink("icon", "/favicon.ico");
    upsertLink("apple-touch-icon", SITE.logo);
    upsertLink("manifest", "/manifest.json");
    upsertLink("canonical", url);
    upsertLink("alternate", "/rss.xml", { type: "application/rss+xml", title: "ALHIKMAH RSS" });
    upsertLink("alternate", "/atom.xml", { type: "application/atom+xml", title: "ALHIKMAH Atom" });

    const ldId = "alhikmah-ld-json";
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE.name,
        url: `${SITE.url}/`,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE.url}/?q={q}`,
          "query-input": "required name=q",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: `${SITE.url}/`,
        logo: SITE.logo,
      },
      ...(type === "article"
        ? [
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description,
              image,
              author: { "@type": "Person", name: author ?? SITE.name },
              publisher: {
                "@type": "Organization",
                name: SITE.name,
                logo: { "@type": "ImageObject", url: SITE.logo },
              },
              mainEntityOfPage: url,
              datePublished: publishedTime,
            },
          ]
        : []),
    ]);
  }, [title, description, path, image, type, keywords, publishedTime, author, section]);

  return null;
}