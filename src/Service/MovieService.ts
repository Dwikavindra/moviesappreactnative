import axios from 'axios';
import {getAxios, fetches, Result} from './BaseService';

async function getTrending() {
  const result = await getAxios(fetches.fetchTrending);
  const trendingLists: Result[] = result.data.result;

  return trendingLists;
}
