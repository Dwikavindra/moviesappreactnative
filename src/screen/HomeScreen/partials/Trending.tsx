import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from './styles';
import TrendingCard from './TrendingCard';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';
import {TrendingResult} from '../../../Service/BaseService';
import {getTrending} from '../../../Service/MovieService';
import axios from 'axios';
import {initialWindowMetrics} from 'react-native-safe-area-context';
export default function Trending() {
  const [trending, setTrendingMovies] = useState<TrendingResult[]>(
    [] as TrendingResult[],
  );
  useEffect(() => {
    async function fetchData() {
      const request = await getTrending();
      setTrendingMovies(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <View style={styles.trendingContainer}>
      <Text style={styles.trendingText}>Trending</Text>
      <FlatList
        data={trending}
        horizontal
        renderItem={({item, index}) => (
          <TrendingCard
            id={item.id}
            name={item.name}
            backdrop_path={item.backdrop_path}
            title={item.title}
            poster_path={item.poster_path}
            overview={item.overview}></TrendingCard>
        )}></FlatList>
    </View>
  );
}
