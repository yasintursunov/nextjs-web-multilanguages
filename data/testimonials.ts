import { TestimonialSection } from '../types/testimonial';

export const testimonialSection: TestimonialSection = {
  heading: {
    en: "What our clients are saying",
    ar: "ماذا يقول عملاؤنا"
  },
  description: {
    en: "Our clients range from individual investors, to local, international as well as fortune 500 companies. Our clients range from individual investors, to local, international as well as fortune 500 companies.",
    ar: "تتراوح عملاؤنا من المستثمرين الأفراد إلى الشركات المحلية والدولية وكذلك شركات فورتشن 500."
  },
  items: [
    {
      id: 1,
      name: { en: "Mohammed Saif", ar: "محمد سيف" },
      role: { en: "CEO/Company", ar: "المدير التنفيذي / الشركة" },
      quote: {
        en: "\"With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle...\"",
        ar: "\"بمساعدة الموظفين المضياف في الصفار وشركاه تمكنت من إنجاز عملي دون أي متاعب...\""
      },
      image: "/image.svg"
    },
    {
      id: 2,
      name: { en: "Sarah Connor", ar: "سارة كونور" },
      role: { en: "Marketing Director", ar: "مدير التسويق" },
      quote: {
        en: "\"Outstanding service and attention to detail. The team went above and beyond...\"",
        ar: "\"خدمة متميزة واهتمام بالتفاصيل. بذل الفريق قصارى جهده...\""
      },
      image: "/image.svg"
    }
  ]
};
