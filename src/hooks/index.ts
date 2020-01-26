import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react-redux";
import { ACTIONS, IState } from "../interfaces";
import { fetchMovies  } from "../api/movie";
import { fetchGenre } from "../api/genre";

export const useMovieHook = () => {
  const dispatch = useDispatch();
  const query: string = useSelector<IState, string>(
    state => state.query || ''
  );
  const filter: any = useSelector<IState, any>(
    state => state.filters
  );

  const category: string = useSelector<IState, string>(
    state => state.category || ''
  );

  const results: any = useSelector<IState, any>(
    state => state.results
  );

  const isFetching: boolean = useSelector<IState, boolean>(
    state => state.isFetching
  );
  const genres: any[] = useSelector<IState, any>(
    state => state.genres
  );
  const genreHash: any = useSelector<IState, any>(
    state => state.genreHash
  );

  let api = async (category: string) => {
    console.log('api called');
    const response = await fetchMovies(category);
    dispatch<{ type: string; Payload: any }>({
        type: ACTIONS.RESULTS_FETCHED,
        Payload: response
      });
    };
  
  
  const updateQuery = (query: string) => {
    dispatch<{ type: string; Payload: any }>({
      type: ACTIONS.UPDATE_QUERY,
      Payload: query
    });
  };

  const updateFilter = (filter: any) => {
    dispatch<{ type: string; Payload: any }>({
      type: ACTIONS.UPDATE_FILTER,
      Payload: filter
    });
  };

  const updateCategory = (category: string) => {
    dispatch<{ type: string; Payload: any }>({
      type: ACTIONS.UPDATE_CATEGORY,
      Payload: category
    });
    api(category);
  };

  const updateGenres = async () => {
    let genres = await fetchGenre();
    dispatch<{ type: string; Payload: any }>({
      type: ACTIONS.UPDATE_GENRES,
      Payload: genres
    });
  }

  return {
    query,
    updateQuery,
    filter,
    updateFilter,
    category,
    updateCategory,
    isFetching,
    results,
    updateGenres,
    genres,
    genreHash
  };
};
