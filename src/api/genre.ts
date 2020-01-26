import { API_BASE_URL, API_KEY } from "./../constants";

export const fetchGenre = async (): Promise<any> => {
  const tv = fetch(`${API_BASE_URL}/3/genre/tv/list?api_key=${API_KEY}`);
  const movie = fetch(`${API_BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`);

  let tvResponse = (await tv)
  tvResponse = (await tvResponse.json()).genres; 
 
  let movieResponse = await movie; 
  movieResponse = (await movieResponse.json()).genres;

  return {
      tv: tvResponse,
      movie: movieResponse
  }
};
