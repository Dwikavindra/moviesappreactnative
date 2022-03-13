import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
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
  Button,
} from 'react-native';
import {RootStackParams} from '../../App';
import {FavoriteMoviesType} from '../../context/FavoriteMoviesType';
import {GlobalContext, FavoriteMoviesStates} from '../../context/GlobalState';

type MoviesRouteType = RouteProp<RootStackParams, 'MovieDetails'>;
export default function MovieDetails() {
  const [isFavoriteFound, setFavoriteFound] = useState<boolean>(true);
  const [movieDetails, setMovieDetails] = useState<FavoriteMoviesType>();
  const params = useRoute<MoviesRouteType>();
  const {addMovies} = useContext(GlobalContext) as FavoriteMoviesStates;
  const {favorite} = useContext(GlobalContext) as FavoriteMoviesStates;
  const {removeMovies} = useContext(GlobalContext) as FavoriteMoviesStates;

  const handleAddMovies = () => {
    let movieAdded: FavoriteMoviesType = {
      id: params.params.id,
      backdrop_path: params.params.backdrop_path,
      title: params.params.title,
      overview: params.params.overview,
      poster_path: params.params.poster_path,
    };
    addMovies(movieAdded);
  };
  const handleRemoveMovies = () => {
    removeMovies(params.params.id);
  };
  const checkFavorite = () => {
    let isFavorite = favorite.find(item => {
      if (item.id == params.params.id) {
        return item;
      } else {
        return null;
      }
    });
    if (isFavorite != null) {
      setFavoriteFound(true);
    } else {
      console.log(isFavoriteFound);
      setFavoriteFound(false);
    }
  };
  useEffect(() => {
    checkFavorite();
  }, [favorite]);
  return (
    <SafeAreaView>
      <Text>Hello World {params.params.id}</Text>
      <Text>{params.params.title}</Text>
      {isFavoriteFound == false ? (
        <Button onPress={handleAddMovies} title="Add To Favorites"></Button>
      ) : (
        <Button
          onPress={handleRemoveMovies}
          title="Remove From Favorite"></Button>
      )}
    </SafeAreaView>
  );
}
