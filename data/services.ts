import { ServiceItem } from '../types/service';

export const services: ServiceItem[] = [
  {
    id: 1,
    slug: 'legal-consultation',
    title: { en: 'Legal Consultation Services', ar: 'خدمات الاستشارات القانونية' },
    description: {
      en: 'Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies. Our mission is to provide comprehensive and specialized legal support to meet our clients needs and offer the best legal solutions in various cases and legal fields, we provide our legal consultations services as a follow:',
      ar: 'مكتب المحاماة هو أحد المكاتب القانونية الرائدة التي تقدم خدمات استشارية استثنائية للأفراد والشركات على حد سواء. مهمتنا هي تقديم دعم قانوني شامل ومتخصص لتلبية احتياجات عملائنا...'
    },
    content: {
      main: {
        en: 'Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies. Our mission is to provide comprehensive and specialized legal support to meet our clients needs and offer the best legal solutions in various cases and legal fields.',
        ar: 'مهمتنا هي تقديم دعم قانوني شامل ومتخصص لتلبية احتياجات عملائنا وتقديم أفضل الحلول القانونية...'
      },
      sections: [
        {
          title: { en: 'General Legal Consultations', ar: 'استشارات قانونية عامة' },
          text: {
            en: 'At Law Firm, we provide comprehensive legal consultations covering all legal aspects...',
            ar: 'في مكتب المحاماة، نقدم استشارات قانونية شاملة تغطي جميع الجوانب القانونية...'
          }
        },
        {
          title: { en: 'Corporate Legal Consultations', ar: 'استشارات قانونية للشركات' },
          text: { en: 'Our advisory services about:', ar: 'خدماتنا الاستشارية حول:' },
          items: [
            { en: 'Establishing and registering companies.', ar: 'تأسيس وتسجيل الشركات.' },
            { en: 'All kinds of contracts and agreements.', ar: 'كافة أنواع العقود والاتفاقيات.' }
          ]
        }
      ]
    }
  }
  // diğer servisleri aynı yapıda ekleyebilirsin
];
