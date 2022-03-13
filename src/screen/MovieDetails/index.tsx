import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
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

type MoviesRouteType = RouteProp<RootStackParams, 'MovieDetails'>;
export default function MovieDetails() {
  const params = useRoute<MoviesRouteType>();
  return (
    <SafeAreaView>
      <Text>Hello World {params.params.id}</Text>
      <Text>{params.params.title}</Text>
      <Button title="Add To Favorites"></Button>
    </SafeAreaView>
  );
}
