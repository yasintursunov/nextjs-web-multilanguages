'use client';
import Image from 'next/image';
import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { SupportedLanguages } from '@/types/index';
import { heroSlides } from '@/data/hero';
import { usePathname } from 'next/navigation';
import { siteData } from '@/data/siteData';

export default function Hero(): JSX.Element | null {
  const { i18n } = useTranslation();
  const lang = (i18n.language as SupportedLanguages) || 'en';
  const [currentSlide, setCurrentSlide] = useState(0);

  const pathname = usePathname() ?? '/';
  const isRoot = pathname === '/' || /^\/(en|ar)\/?$/.test(pathname);
  const slides = (heroSlides && heroSlides.length > 0) ? heroSlides : siteData.homepage.hero;
  const activeData = slides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isRoot) {
    return (
      <section className="relative h-screen min-h-150 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen min-h-150 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="absolute left-12  flex flex-col items-center gap-32">
        <div
          onClick={handlePrev}
          className="cursor-pointer transition hover:scale-110 p-2"
        >
          <Image
            src="/arrow.svg"
            alt="Previous"
            width={24}
            height={40}
            className="w-auto h-auto"
          />
        </div>

        <div className="flex flex-col gap-4 ">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-transparent border border-white/60 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1750px] pl-28  h-full grid grid-cols-12 items-center">
        <div key={currentSlide} className="col-span-6 text-white ">
          <h1 className="text-[28px] font-bold pb-8">
            {activeData.heading[lang]}
          </h1>
          <p className="text-[18px] max-w-lg pb-12">
            {activeData.subheading[lang]}
          </p>

          <div className="pt-4">
            <Link
              href={activeData.cta.link}
              className="inline-block px-10 py-3 bg-white text-[#4B2615] text-[18px] font-semibold rounded-md"
            >
              {activeData.cta.label[lang]}
            </Link>
          </div>
        </div>

        <div className="col-span-6 flex justify-end">
          <div className="relative w-[374px] h-[374px]">
            <Image
              key={currentSlide}
              src={activeData.profileImage}
              alt="Hero Portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
