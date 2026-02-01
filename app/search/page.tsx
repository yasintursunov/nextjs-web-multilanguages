import React, { Suspense } from 'react';
import SearchPageClient from './SearchPageClient';

export const dynamic = 'force-dynamic';

function SearchFallback() {
  return (
    <div className="min-h-[64px] flex items-center justify-center p-4">
      Loading search…
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <Suspense fallback={<SearchFallback />}>
        <SearchPageClient />
      </Suspense>
    </main>
  );
}
