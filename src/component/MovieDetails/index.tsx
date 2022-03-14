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
  Image,
  ImageBackground,
} from 'react-native';
import {RootStackParams} from '../../App';
import {FavoriteMoviesType} from '../../context/FavoriteMoviesType';
import {GlobalContext, FavoriteMoviesStates} from '../../context/GlobalState';
import {getBackdropPath, getPosterPath} from '../../Service/MovieService';
import {styles} from './styles';

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
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.ImageBackgroundContainer}>
        <ImageBackground
          style={styles.ImageBackgroundHeight}
          imageStyle={styles.ImageStyleBackground}
          source={{
            uri: getBackdropPath(params.params.backdrop_path),
          }}></ImageBackground>
      </View>
      <View style={styles.overlappingSheetContainer}>
        <Text style={styles.title}>{params.params.title}</Text>
        <View style={styles.rowContainer}>
          <View style={styles.imageRowContainer}>
            <Image
              style={styles.imageRow}
              source={{
                uri: getPosterPath(params.params.poster_path),
              }}></Image>
          </View>
          <Text style={styles.textRow}>{params.params.overview}</Text>
        </View>
        {isFavoriteFound == false ? (
          <Pressable style={styles.addToFavorite} onPress={handleAddMovies}>
            <Text style={styles.addToFavoriteText}>Add To Favorite</Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.RemoveFromFavorite}
            onPress={handleRemoveMovies}>
            <Text style={styles.RemoveFromFavoriteText}>
              Remove From Favorite
            </Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}
