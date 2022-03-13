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
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';

export default function TrendingCard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handleNavigation = () => {
    navigation.navigate('MovieDetails');
  };
  return (
    <Pressable onPress={handleNavigation} style={styles.trendingCard}>
      <Image
        style={styles.trendingCardImg}
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
        }}></Image>
    </Pressable>
  );
}
