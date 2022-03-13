import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from './styles';
import TrendingCard from './TrendingCard';
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
export default function Trending() {
  return (
    <View style={styles.trendingContainer}>
      <Text style={styles.trendingText}>Trending</Text>
      <FlatList
        data={DATA}
        horizontal
        renderItem={({item, index}) => (
          <TrendingCard></TrendingCard>
        )}></FlatList>
    </View>
  );
}
