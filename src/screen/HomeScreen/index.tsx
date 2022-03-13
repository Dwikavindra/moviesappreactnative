import React from 'react';
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
import Genres from './partials/Genres';
import {Header} from './partials/Header';
import Trending from './partials/Trending';
const DATA = [
  {
    genrename: 'Actions',
  },
  {
    genrename: 'Adventure',
  },
  {
    genrename: 'Thriller',
  },
  {
    genrename: 'Documentary',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, marginLeft: 5}}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header></Header>
            <Trending></Trending>
          </>
        }
        data={DATA}
        renderItem={({item, index}) => (
          <Genres genre={item.genrename}></Genres>
        )}></FlatList>
    </SafeAreaView>
  );
}
