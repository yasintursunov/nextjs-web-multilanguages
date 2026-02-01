'use client';
import { siteData } from '@/data/siteData';
import { SupportedLanguages } from '@/types/index';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Team() {
  const { i18n } = useTranslation();
  const lang = (i18n.language as SupportedLanguages) || 'en';
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamData = siteData.homepage.team;
  const members = teamData.members;
  const itemsPerPage = 3;
  const maxIndex = members.length - itemsPerPage;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-[1400px] px-12">
        

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[42px] font-bold text-[#4B2615]">
            {teamData.heading[lang]}
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-[18px]">
            {teamData.description[lang]}
          </p>
        </div>


        <div className="relative flex items-center ">
          

          <button 
            onClick={handlePrev}
            className="absolute -left-16 z-10 p-2 hover:scale-110 transition opacity-70 hover:opacity-100 black-icon"
          >
            <Image 
              src="/arrow.svg" 
              alt="Previous" 
              width={16} 
              height={30} 
            />
          </button>

          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
              }}
            >
              {members.map((member) => (
                <div 
                  key={member.id} 
          
                  className="min-w-[calc(33.333%-22px)] flex flex-col items-center group">                 

                  <div className="relative w-full aspect-[4/3] bg-[#5D3A29] mb-6 ">
                    <Image 
                      src={member.image}
                      alt={member.name[lang]}
                      fill
                      className="object-cover "
                    />
                  </div>

                  <h3 className="text-[22px] font-bold text-[#4B2615] mb-1">
                    {member.name[lang]}
                  </h3>
                  <p className="text-[14px] font-semibold text-gray-400 uppercase mb-4">
                    {member.role[lang]}
                  </p>

                  <div className="flex items-center gap-6 mt-2">
                    <a href={member.socials.whatsapp} className="hover:scale-110 transition">
                      <Image src="/whatsapp.svg" alt="Whatsapp" width={20} height={20} />
                    </a>
                    
                    <a href={member.socials.viber} className="hover:scale-110 transition">
                      <Image src="/viber.svg" alt="Viber" width={24} height={24} />
                    </a>

                    <a href={member.socials.mail} className="hover:scale-110 transition">
                      <Image src="/mail.svg" alt="Mail" width={22} height={22} />
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="absolute -right-16 z-10 p-2 hover:scale-110 transition opacity-70 hover:opacity-100 black-icon"
          >
            <Image 
              src="/arrow.svg" 
              alt="Next" 
              width={16} 
              height={30} 
              className="rotate-180"
            />
          </button>

        </div>
      </div>
    </section>
  );
}