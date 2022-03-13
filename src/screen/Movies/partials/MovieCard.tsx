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
  uri: string;
  title: string;
}
export default function MovieCards(props: MovieCardsProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handleNavigation = () => {
    navigation.navigate('MovieDetails');
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
            uri: props.uri,
          }}></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          {props.title}
        </Text>
      </View>
    </Pressable>
  );
}
