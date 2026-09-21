import { promises as fs } from "fs";
import path from "path";

const PAGES_FILE = path.join(process.cwd(), "app", "data", "pages.json");

export type PagePoint = {
  text: string;
  sort_order?: number;
};

export type TimelineItem = {
  title: string;
  description?: string;
  sort_order?: number;
  points?: PagePoint[];
};

export type PageData = {
  slug: string;
  title: string;
  subtitle?: string;
  image?: string | null;
  points?: PagePoint[];
  timeline_items?: TimelineItem[];
};

function bySortOrder(a: { sort_order?: number }, b: { sort_order?: number }) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0);
}

function sortPageData(page: PageData): PageData {
  return {
    ...page,
    points: page.points ? [...page.points].sort(bySortOrder) : [],
    timeline_items: page.timeline_items
      ? [...page.timeline_items].sort(bySortOrder).map((item) => ({
          ...item,
          points: item.points ? [...item.points].sort(bySortOrder) : [],
        }))
      : [],
  };
}

async function getAllPages(): Promise<PageData[]> {
  try {
    const raw = await fs.readFile(PAGES_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function getPage(slug: string): Promise<PageData | null> {
  const pages = await getAllPages();
  const page = pages.find((p) => p.slug === slug);
  return page ? sortPageData(page) : null;
}

// Feeds generateStaticParams — every slug becomes a pre-built page
export async function getAllSlugs(): Promise<string[]> {
  const pages = await getAllPages();
  return pages.map((p) => p.slug);
}