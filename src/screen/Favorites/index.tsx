import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
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
import Icon from 'react-native-vector-icons/Entypo';
import {GlobalContext, FavoriteMoviesStates} from '../../context/GlobalState';
import MovieCards from '../Movies/partials/MovieCard';
export default function Favorites() {
  const {favorite} = useContext(GlobalContext) as FavoriteMoviesStates;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 30,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
          }}>
          Favorites
        </Text>
        <View>
          <Pressable>
            <Icon name="home" size={30}></Icon>
          </Pressable>
        </View>
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
        data={favorite}
        numColumns={2}
        renderItem={({item, index}) => (
          <MovieCards
            poster_path={item.poster_path}
            title={item.title}
            id={item.id}
            backdrop_path={item.backdrop_path}
            overview={item.overview}></MovieCards>
        )}></FlatList>
    </SafeAreaView>
  );
}
