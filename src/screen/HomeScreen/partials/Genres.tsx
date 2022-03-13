import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
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
} from 'react-native';
import {RootStackParams} from '../../../App';
import GenresCard from './GenresCard';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    image: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
];

interface GenreProps {
  genre: string;
}

export default function Genres(props: GenreProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handleNavigation = () => {
    navigation.navigate('Movies', {genreName: props.genre});
  };
  return (
    <View style={{flex: 1, flexDirection: `column`, marginTop: 27}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>{props.genre}</Text>
        <Pressable onPress={handleNavigation}>
          <Text style={{fontSize: 24, fontWeight: '700', marginLeft: 5}}>
            {'>'}
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 173,
        }}>
        <FlatList
          data={DATA}
          horizontal
          renderItem={({item, index}) => (
            <GenresCard uri={item.image}></GenresCard>
          )}></FlatList>
      </View>
    </View>
  );
}
