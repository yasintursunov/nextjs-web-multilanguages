import { TeamSection } from '../types/team';

export const teamSection: TeamSection = {
  heading: { en: "Our Team", ar: "فريقنا" },
  description: {
    en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ar: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان لوريم إيبسوم هو النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر"
  },
  members: [
    {
      id: 1,
      name: { en: "John Doe", ar: "الاسم هنا" },
      role: { en: "ABS Dev", ar: "المسمى الوظيفي" },
      image: "/image.svg",
      socials: { whatsapp: "#", viber: "#", mail: "mailto:test@test.com" }
    },
    {
      id: 2,
      name: { en: "Jane Doe", ar: "الاسم هنا" },
      role: { en: "Designer", ar: "المصمم" },
      image: "/image.svg",
      socials: { whatsapp: "#", viber: "#", mail: "mailto:test@test.com" }
    },
    {
      id: 3,
      name: { en: "John Doe", ar: "الاسم هنا" },
      role: { en: "Developer", ar: "المطور" },
      image: "/image.svg",
      socials: { whatsapp: "#", viber: "#", mail: "mailto:test@test.com" }
    },
    {
      id: 4,
      name: { en: "Name Here", ar: "الاسم هنا" },
      role: { en: "POSITION HERE", ar: "المسمى الوظيفي" },
      image: "/image.svg",
      socials: { whatsapp: "#", viber: "#", mail: "mailto:test@test.com" }
    },
    {
      id: 5,
      name: { en: "Name Here", ar: "الاسم هنا" },
      role: { en: "POSITION HERE", ar: "المسمى الوظيفي" },
      image: "/image.svg",
      socials: { whatsapp: "#", viber: "#", mail: "mailto:test@test.com" }
    }
  ]
};
