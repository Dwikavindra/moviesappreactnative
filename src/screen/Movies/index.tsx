import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {RootStackParams} from '../../App';
import MovieCards from './partials/MovieCard';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import {GenreResult} from '../../Service/BaseService';
import {getMovieBasedonGenre, getPosterPath} from '../../Service/MovieService';
import styles from '../HomeScreen/partials/styles';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    title: 'Spiderman',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    title: 'Spiderman',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    title: 'Spiderman',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    title: 'Spiderman',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    title: 'Spiderman',
  },
];

type MoviesRouteType = RouteProp<RootStackParams, 'Movies'>;

export default function Movies() {
  const params = useRoute<MoviesRouteType>();
  const [genresMovies, setGenresMovies] = useState<GenreResult[]>(
    [] as GenreResult[],
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const request = await getMovieBasedonGenre(params.params.id, currentPage);
      setGenresMovies([...genresMovies, ...request]);

      return request;
    }
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, [currentPage]);
  const renderLoader = () => {
    return isLoading ? (
      <View style={{marginVertical: 16, alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };
  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>
          {params.params.genreName}
        </Text>
      </View>

      <FlatList
        columnWrapperStyle={{
          flex: 1,
          width: '100%',
          margin: 10,
          alignContent: 'space-between',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
        }}
        data={genresMovies}
        numColumns={2}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
        renderItem={({item, index}) => (
          <MovieCards
            id={item.id}
            uri={getPosterPath(item.poster_path)}
            title={item.title}></MovieCards>
        )}></FlatList>
    </SafeAreaView>
  );
}
