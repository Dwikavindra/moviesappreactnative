import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import {RootStackParams} from '../../../App';
import {GenreResult} from '../../../Service/BaseService';
import {
  getGenre,
  getMovieBasedonGenre,
  getPosterPath,
} from '../../../Service/MovieService';
import GenresCard from './GenresCard';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
];

interface GenreProps {
  genre: string;
  id: number;
}
const renderLoader = () => {
  return (
    <>
      <View style={{alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#aaa"></ActivityIndicator>
        <Text>Hello</Text>
      </View>
    </>
  );
};
export default function Genres(props: GenreProps) {
  const [genresMovies, setGenresMovies] = useState<GenreResult[]>(
    [] as GenreResult[],
  );
  useEffect(() => {
    async function fetchData() {
      const request = await getMovieBasedonGenre(props.id, 1);
      setGenresMovies([...genresMovies, ...request]);
      return request;
    }
    fetchData();
  }, [1]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handleNavigation = () => {
    navigation.navigate('Movies', {genreName: props.genre, id: props.id});
  };
  return (
    <View style={{flex: 1, flexDirection: `column`, marginTop: 27}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>{props.genre}</Text>
        <Pressable onPress={handleNavigation}>
          <Text style={{fontSize: 24, fontWeight: '700', marginLeft: 5}}>
            {'>'}
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 173,
        }}>
        <FlatList
          data={genresMovies}
          horizontal
          renderItem={({item, index}) => (
            <GenresCard
              title={item.title}
              id={item.id}
              poster_path={getPosterPath(item.poster_path)}
              backdrop_path={item.backdrop_path}
              overview={item.overview}></GenresCard>
          )}></FlatList>
      </View>
    </View>
  );
}
