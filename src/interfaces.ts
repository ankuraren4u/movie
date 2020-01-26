export interface IMovieItem {
  id: string;
  imgUrl: string;
  name: string;
  year: string;
  genreIds: string[];
  
  baseClass?: string;
  type: string,
  rating: number
}
export interface IState {
  filters?: any;
  category?: string;
  query?: string;
  results?: IMovieItem[];
  isFetching: boolean;
  genres?: {
    name: string;
    id: string;
  }[];
  genreHash?: any;
}

export enum ACTIONS {
  UPDATE_FILTER = "UPDATE_FILTER",
  UPDATE_QUERY = "UPDATE_QUERY",
  UPDATE_CATEGORY = "UPDATE_CATEGORY",
  RESULTS_FETCHING = "RESULTS_FETCHING",
  RESULTS_FETCHED = "RESULTS_FETCHED",
  UPDATE_GENRES = "UPDATE_GENRES"
}

export interface IMenuItem {
    name: string;
    url : string;
}

export interface IDropdownItem {
    name: string;
    id : string;
}