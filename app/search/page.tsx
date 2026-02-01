'use client';
import React, { JSX, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { buildSearchIndex, searchIndex } from '@/lib/searchIndex';
import { SearchResultItem } from '@/types/search';
import { SupportedLanguages } from '@/types/index';

const PAGE_SIZE = 3;

export default function SearchPage(): JSX.Element {
  const { i18n, t } = useTranslation();
  const locale = (i18n.language as SupportedLanguages) || 'en';
  const searchParams = useSearchParams();
  const router = useRouter();

  const qParam = searchParams.get('q') || '';
  const pageParam = parseInt(searchParams.get('page') || '1', 10);

  const index = useMemo(() => buildSearchIndex(), []);
  const [activeTab, setActiveTab] = useState<'services' | 'team'>('services');

  const allMatches = useMemo(() => {
    const matches = searchIndex(index, qParam, locale);
    return matches.filter((m) => (activeTab ? m.type === activeTab : true));
  }, [index, qParam, locale, activeTab]);

  const total = allMatches.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, pageParam), totalPages);

  const pageItems = allMatches.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    
    <div className="min-h-screen bg-[rgb(var(--color-primary))]  text-[rgb(var(--color-secondary))] max-w-[1750px] mx-auto flex flex-col">
    
      <div className="flex-1 py-10 grid grid-cols-12 gap-6 overflow-visible">
       
        <aside className="col-span-2">
          <div className="bg-[#FAFAFA] p-4 w-[167px]">
            <button
              className={`w-full px-4 py-6 flex items-center justify-start ${
                activeTab === 'team' ? ' font-semibold ' : 'text-[rgb(var(--color-secondary))]/90'
              }`}
              onClick={() => { setActiveTab('team'); router.push(`/search?q=${encodeURIComponent(qParam)}&page=1`); }}>
              Team
            </button>

            <button
              className={`w-full px-4 py-6 flex items-center justify-start ${
                activeTab === 'services' ? '  font-semibold ' : 'text-[rgb(var(--color-secondary))]/90'
              }`}
              onClick={() => { setActiveTab('services'); router.push(`/search?q=${encodeURIComponent(qParam)}&page=1`); }}>
              Services
            </button>
          </div>
        </aside>

        <main className="col-span-10 pr-4 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 text-[16px] ">
                <Image
                  src="/arrow.svg"
                  alt="Back"
                  width={14}
                  height={14}
                  className=" w-auto h-auto black-icon"
                />
                <span className="ml-1 text-[16px] font-bold ">{t('search.back', 'Back')}</span>
              </Link>
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <div className="flex flex-col divide-y divide-gray-200">
              {pageItems.length === 0 && (
                <div className=" bg-white text-center text-[16px]">
                  {t('search.noResults', 'No results found')}
                </div>
              )}

              {pageItems.map((item: SearchResultItem) => (
                <article
                  key={`${item.type}-${item.id}`}
                  className="py-6 flex justify-between items-start ">
                  <div className="pr-4">
                    <h3 className="text-base font-medium mb-2">
                      {item.type === 'services' && item.slug ? (
                        <Link href={`/service/${item.slug}`} className=" hover:underline">
                          {item.title[locale]}
                        </Link>
                      ) : (
                        <span className="">{item.title[locale]}</span>
                      )}
                    </h3>
                    <p className="text-[16px] max-w-4xl">{item.excerpt?.[locale]}</p>
                  </div>

                  <div className="text-[16px] mt-1">{item.type.toUpperCase()}</div>
                </article>
              ))}
            </div>
          </div>
        </main>
      </div>

      <div className="w-full">
        <div className="max-w-[1750px] mx-auto px-6 pb-10">
          <div className="mt-8 flex items-center justify-end gap-3">
            <button
              className="px-3 py-1"
              disabled={currentPage <= 1}
              onClick={() => router.push(`/search?q=${encodeURIComponent(qParam)}&page=${currentPage - 1}`)}>
              &lt;
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const p = idx + 1;
              return (
                <button
                  key={p}
                  className={`px-3 py-1 ${p === currentPage ? 'border-b border-[rgb(var(--color-secondary))] ' : ''}`}
                  onClick={() => router.push(`/search?q=${encodeURIComponent(qParam)}&page=${p}`)}>
                  {p}
                </button>
              );
            })}

            <button
              className="px-3 py-1"
              disabled={currentPage >= totalPages}
              onClick={() => router.push(`/search?q=${encodeURIComponent(qParam)}&page=${currentPage + 1}`)}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
