
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About us",
        services: "Services",
        blog: "Blog",
        team: "Our Team",
        contact: "Contacts us",
        search: "Search"
      },
      footer: {
        subscribe: "Subscribe",
        emailPlaceholder: "you@example.com",
        links: {
          about: "About",
          strategy: "Our Strategy",
          advantages: "Our Advantages",
          responsibility: "Social Responsibility",
          services: "Our Services",
          contact: "Contacts us",
          rights: "All rights reserved."
        }
      },
      hero: { readMore: "Read More" },
      ourteam: { title: "Our Team" },
      search: { resultsFor: "Search results for" }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "من نحن",
        services: "الخدمات",
        blog: "المدونة",
        team: "فريقنا",
        contact: "اتصل بنا",
        search: "بحث"
      },
      footer: {
        subscribe: "اشترك",
        emailPlaceholder: "you@example.com",
        links: {
          about: "من نحن",
          strategy: "استراتيجيتنا",
          advantages: "مزايانا",
          responsibility: "المسؤولية الاجتماعية",
          services: "خدماتنا",
          contact: "اتصل بنا",  
          rights: "جميع الحقوق محفوظة."
        }
      },
      hero: { readMore: "اقرأ المزيد" },
      ourteam: { title: "فريقنا" },
      search: { resultsFor: "نتائج البحث عن" }
    }
  }
} as const;

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      supportedLngs: ['en', 'ar'],
      interpolation: { escapeValue: false },
      react: { useSuspense: false }
    });
}

export default i18n;
