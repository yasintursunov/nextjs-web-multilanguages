'use client';
import React, { JSX, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function NavbarBottom(): JSX.Element {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      console.log('subscribe', email);
      setStatus('ok');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('err');
    }
  };

  const bottomLinks = [
    t('footer.links.about', 'About'),
    t('footer.links.strategy', 'Our Strategy'),
    t('footer.links.advantages', 'Our Advantages'),
    t('footer.links.responsibility', 'Social Responsibility'),
    t('footer.links.services', 'Our Services'),
    t('footer.links.rights', 'All rights reserved.'),
    t('footer.links.contact', 'Contacts us')
  ];

  return (
    <footer className="bg-[rgb(var(--color-secondary))] text-[rgb(var(--color-primary))]">
      <div className="max-w-437.5 h-auto mx-auto py-12">

        <div className="flex flex-col-2 items-center justify-end gap-6">
          <div className="w-full md:w-1/4">
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.emailPlaceholder') || 'you@example.com'}
                className="flex-1 px-3 py-2 rounded-l bg-white/10 placeholder-white/70 text-white focus:outline-none"
                aria-label="Email"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[rgb(var(--color-primary))] text-[rgb(var(--color-secondary))] rounded-r font-medium"
                aria-label={t('footer.subscribe') || 'Subscribe'}
              >
                {t('footer.subscribe') || 'Subscribe'}
              </button>
            </form>

            {status === 'ok' && <div className="mt-2 text-green-300">Subscribed</div>}
            {status === 'err' && <div className="mt-2 text-red-300">Subscription failed</div>}
          </div>

          <div className="w-full flex items-center justify-end gap-8">
            <div className="text-[16px] text-right">
              <div>{t('footer.links.contact')}</div>
            </div>

            <div className="flex items-center gap-3">
              <button
                aria-label="Twitter"
                className=" flex items-center justify-center "
                type="button">
                <Image src="/twitter.svg" alt="twitter" width={16} height={16} />
              </button>

              <button
                aria-label="Facebook"
                className=" flex items-center justify-center "
                type="button">
                <Image src="/facebook.svg" alt="facebook" width={8} height={8} />
              </button>

              <button
                aria-label="Google"
                className=" flex items-center justify-center "
                type="button">
                <Image src="/google.svg" alt="google" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgb(var(--color-primary))]/10 my-6" />

        <div className="flex items-center text-[16px] gap-6">
          {bottomLinks.map((l, i) => (
            <button
              key={i}
              type="button"
              className="justify-start whitespace-nowrap"
            >
              {l}
            </button>
          ))}
          <div className="flex flex-1 justify-end font-thin">
            <div>{t('footer.links.rights')}</div>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
