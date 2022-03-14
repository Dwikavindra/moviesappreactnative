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
import MovieCards from '../../component/MovieCards/MovieCard';
import {styles} from './styles';
export default function Favorites() {
  const {favorite} = useContext(GlobalContext) as FavoriteMoviesStates;
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Favorites</Text>
        <View>
          <Pressable>
            <Icon name="home" size={30}></Icon>
          </Pressable>
        </View>
      </View>
      <FlatList
        columnWrapperStyle={styles.columnWrapperStyle}
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
