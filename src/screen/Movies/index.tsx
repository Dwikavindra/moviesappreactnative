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
import MovieCards from '../../component/MovieCards/MovieCard';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import {GenreResult} from '../../Service/BaseService';
import {getMovieBasedonGenre, getPosterPath} from '../../Service/MovieService';
import {styles} from './styles';

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
      <View style={styles.renderLoader}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };
  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <Text style={styles.headerFont}>{params.params.genreName}</Text>
      </View>

      <FlatList
        columnWrapperStyle={styles.flatList}
        data={genresMovies}
        numColumns={2}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
        renderItem={({item, index}) => (
          <MovieCards
            id={item.id}
            poster_path={getPosterPath(item.poster_path)}
            title={item.title}
            backdrop_path={item.backdrop_path}
            overview={item.overview}></MovieCards>
        )}></FlatList>
    </SafeAreaView>
  );
}
