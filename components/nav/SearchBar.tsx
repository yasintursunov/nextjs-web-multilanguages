'use client';
import React, { useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

type Props = {
  autoFocus?: boolean;
  onClose?: () => void;
  className?: string;
};

export default function SearchBar({ autoFocus = false, onClose, className = '' }: Props) {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const qParam = searchParams?.get('q') ?? '';
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) inputRef.current.focus();
  }, [autoFocus]);

  return (
    <Formik
      initialValues={{ q: qParam }}
      onSubmit={(values) => {
        const q = (values.q || '').trim();
        router.push(`/search?q=${encodeURIComponent(q)}&page=1`);
        if (onClose) onClose();
      }}
    >
      {() => (
        <Form className={`relative w-full ${className}`}>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image src="/search.svg" alt="search" width={18} height={18} />
            </div>

            <Field name="q">
              {({ field }: any) => (
                <input
                  {...field}
                  ref={inputRef}
                  placeholder={t('search.placeholder', 'Search...')}
                  className="w-full md:w-[320px] pl-11 pr-4 py-2 rounded-[10px] border"
                  aria-label="Search"
                />
              )}
            </Field>
          </div>

          <button type="submit" className="sr-only" aria-hidden="true" />
        </Form>
      )}
    </Formik>
  );
}
