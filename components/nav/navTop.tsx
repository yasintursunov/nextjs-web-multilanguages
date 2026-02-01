'use client';
import React, { JSX, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { SupportedLanguages } from '@/types/index';
import { siteData } from '@/data/siteData';
import { usePathname, useRouter } from 'next/navigation';
import SearchBar from '@/components/nav/SearchBar';

export default function NavbarTop(): JSX.Element {
  const { i18n, t } = useTranslation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showInlineSearch, setShowInlineSearch] = useState(false);
  const dropdownRef = useRef<HTMLElement | null>(null);
  const inlineRef = useRef<HTMLDivElement | null>(null);
  const lang = (i18n.language as SupportedLanguages) || 'en';
  const serviceData = siteData.homepage.services;
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
      if (inlineRef.current && !inlineRef.current.contains(e.target as Node)) {
        setShowInlineSearch(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowInlineSearch(false);
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    if (pathname?.startsWith('/search')) {
      setShowInlineSearch(true);
    } else {
      setShowInlineSearch(false);
    }
  }, [pathname]);

  const toggleLang = () => i18n.changeLanguage(lang === 'en' ? 'ar' : 'en');

  const navItems = [
    { label: t('nav.home') || 'Home', href: '/' },
    { label: t('nav.about') || 'About us', href: '/about' },
    { label: t('nav.services') || 'Services', isDropdown: true },
    { label: t('nav.blog') || 'Blog', href: '/blogs' },
    { label: t('nav.team') || 'Our Team', href: '/team' },
    { label: t('nav.contact') || 'Contacts us', href: '/contact' }
  ];

  return (
    <header
      ref={dropdownRef as React.RefObject<HTMLElement>}
      className={`absolute inset-x-0 top-0 z-50 ${isServicesOpen ? 'bg-[rgb(var(--color-secondary))]' : 'bg-transparent'}`}
    >
      <div className="max-w-[1750px] text-[rgb(var(--color-primary))] mx-auto px-8 relative">
        <div className="grid grid-cols-3 items-center h-24">
        <div />

          <nav className="flex flex-row flex-nowrap justify-center items-center gap-8 w-full">
            {navItems.map((item, i) => (
              <React.Fragment key={i}>
                {item.isDropdown ? (
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen((s) => !s)}
                    className={`text-[16px] whitespace-nowrap flex items-center gap-2 transition-opacity hover:opacity-80 ${
                      isServicesOpen ? 'opacity-100 font-medium' : ''
                    }`}
                    aria-haspopup="menu"
                    aria-expanded={isServicesOpen}
                  >
                    <span>{item.label}</span>
                    <Image
                      src="/arrow.svg"
                      alt="arrow"
                      width={12}
                      height={12}
                      className={`transition-transform duration-200 rotate-[-90deg] ${isServicesOpen ? 'rotate-[90deg]' : ''}`}
                    />
                  </button>
                ) : (
                  <Link key={i} href={item.href} className="text-[16px] ">
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* SAĞ: inline search / lang / appointment */}
          <div className="flex items-center justify-end gap-3">
            <div ref={inlineRef} className="relative">
              {showInlineSearch ? (
                <div className="w-[320px] ">
                  <SearchBar
                    autoFocus
                    onClose={() => {
                      setShowInlineSearch(false);
                    }}
                  />
                </div>
              ) : (
                <button
                  type="button"
                  className="flex items-center justify-center"
                  aria-label="Search"
                  onClick={() => {
                    setShowInlineSearch(true);
                    if (!pathname?.startsWith('/search')) {
                      router.push('/search');
                    }
                  }}
                >
                  <Image src="/search.svg" alt="search" width={18} height={18} />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={toggleLang}
              className="px-3 py-1 bg-[rgb(var(--color-primary))] text-[rgb(var(--color-secondary))] rounded font-medium"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>

            <button
              type="button"
              className="px-4 py-2 border border-white rounded-[10px] hover:bg-white text-[rgb(var(--color-secondary))] transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {isServicesOpen && (
        <div className="absolute top-full left-0 w-full bg-[rgb(var(--color-secondary))] text-[rgb(var(--color-primary))] rounded-b-[20px]">
          <div className="max-w-[1750px] mx-auto px-8 py-10 rounded-b-[20px]">
            <div className="grid grid-cols-4 gap-6">
              {serviceData.map((service) => (
                <Link
                  key={service.id}
                  href={`/service/${service.slug}`}
                  onClick={() => setIsServicesOpen(false)}
                  className="group"
                >
                  <h3 className="text-[15px] font-medium">
                    {service.title[lang]}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
