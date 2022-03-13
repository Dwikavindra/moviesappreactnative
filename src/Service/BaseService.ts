import axios, {AxiosResponse} from 'axios';

const API_KEY = '65ec2c07fb70b3028ab6e232fd7fdec9';
const baseUrl = 'https://api.themoviedb.org/3';

export let fetches = {
  fetchActionMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchMystery: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchSciFi: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  fetchWestern: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
  fetchAnimation: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchAdventure: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
  fetchCrime: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fetchDocumentary: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTrending: `${baseUrl}trending/all/day?api_key=${API_KEY}`,
};

export interface Result {
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

export async function getAxios(fetch: String) {
  const request = await axios.get(`${fetch}`);
  return request;
}
