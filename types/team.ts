import { LocalizedString } from './index';

export interface TeamMember {
  id: number;
  name: LocalizedString;
  role: LocalizedString;
  image: string;
  socials: {
    whatsapp: string;
    viber: string;
    mail: string;
  };
}

export interface TeamSection {
  heading: LocalizedString;
  description: LocalizedString;
  members: TeamMember[];
}
