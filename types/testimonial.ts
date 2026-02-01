import { LocalizedString } from './index';

export interface TestimonialItem {
  id: number;
  name: LocalizedString;
  role: LocalizedString;
  quote: LocalizedString;
  image: string;
}

export interface TestimonialSection {
  heading: LocalizedString;
  description: LocalizedString;
  items: TestimonialItem[];
}
