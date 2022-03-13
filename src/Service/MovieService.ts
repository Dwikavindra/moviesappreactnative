import {AnyTypeAnnotation} from '@babel/types';
import axios, {Axios} from 'axios';
import {
  getAxios,
  fetches,
  TrendingResult,
  Genre,
  GenreResult,
  API_KEY,
  baseUrl,
} from './BaseService';

export async function getTrending() {
  const result = await getAxios(fetches.fetchTrending);
  const trendingLists: TrendingResult[] = result.data.results;

  return trendingLists;
}
export async function getMovieBasedonGenre(id: number, page: number) {
  let url: String = `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${id}&page=${page}`;
  const result = await getAxios(`${url}`);
  const genreResultLists: GenreResult[] = result.data.results;
  return genreResultLists;
}
export function getBackdropPath(backdrop_path: string) {
  const result: string = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
  return result;
}
export function getPosterPath(poster_path: string) {
  const result: string = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return result;
}

export async function getGenre() {
  const result = await getAxios(fetches.fetchGenres);
  const genreLists: Genre[] = result.data.genres;
  return genreLists;
}
