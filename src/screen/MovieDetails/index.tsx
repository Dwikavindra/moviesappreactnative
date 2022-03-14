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
    <SafeAreaView style={{position: 'relative', backgroundColor: 'white'}}>
      <View
        style={{
          height: 200,
          width: '100%',
          borderRadius: 20,
          marginRight: 10,
        }}>
        <ImageBackground
          style={{flex: 1, width: '100%', height: '100%'}}
          imageStyle={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}
          source={{
            uri: getBackdropPath(params.params.backdrop_path),
          }}></ImageBackground>
      </View>
      <View
        style={{
          flex: 1,

          position: 'absolute',
          height: '500%',
          top: '110%',
          backgroundColor: 'white',
          width: '100%',

          borderRadius: 20,
        }}>
        <Text
          style={{
            fontSize: 30,
            alignSelf: 'center',
          }}>
          {params.params.title}
        </Text>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            height: 220,
          }}>
          <View
            style={{
              marginLeft: 20,
              marginTop: 10,
              height: 200,
              width: 120,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderRadius: 10,
              }}
              source={{
                uri: getPosterPath(params.params.poster_path),
              }}></Image>
          </View>
          <Text
            style={{
              flex: 1,
              fontSize: 15,
              flexWrap: 'wrap',
              width: '50%',
              marginLeft: 10,
              marginTop: 10,
              marginRight: 2,
            }}>
            {params.params.overview}
          </Text>
        </View>
        {isFavoriteFound == false ? (
          <Pressable
            style={{
              marginTop: 100,
              alignSelf: 'center',
              backgroundColor: 'green',
              height: 40,
              width: '45%',
              borderRadius: 10,
              justifyContent: 'center',
            }}
            onPress={handleAddMovies}>
            <Text
              style={{
                fontSize: 15,
                paddingLeft: 40,
                color: 'white',
              }}>
              Add To Favorite
            </Text>
          </Pressable>
        ) : (
          <Pressable
            style={{
              marginTop: 100,
              alignSelf: 'center',
              backgroundColor: 'red',
              height: 40,
              width: '45%',
              borderRadius: 10,
              justifyContent: 'center',
            }}
            onPress={handleRemoveMovies}>
            <Text
              style={{
                fontSize: 15,
                paddingLeft: 15,
                color: 'white',
              }}>
              Remove From Favorite
            </Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}
