import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import {RootStackParams} from '../../../App';
interface MovieCardsProps {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
}
export default function MovieCards(props: MovieCardsProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handleNavigation = () => {
    navigation.navigate('MovieDetails', {
      id: props.id,
      title: props.title,
      poster_path: props.poster_path,
      backdrop_path: props.backdrop_path,
      overview: props.overview,
    });
  };
  return (
    <Pressable onPress={handleNavigation}>
      <View style={{flex: 1, height: 250, width: 120}}>
        <Image
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            borderRadius: 10,
          }}
          source={{
            uri: props.poster_path,
          }}></Image>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 15,
            fontWeight: '700',
            alignSelf: 'center',
            marginTop: 10,
            overflow: 'hidden',
          }}>
          {props.title}
        </Text>
      </View>
    </Pressable>
  );
}
