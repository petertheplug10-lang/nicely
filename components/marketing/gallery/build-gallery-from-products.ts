import type {
  ProductCategoriesPayload,
  ProductListItem,
} from "@/lib/api/types";
import type {
  GalleryChapter,
  GallerySeries,
  LifestyleProduct,
  PouchProduct,
} from "@/components/marketing/gallery/gallery-data";

const CHAPTER_META = {
  classic: {
    id: "chapter-one",
    order: 0,
  },
  premium: {
    id: "chapter-two-premium",
    order: 1,
  },
  lifestyle: {
    id: "lifestyle",
    order: 2,
  },
} as const;

type ChapterSlug = keyof typeof CHAPTER_META;

/** API secondary name (lowercase) → sidebar / heading copy */
const SECONDARY_TO_SERIES: Record<string, string> = {
  "classic mint": "Classic Mint Series",
  "crafted beverage": "Crafted Beverage Series",
  "sweet fusion": "Sweet Fusion Series",
};

const SERIES_NAV_ORDER = [
  "Classic Mint Series",
  "Crafted Beverage Series",
  "Sweet Fusion Series",
];

const FALLBACK_POUCH_IMAGE = "/images/gallery/cool-mint.png";

function norm(s: string | null | undefined): string {
  return (s ?? "").trim().toLowerCase();
}

export function normalizeStrengthLabel(raw: string): string {
  return raw.trim().toUpperCase().replace(/\s+/g, "");
}

function secondaryToSeriesName(secondary: string | null): string {
  const key = norm(secondary);
  if (key && SECONDARY_TO_SERIES[key]) return SECONDARY_TO_SERIES[key];
  if (!key) return "";
  const words = secondary!
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
  const t = words.join(" ");
  return t.endsWith("Series") ? t : `${t} Series`;
}

function seriesSlugForId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function seriesSortIndex(name: string): number {
  const i = SERIES_NAV_ORDER.indexOf(name);
  return i === -1 ? SERIES_NAV_ORDER.length : i;
}

function chapterSlugFromPrimary(primary: string | null): ChapterSlug {
  const p = norm(primary);
  if (p === "premium") return "premium";
  if (p === "lifestyle" || p === "nicozy lifestyle") return "lifestyle";
  return "classic";
}

/** Lifestyle primary — strength filters do not apply to these products. */
export function isLifestylePrimary(primary: string | null): boolean {
  return chapterSlugFromPrimary(primary) === "lifestyle";
}

function chapterHeadingForSlug(
  slug: ChapterSlug,
  samplePrimaryRaw: string | null,
): string {
  if (slug === "classic") return "Chapter One: Classic";
  if (slug === "premium") return "Chapter Two: Premium";
  const raw = samplePrimaryRaw?.trim();
  if (!raw) return "Lifestyle";
  return raw
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function sortStrengthLabels(a: string, b: string): number {
  const na = parseInt(a, 10);
  const nb = parseInt(b, 10);
  if (!Number.isNaN(na) && !Number.isNaN(nb) && na !== nb) return na - nb;
  return a.localeCompare(b);
}

/**
 * Strength filter labels: order follows `/api/product-categories` `strength` (by `sort`),
 * then any extra values present on pouch products but missing from that list.
 */
export function deriveStrengthOptions(
  categories: ProductCategoriesPayload | null | undefined,
  products: ProductListItem[],
): string[] {
  const ordered: string[] = [];
  const seen = new Set<string>();

  for (const item of [...(categories?.strength ?? [])].sort(
    (a, b) => a.sort - b.sort,
  )) {
    const label = normalizeStrengthLabel(item.name);
    if (!seen.has(label)) {
      seen.add(label);
      ordered.push(label);
    }
  }

  const extras: string[] = [];
  for (const p of products) {
    if (isLifestylePrimary(p.primary_category)) continue;
    for (const s of p.strength_categories) {
      const label = normalizeStrengthLabel(s);
      if (!seen.has(label)) {
        seen.add(label);
        extras.push(label);
      }
    }
  }
  extras.sort(sortStrengthLabels);
  return [...ordered, ...extras];
}

function productToPouch(p: ProductListItem): PouchProduct {
  return {
    name: p.name,
    description: p.subtitle?.trim() ?? "",
    imageSrc: p.cover_image?.trim() || FALLBACK_POUCH_IMAGE,
    strengths: p.strength_categories.map(normalizeStrengthLabel),
  };
}

function formatLifestylePrice(price: string): string {
  const t = price.trim();
  if (t.startsWith("$")) return t;
  return `$${t}`;
}

function productToLifestyle(p: ProductListItem): LifestyleProduct {
  return {
    name: p.name,
    price: formatLifestylePrice(p.price),
    imageSrc: p.cover_image?.trim() || FALLBACK_POUCH_IMAGE,
  };
}

/**
 * Group products by `primary_category` (classic / premium / lifestyle) and `secondary_category` series.
 */
export function buildGalleryChaptersFromProducts(
  products: ProductListItem[],
): GalleryChapter[] {
  const grouped = new Map<ChapterSlug, Map<string, ProductListItem[]>>();

  for (const p of products) {
    const ch = chapterSlugFromPrimary(p.primary_category);
    const seriesName = secondaryToSeriesName(p.secondary_category);
    if (!grouped.has(ch)) grouped.set(ch, new Map());
    const m = grouped.get(ch)!;
    if (!m.has(seriesName)) m.set(seriesName, []);
    m.get(seriesName)!.push(p);
  }

  for (const m of grouped.values()) {
    for (const [name, list] of m) {
      m.set(
        name,
        [...list].sort((a, b) => {
          if (a.display_weight !== b.display_weight) {
            return a.display_weight - b.display_weight;
          }
          return a.name.localeCompare(b.name);
        }),
      );
    }
  }

  const result: GalleryChapter[] = [];
  const chapterOrder: ChapterSlug[] = ["classic", "premium", "lifestyle"];

  for (const slug of chapterOrder) {
    const meta = CHAPTER_META[slug];
    const seriesMap = grouped.get(slug);
    if (!seriesMap || seriesMap.size === 0) continue;

    const seriesNames = [...seriesMap.keys()].sort(
      (a, b) => seriesSortIndex(a) - seriesSortIndex(b) || a.localeCompare(b),
    );
    const samplePrimary =
      seriesMap.get(seriesNames[0]!)?.[0]?.primary_category ?? null;

    const series: GallerySeries[] = seriesNames.map((name) => {
      const items = seriesMap.get(name)!;
      if (slug === "lifestyle") {
        return {
          kind: "lifestyle",
          id: `${meta.id}-${seriesSlugForId(name)}`,
          name,
          items: items.map(productToLifestyle),
        };
      }
      const shell = slug === "premium" ? ("premium" as const) : undefined;
      return {
        kind: "pouch",
        id: `${meta.id}-${seriesSlugForId(name)}`,
        name,
        shell,
        products: items.map(productToPouch),
      };
    });

    result.push({
      id: meta.id,
      title: chapterHeadingForSlug(slug, samplePrimary),
      series,
    });
  }

  return result;
}

export function isRemoteGalleryImage(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}
