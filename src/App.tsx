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
import MovieDetails from './screen/MovieDetails';
import Movies from './screen/Movies';
import Favorites from './screen/Favorites';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
  );
};

const styles = StyleSheet.create({});

export default App;
