import axios, {AxiosResponse} from 'axios';

export const API_KEY = '65ec2c07fb70b3028ab6e232fd7fdec9';
export const baseUrl = 'https://api.themoviedb.org/3';

export let fetches = {
  fetchTrending: `${baseUrl}/trending/all/day?api_key=${API_KEY}`,
  fetchGenres: `${baseUrl}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
};

export interface TrendingResult {
  vote_average: number;
  overview: string;
  release_date: string;
  title: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  vote_count: number;
  original_language: string;
  original_title: string;
  poster_path: string;
  id: number;
  video: boolean;
  popularity: number;
  media_type: string;
  name: string;
  first_air_date: string;
  original_name: string;
  origin_country: string[];
}
export interface GenreResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface Genre {
  id: number;
  name: string;
}

export async function getAxios(fetch: String) {
  const request = await axios.get(`${fetch}`);
  return request;
}
