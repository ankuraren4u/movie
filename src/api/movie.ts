import { API_BASE_URL, API_KEY } from "./../constants";
import { IMovieItem } from "../interfaces";


export const fetchMovies = async (
  category: string,
): Promise<IMovieItem[]> => {
  let sortBy: string = '';
  switch(category) {
    case 'popular':
      sortBy = 'popularity.desc'
      break;
    
    case 'newest':
    sortBy = 'release_date.desc'
    break;

    case 'top-rated':
    sortBy = 'vote_average.desc'
    break;
  };

  let results;
  if(category === 'trending') {
    const url = `${API_BASE_URL}/3/trending/all/week?api_key=${API_KEY}&language=en-US'`
    const resp: Response= await fetch(url);
    const response = await resp.json();
    results = response.results;
    
  } else {
    const movieUrl: string= `${API_BASE_URL}/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=1'`;
    const tvUrl: string = `${API_BASE_URL}/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=1'`;
    const movie: any= fetch(movieUrl);
    const tv: any = fetch(tvUrl);
    const movieResp: Response = await movie;
    const tvResp: Response = await tv;
    let movieResponse = await movieResp.json();
    movieResponse = movieResponse.results.map((item: any) => {
      return {...item, ...{"media_type": 'movie'}}
    });

    let tvResponse = await tvResp.json();
    tvResponse = tvResponse.results.map((item: any) => {
      return {...item, ...{"media_type": 'tv'}}
    });

    results = [...movieResponse, ...tvResponse]
  }
  
  return results.map((item: any) => {
    return {
        id: item.id,
        imgUrl: `https://via.placeholder.com/180x240`,
        // imgUrl: `${API_BASE_URL}${item.poster_path}`,
        name: item.original_title ? item.original_title : item.name,
        year: item.release_date ? item.release_date.split("-")[0] : item.first_air_date ? item.first_air_date.split("-")[0]: '',
        genreIds: item.genre_ids,
        type: item.media_type,
        rating: item.vote_average
    }
  });
};
