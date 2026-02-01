// export type SupportedLanguages = 'en' | 'ar';

// export interface LocalizedString {
//   en: string;
//   ar: string;
// }

// export interface HeroSlide {
//   id: number;
//   heading: LocalizedString;
//   subheading: LocalizedString;
//   image: string;       
//   profileImage: string; 
//   cta: {
//     label: LocalizedString;
//     link: string;
//   };
// }

// export interface TeamMember {
//   id: number;
//   name: LocalizedString; 
//   role: LocalizedString;
//   image: string;
//   socials: {
//     whatsapp: string;
//     viber: string;
//     mail: string;
//   };
// }

// export interface TeamSection {
//   heading: LocalizedString;
//   description: LocalizedString;
//   members: TeamMember[];
// }


// export interface TestimonialItem {
//   id: number;
//   name: LocalizedString;
//   role: LocalizedString;
//   quote: LocalizedString;
//   image: string;
// }

// export interface TestimonialSection {
//   heading: LocalizedString;
//   description: LocalizedString;
//   items: TestimonialItem[];
// }

// export interface ServiceItem {
//   id: number;
//   slug: string;
//   title: LocalizedString;
//   description: LocalizedString;
//   content: {
//     main: LocalizedString;
//     sections: {
//       title: LocalizedString;
//       text: LocalizedString;
//       items?: LocalizedString[]; // Madde işaretli listeler için
//     }[];
//   };
// }

// export const siteData = {
//   homepage: {
    
//     hero: [
//       {
//         id: 1,
//         heading: {
//           en: "We craft digital experiences",
//           ar: "نحن نصنع تجارب رقمية"
//         },
//         subheading: {
//           en: "Design-driven development for web and mobile. We help brands grow.",
//           ar: "تطوير موجه بالتصميم للويب والجوال. نساعد العلامات التجارية على النمو."
//         },
//         image: "/hero.jpg",
//         profileImage: "/image.svg", 
//         cta: {
//           label: { en: "Read More", ar: "اقرأ المزيد" },
//           link: "/services/web-design"
//         }
//       },
//       {
//         id: 2,
//         heading: {
//           en: "Innovative Mobile Solutions",
//           ar: "حلول الهاتف المحمول المبتكرة"
//         },
//         subheading: {
//           en: "Building native and cross-platform apps that users love.",
//           ar: "بناء تطبيقات أصلية ومتعددة المنصات يحبها المستخدمون."
//         },
//         image: "/hero.jpg", 
//         profileImage: "/image.svg", 
//         cta: {
//           label: { en: "Our Apps", ar: "تطبيقاتنا" },
//           link: "/services/mobile-app"
//         }
//       },
//       {
//         id: 3,
//         heading: {
//           en: "Expert SEO Strategies",
//           ar: "استراتيجيات سيو الخبراء"
//         },
//         subheading: {
//           en: "Rank higher and reach more customers with our proven strategies.",
//           ar: "احصل على مرتبة أعلى وتواصل مع المزيد من العملاء من خلال استراتيجياتنا المبتكرة."
//         },
//         image: "/hero.jpg",
//         profileImage: "/image.svg", 
//         cta: {
//           label: { en: "View Plans", ar: "عرض الخطط" },
//           link: "/services/seo"
//         }
//       }
//     ] as HeroSlide[],

//     team: {
//       heading: { en: "Our Team", ar: "فريقنا" },
//       description: {
//         en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//         ar: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان لوريم إيبسوم هو النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر"
//       },
//       members: [
//         {
//           id: 1,
//           name: { en: "john Doe", ar: "الاسم هنا" },
//           role: { en: "ABS Dev", ar: "المسمى الوظيفي" },
//           image: "/image.svg", // public klasörüne bir foto koy
//           socials: { whatsapp: "#", viber: "#", mail: "mailto:test@test.com" }
//         },
//         {
//           id: 2,
//           name: { en: "jane Doe", ar: "الاسم هنا" },
//           role: { en: "Designer", ar: "المصمم" },
//           image: "/image.svg",
//           socials: { whatsapp: "#", viber: "#", mail: "mailto:test@test.com" }
//         },
//         {
//           id: 3,
//           name: { en: "john Doe", ar: "الاسم هنا" },
//           role: { en: "Developer", ar: "المطور" },
//           image: "/image.svg",
//           socials: { whatsapp: "#", viber: "#", mail: "mailto:test@test.com" }
//         },
//         {
//           id: 4,
//           name: { en: "Name Here", ar: "الاسم هنا" },
//           role: { en: "POSITION HERE", ar: "المسمى الوظيفي" },
//           image: "/image.svg",
//           socials: { whatsapp: "#", viber: "#", mail: "mailto:test@test.com" }
//         },
//          {
//           id: 5,
//           name: { en: "Name Here", ar: "الاسم هنا" },
//           role: { en: "POSITION HERE", ar: "المسمى الوظيفي" },
//           image: "/image.svg",
//           socials: { whatsapp: "#", viber: "#", mail: "mailto:test@test.com" }
//         }
//       ]
//     } as TeamSection,

