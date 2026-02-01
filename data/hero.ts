import { HeroSlide } from '../types/hero';

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    heading: {
      en: "We craft digital experiences",
      ar: "نحن نصنع تجارب رقمية"
    },
    subheading: {
      en: "Design-driven development for web and mobile. We help brands grow.",
      ar: "تطوير موجه بالتصميم للويب والجوال. نساعد العلامات التجارية على النمو."
    },
    image: "/hero.jpg",
    profileImage: "/image.svg",
    cta: {
      label: { en: "Read More", ar: "اقرأ المزيد" },
      link: "/services/web-design"
    }
  },
  {
    id: 2,
    heading: {
      en: "Innovative Mobile Solutions",
      ar: "حلول الهاتف المحمول المبتكرة"
    },
    subheading: {
      en: "Building native and cross-platform apps that users love.",
      ar: "بناء تطبيقات أصلية ومتعددة المنصات يحبها المستخدمون."
    },
    image: "/hero.jpg",
    profileImage: "/image.svg",
    cta: {
      label: { en: "Our Apps", ar: "تطبيقاتنا" },
      link: "/services/mobile-app"
    }
  },
  {
    id: 3,
    heading: {
      en: "Expert SEO Strategies",
      ar: "استراتيجيات سيو الخبراء"
    },
    subheading: {
      en: "Rank higher and reach more customers with our proven strategies.",
      ar: "احصل على مرتبة أعلى وتواصل مع المزيد من العملاء من خلال استراتيجياتنا المبتكرة."
    },
    image: "/hero.jpg",
    profileImage: "/image.svg",
    cta: {
      label: { en: "View Plans", ar: "عرض الخطط" },
      link: "/services/seo"
    }
  }
];
