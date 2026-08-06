// Central SEO helpers for consistent metadata across the site.

export const SITE_URL = "https://asesoriasacademicaslatam.com";
export const SITE_NAME = "Asesorías Académicas";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.jpg`;

export const abs = (path: string) => {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Empresa colombiana de asesoría, tutoría y acompañamiento académico ético para estudiantes de pregrado y posgrado.",
  address: { "@type": "PostalAddress", addressCountry: "CO" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+57-316-364-1646",
      contactType: "customer service",
      areaServed: ["CO", "Latinoamérica"],
      availableLanguage: ["Spanish"],
    },
  ],
  sameAs: ["https://www.instagram.com/asesorias_academics/"],
};

type MetaEntry =
  | { title: string }
  | { charSet: string }
  | { name: string; content: string }
  | { property: string; content: string };

type HeadReturn = {
  meta: MetaEntry[];
  links: { rel: string; href: string; type?: string }[];
  scripts?: { type: string; children: string }[];
};

type BaseCfg = {
  path: string;
  title: string;
  description: string;
  ogType?: "website" | "article";
  image?: string;
  noindex?: boolean;
};

/** Meta + canonical + twitter cards + og for any page. */
export function pageHead(cfg: BaseCfg, extraScripts: { type: string; children: string }[] = []): HeadReturn {
  const url = abs(cfg.path);
  const image = cfg.image ?? DEFAULT_OG_IMAGE;
  const meta: MetaEntry[] = [
    { title: cfg.title },
    { name: "description", content: cfg.description },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: cfg.title },
    { property: "og:description", content: cfg.description },
    { property: "og:url", content: url },
    { property: "og:type", content: cfg.ogType ?? "website" },
    { property: "og:image", content: image },
    { property: "og:locale", content: "es_CO" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: cfg.title },
    { name: "twitter:description", content: cfg.description },
    { name: "twitter:image", content: image },
  ];
  if (cfg.noindex) meta.push({ name: "robots", content: "noindex,nofollow" });
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: extraScripts,
  };
}

type ServiceCfg = BaseCfg & {
  serviceName: string;
  faq?: { q: string; a: string }[];
};

export function serviceHead(cfg: ServiceCfg): HeadReturn {
  const scripts: { type: string; children: string }[] = [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: cfg.serviceName,
        serviceType: cfg.serviceName,
        description: cfg.description,
        url: abs(cfg.path),
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: [
          { "@type": "Country", name: "Colombia" },
          { "@type": "Place", name: "Latinoamérica" },
        ],
      }),
    },
  ];
  if (cfg.faq && cfg.faq.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: cfg.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    });
  }
  return pageHead({ ...cfg, ogType: cfg.ogType ?? "website" }, scripts);
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}
