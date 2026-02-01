import { heroSlides } from './hero';
import { teamSection } from './team';
import { testimonialSection } from './testimonials';
import { services } from './services';

export const siteData = {
  homepage: {
    hero: heroSlides,
    team: teamSection,
    testimonials: testimonialSection,
    services: services
  }
};

export type SiteData = typeof siteData;
