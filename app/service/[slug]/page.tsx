import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/data/siteData';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const serviceData = siteData.homepage.services.find((s) => s.slug === slug);

  if (!serviceData) {
      notFound();
  }
  const lang = 'en'; 

  return (
    <main className="min-h-screen bg-[rgb(var(--color-primary))] text-[rgb(var(--color-secondary))] py-24 ">
      <div className="container mx-auto px-12 max-w-[1750px]">
        
        <Link
          href="/"
          className="flex items-center gap-4 mb-12">
          <Image
            src="/arrow.svg"
            alt="Back"
            width={14}
            height={14}
            className=" w-auto h-auto black-icon "/>
          <p className='text-[16px]'>Back</p>
        </Link>

        <h1 className="text-[48px] font-bold mb-8">
          {serviceData.title[lang]}
        </h1>

        <p className=" text-[18px] leading-relaxed mb-12">
          {serviceData.description[lang]}
          <br /><br />
          {serviceData.content.main[lang]}
        </p>

        <div className="space-y-12">
          {serviceData.content.sections.map((section, idx) => (
            <div key={idx} className="border-l-2 border-[rgb(var(--color-secondary))]/20 pl-6">
              <h2 className="text-[22px] font-bold  mb-4">
                {section.title[lang]}
              </h2>
              <p className=" leading-relaxed mb-4">
                {section.text[lang]}
              </p>
              {section.items && (
                <ul className="list-disc list-inside space-y-2 ">
                  {section.items.map((item, i) => (
                    <li key={i}>{item[lang]}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 ">
          <p>Contact us today to receive professional and comprehensive legal consultation.</p>
        </div>
      </div>
    </main>
  );
}