import { LocalizedString } from './index';

export interface HeroSlide {
  id: number;
  heading: LocalizedString;
  subheading: LocalizedString;
  image: string;
  profileImage: string;
  cta: {
    label: LocalizedString;
    link: string;
  };
}
