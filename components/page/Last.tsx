'use client';
import { siteData } from '@/data/siteData';
import { SupportedLanguages } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function Last() {
  const { i18n } = useTranslation();
  const lang = (i18n.language as SupportedLanguages) || 'en';
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = siteData.homepage.testimonials;
  const items = data.items;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const currentItem = items[currentIndex];

  return (
    <section className="bg-[#3E2316] text-white py-24">
      <div className="container mx-auto px-12 max-w-[1750px]">

        <div className="mb-16">
          <h2 className="text-[40px] font-bold mb-6">
            {data.heading[lang]}
          </h2>
          <p className="text-white/80 text-[18px] max-w-[580px] leading-relaxed">
            {data.description[lang]}
          </p>
        </div>

        <div className="relative grid grid-cols-12 gap-12 items-end">
          
          <div className="col-span-3">
            <div key={currentIndex} className="relative w-[374px] h-[374px]">
              <Image 
                src={currentItem.image}
                alt={currentItem.name[lang]}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="col-span-8 flex flex-col ">
            <div key={currentIndex} >
              <p className="text-[24px] font-regular">
                {currentItem.quote[lang]}
              </p>
              
              <div>
                <h3 className="text-[24px] font-bold mt-60 ">
                  {currentItem.name[lang]}
                </h3>
                <p className="text-white/60 text-[16px] mt-2 ">
                  {currentItem.role[lang]}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-12 bottom-12 flex gap-4 z-10">
            <button 
              onClick={handlePrev}
              className="w-[67px] h-[67px] rounded-full border border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center transition active:scale-95"
            >
              <Image 
                src="/arrow.svg" 
                alt="Previous" 
                width={20} 
                height={20} 
                className="brightness-0 invert opacity-70" 
              />
            </button>

            <button 
              onClick={handleNext}
              className="w-[67px] h-[67px] rounded-full bg-white text-[#3E2316] flex items-center justify-center transition hover:scale-105 active:scale-95 shadow-lg">
              <Image 
                src="/arrow.svg" 
                alt="Next" 
                width={20} 
                height={20} 
                className="rotate-180 brightness-0" 
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
