export interface Meteorite {
  fall: string;
  geolocation: {
    latitude: string;
    longitude: string;
  };
  id: string;
  mass: string;
  name: string;
  nametype: string;
  recclass: string;
  reclat: string;
  reclong: string;
  year: string;
}

export interface Options {
  searchQuery: string;
  ordered: {
    by: string;
    ascending: boolean;
  };
  massRange: {
    min: string;
    max: string;
  };
}

export interface Pagination {
  page: number;
  itemsPerPage: number;
}

export type Language = 'ES' | 'EN';

export type ListStatus = 'error' | 'loading' | 'iddle' | 'empty' | 'full';

// export type OrderedBy = 'id' | 'mass' | 'name' | 'year';

export interface Store {
  list: Meteorite[];
  options: Options;
  pagination: Pagination;
  language: Language;
  drawerVisibility: boolean;
  mapVisibility: boolean;
  mapMeteorite: Meteorite | null;
}

export interface Action {
  type: string;
}

export interface UpdateList extends Action {
  list: Meteorite[];
}

export interface UpdateOptions extends Action {
  options: Options;
}

export interface ClearOptions extends Action {}

export interface SetLanguage extends Action {
  language: Language;
}

export interface NextPage extends Action {}

export interface SetDrawerVisibility extends Action {
  drawerVisibility: boolean;
}

export interface SetMapVisibility extends Action {
  mapVisibility: boolean;
}

export interface SetMapMeteorite extends Action {
  mapMeteorite: Meteorite | null;
}
