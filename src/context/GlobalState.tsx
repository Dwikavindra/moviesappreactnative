import React, {createContext, useEffect, useState} from 'react';

import {FavoriteMoviesType} from './FavoriteMoviesType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appearance, ColorSchemeName} from 'react-native';
import {Theme} from '@react-navigation/native';

export type FavoriteMoviesStates = {
  favorite: FavoriteMoviesType[];
  addMovies: (movies: FavoriteMoviesType) => void;
  removeMovies: (id: number) => void;
  colorScheme: ColorSchemeName;
};
const initialState: FavoriteMoviesStates = {
  favorite: [] as FavoriteMoviesType[],
  addMovies: () => {},
  removeMovies: () => {},
  colorScheme: Appearance.getColorScheme(),
};

export const GlobalContext = createContext<FavoriteMoviesStates>(initialState);

export const GlobalProvider: React.FC<React.ReactNode> = ({children}) => {
  const colorScheme = Appearance.getColorScheme();
  const [colorSchemeDefault, setColorScheme] = useState<ColorSchemeName>();
  const [movies, setMovies] = useState<FavoriteMoviesType[]>(
    [] as FavoriteMoviesType[],
  );

  const AddMovieToFavorites = (movie: FavoriteMoviesType) => {
    let newList: FavoriteMoviesType[] = [...movies, movie];
    console.log(newList);
    storeData(newList);
  };
  const storeData = async (value: FavoriteMoviesType[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('favorites', jsonValue);
      setMovies(value);
    } catch (e) {
      // saving error
    }
  };

  const removeMovies = (id: number) => {
    const newmovies: FavoriteMoviesType[] = movies.filter(val => val.id != id);
    storeData(newmovies);
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('favorites');
      const value: FavoriteMoviesType[] | null =
        jsonValue != null
          ? (JSON.parse(jsonValue) as FavoriteMoviesType[])
          : null;
      if (value != null) {
        setMovies(value as FavoriteMoviesType[]);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, []); //this is the correct way of using effect when to watch movies for useEffect???
  // watch it in the individual pages for changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setColorScheme(colorScheme);
      console.log(colorScheme as String);
    });
    return () => subscription.remove();
  }, []);
  let values: FavoriteMoviesStates = {
    favorite: movies,
    addMovies: AddMovieToFavorites,
    removeMovies: removeMovies,
    colorScheme: colorSchemeDefault,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
