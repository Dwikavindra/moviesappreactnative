import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import styles from './styles';

export default function TrendingCard() {
  return (
    <Pressable style={styles.trendingCard}>
      <Image
        style={styles.trendingCardImg}
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
        }}></Image>
    </Pressable>
  );
}
