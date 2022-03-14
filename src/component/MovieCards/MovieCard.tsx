import {
  RouteProp,
  useNavigation,
  useRoute,
  useTheme,
} from '@react-navigation/native';
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
import {RootStackParams} from '../../App';
import {styles} from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
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
  const {colors} = useTheme();
  return (
    <Pressable onPress={handleNavigation}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.ImageCard}
          source={{
            uri: props.poster_path,
          }}></Image>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{...styles.movieTitle, color: colors.text}}>
          {props.title}
        </Text>
      </View>
    </Pressable>
  );
}
