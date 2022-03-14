import {useNavigation, useTheme} from '@react-navigation/native';
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
  ColorPropType,
} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import {RootStackParams} from '../../../App';
import {GenreResult} from '../../../Service/BaseService';
import {
  getGenre,
  getMovieBasedonGenre,
  getPosterPath,
} from '../../../Service/MovieService';
import styles from '../styles';
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
  const {colors} = useTheme();
  return (
    <View style={styles.genreContainerList}>
      <View style={styles.genreHeaderButtonContainer}>
        <Text style={{...styles.genreText, color: colors.text}}>
          {props.genre}
        </Text>
        <Pressable onPress={handleNavigation}>
          <Text style={{...styles.genrePressable, color: colors.text}}>
            {'>'}
          </Text>
        </Pressable>
      </View>
      <View style={styles.genreFlatList}>
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
