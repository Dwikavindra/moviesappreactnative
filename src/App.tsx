import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './screen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenStack} from 'react-native-screens';
import MovieDetails from './component/MovieDetails';
import Movies from './screen/Movies';
import Favorites from './screen/Favorites';
import {GlobalProvider} from './context/GlobalState';
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
  return (
    <GlobalProvider>
      <NavigationContainer>
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
  );
};

const styles = StyleSheet.create({});

export default App;
