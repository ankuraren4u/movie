import { IState, ACTIONS } from "../interfaces";

export const reducer = (
  state: IState = { isFetching: true },
  action: { Payload: any; type: string }
): any => {
  switch (action.type) {
    case ACTIONS.UPDATE_GENRES:
      let genreHash: any = {};
      let genres: any = action.Payload;
      if(genres && genres.movie && genres.movie.length) {
        genres.movie.forEach((item: any) => (genreHash[item.id] = item.name));
      } 
      if(genres && genres.tv && genres.tv.length) {
        genres.tv.forEach((item: any) => (genreHash[item.id] = item.name));
      } 
      return {
        ...state,
        ...{ genres, genreHash }
      };
    case ACTIONS.UPDATE_FILTER:
      return {
        ...state,
        ...{ filters: action.Payload }
      };
    case ACTIONS.UPDATE_QUERY:
      return {
        ...state,
        ...{
          query: action.Payload
        }
      };
    case ACTIONS.UPDATE_CATEGORY:
      return {
        ...state,
        ...{
          results: null,
          isFetching: true,
          filters: null,
          query: null,
          category: action.Payload
        }
      };
    case ACTIONS.RESULTS_FETCHING:
      return {
        ...state,
        ...{ results: null, isFetching: true }
      };
    case ACTIONS.RESULTS_FETCHED:
      return {
        ...state,
        ...{ isFetching: false, results: action.Payload }
      };
    default:
      return {
        results: null,
        isFetching: true,
        category: "",
        filters: null,
        query: ""
      };
  }
};
