import { LocalizedString } from './index';

export interface ServiceItem {
  id: number;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  content: {
    main: LocalizedString;
    sections: {
      title: LocalizedString;
      text: LocalizedString;
      items?: LocalizedString[]; 
    }[];
  };
}