//     testimonials: {
//       heading: {
//         en: "What our clients are saying",
//         ar: "ماذا يقول عملاؤنا"
//       },
//       description: {
//         en: "Our clients range from individual investors, to local, international as well as fortune 500 companies. Our clients range from individual investors, to local, international as well as fortune 500 companies.",
//         ar: "تتراوح عملاؤنا من المستثمرين الأفراد إلى الشركات المحلية والدولية وكذلك شركات فورتشن 500."
//       },
//       items: [
//         {
//           id: 1,
//           name: { en: "Mohammed Saif", ar: "محمد سيف" },
//           role: { en: "CEO/Company", ar: "المدير التنفيذي / الشركة" },
//           quote: {
//             en: "\"With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced. I was always updated about my case and my queries never went unanswered.\"",
//             ar: "\"بمساعدة الموظفين المضياف في الصفار وشركاه تمكنت من إنجاز عملي دون أي متاعب. المساعدة التي تلقيتها ساعدتني كثيراً للتغلب على المشاكل التي واجهتها.\""
//           },
//           image: "/image.svg" // public klasöründeki görsel
//         },
//         {
//           id: 2,
//           name: { en: "Sarah Connor", ar: "سارة كونور" },
//           role: { en: "Marketing Director", ar: "مدير التسويق" },
//           quote: {
//             en: "\"Outstanding service and attention to detail. The team went above and beyond to ensure our project was delivered on time. Highly recommended!\"",
//             ar: "\"خدمة متميزة واهتمام بالتفاصيل. بذل الفريق قصارى جهده لضمان تسليم مشروعنا في الوقت المحدد. ينصح به بشدة!\""
//           },
//           image: "/image.svg"
//         }
//       ]
//     } as TestimonialSection,

//     services: [
//     {
//       id: 1,
//       slug: 'legal-consultation',
//       title: { en: 'Legal Consultation Services', ar: 'خدمات الاستشارات القانونية' },
//       description: { 
//         en: 'Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies. Our mission is to provide comprehensive and specialized legal support to meet our clients needs and offer the best legal solutions in various cases and legal fields, we provide our legal consultations services as a follow:', 
//         ar: 'مكتب المحاماة هو أحد المكاتب القانونية الرائدة التي تقدم خدمات استشارية استثنائية للأفراد والشركات على حد سواء. مهمتنا هي تقديم دعم قانوني شامل ومتخصص لتلبية احتياجات عملائنا وتقديم أفضل الحلول القانونية في مختلف القضايا والمجالات القانونية، نحن نقدم خدمات استشاراتنا القانونية كما يلي:' 
//       },
//       content: {
//         main: {
//           en: 'Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies. Our mission is to provide comprehensive and specialized legal support to meet our clients needs and offer the best legal solutions in various cases and legal fields.',
//           ar: 'مهمتنا هي تقديم دعم قانوني شامل ومتخصص لتلبية احتياجات عملائنا وتقديم أفضل الحلول القانونية في مختلف القضايا والمجالات القانونية.'
//         },
//         sections: [
//           {
//             title: { en: 'General Legal Consultations', ar: 'استشارات قانونية عامة' },
//             text: { 
//               en: 'At Law Firm, we provide comprehensive legal consultations covering all legal aspects...', 
//               ar: 'في مكتب المحamاة، نقدم استشارات قانونية شاملة تغطي جميع الجوانب القانونية...' 
//             }
//           },
//           {
//             title: { en: 'Corporate Legal Consultations', ar: 'استشارات قانونية للشركات' },
//             text: { en: 'Our advisory services about:', ar: 'خدماتنا الاستشارية حول:' },
//             items: [
//               { en: 'Establishing and registering companies.', ar: 'تأسيس وتسجيل الشركات.' },
//               { en: 'All kinds of contracts and agreements.', ar: 'كافة أنواع العقود والاتفاقيات.' }
//             ]
//           }
//         ]
//       }
//     },
//     // Diğer 17 servisi buraya aynı yapıda ekleyebilirsin...
//   ] as ServiceItem[]
//   }
// };