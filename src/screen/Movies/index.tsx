import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
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
} from 'react-native';
import {RootStackParams} from '../../App';
import MovieCards from './partials/MovieCard';
import {initialWindowMetrics} from 'react-native-safe-area-context';
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
        data={DATA}
        numColumns={2}
        renderItem={({item, index}) => (
          <MovieCards uri={item.image} title={item.title}></MovieCards>
        )}></FlatList>
    </SafeAreaView>
  );
}
