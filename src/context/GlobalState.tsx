import React, {createContext, useEffect, useState} from 'react';

import {FavoriteMoviesType} from './FavoriteMoviesType';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FavoriteAction = {
  type: string;
  payload: FavoriteMoviesType;
};

export type FavoriteMoviesStates = {
  favorite: FavoriteMoviesType[];
  addMovies: (movies: FavoriteMoviesType) => void;
  removeMovies: (id: number) => void;
};
const initialState: FavoriteMoviesStates = {
  favorite: [] as FavoriteMoviesType[],
  addMovies: () => {},
  removeMovies: () => {},
};

export const GlobalContext = createContext<FavoriteMoviesStates>(initialState);

export const GlobalProvider: React.FC<React.ReactNode> = ({children}) => {
  const [movies, setMovies] = useState<FavoriteMoviesType[]>(
    [] as FavoriteMoviesType[],
  );

  const AddMovieToFavorites = (movie: FavoriteMoviesType) => {
    let newList: FavoriteMoviesType[] = [...movies, movie];
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
    console.log(movies);
  }, []);

  let values: FavoriteMoviesStates = {
    favorite: movies,
    addMovies: AddMovieToFavorites,
    removeMovies: removeMovies,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
