import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import HomeScreen from './screen/HomeScreen';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenStack} from 'react-native-screens';
import MovieDetails from './component/MovieDetails';
import {DarkTheme} from '@react-navigation/native';
import Movies from './screen/Movies';
import Favorites from './screen/Favorites';
import {GlobalContext, GlobalProvider} from './context/GlobalState';
export type RootStackParams = {
  Home: undefined;
  Favorites: undefined;
  Movies: {
    genreName: string;
    id: number;
  };
  MovieDetails: {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
  };
};
const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <GlobalProvider>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="MovieDetails"
              component={MovieDetails}></Stack.Screen>
            <Stack.Screen name="Movies" component={Movies}></Stack.Screen>
            <Stack.Screen name="Favorites" component={Favorites}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalProvider>
    </AppearanceProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
