import React, {useEffect, useState} from 'react';
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
import {Genre} from '../../Service/BaseService';
import {getGenre, getTrending} from '../../Service/MovieService';
import Genres from './partials/Genres';
import {Header} from './partials/Header';
import Trending from './partials/Trending';

export default function HomeScreen() {
  const [genres, setGenres] = useState<Genre[]>([] as Genre[]);
  useEffect(() => {
    async function fetchData() {
      const request = await getGenre();
      setGenres(request);
      return request;
    }
    fetchData();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, marginLeft: 5}}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header></Header>
            <Trending></Trending>
          </>
        }
        data={genres}
        renderItem={({item, index}) => (
          <Genres genre={item.name} id={item.id}></Genres>
        )}></FlatList>
    </SafeAreaView>
  );
}
