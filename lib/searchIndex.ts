// src/lib/searchIndex.ts
import { SearchResultItem } from '@/types/search';
import { siteData } from '@/data/siteData';

// Build a simple in-memory index from siteData
export function buildSearchIndex(): SearchResultItem[] {
  const results: SearchResultItem[] = [];

  // Services
  siteData.homepage.services.forEach((s) => {
    results.push({
      id: s.id,
      type: 'services',
      title: s.title,
      excerpt: { en: s.description.en.slice(0, 200), ar: s.description.ar.slice(0, 200) },
      slug: s.slug,
      image: undefined
    });
  });

  // Team members
  siteData.homepage.team.members.forEach((m) => {
    results.push({
      id: m.id,
      type: 'team',
      title: m.name,
      excerpt: { en: m.role.en, ar: m.role.ar },
      image: m.image
    });
  });

  return results;
}

// Simple search: case-insensitive substring on title and excerpt for the given locale
export function searchIndex(index: SearchResultItem[], q: string, locale: 'en' | 'ar') {
  const term = q.trim().toLowerCase();
  if (!term) return index;
  return index.filter((item) => {
    const title = (item.title[locale] || '').toLowerCase();
    const excerpt = (item.excerpt?.[locale] || '').toLowerCase();
    return title.includes(term) || excerpt.includes(term);
  });
}
