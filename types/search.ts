import { LocalizedString } from './index';

export type SearchCollection = 'services' | 'team';

export interface SearchResultItem {
  id: number;
  type: SearchCollection;
  title: LocalizedString;
  excerpt?: LocalizedString;
  slug?: string;
  image?: string;
}
