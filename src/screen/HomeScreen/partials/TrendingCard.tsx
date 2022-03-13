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
import {getBackdropPath} from '../../../Service/MovieService';

interface TrendingCardProps {
  id: number;
  backdrop_path: string;
  title: string;
  name: string;
  poster_path: string;
  overview: string;
}
export default function TrendingCard(props: TrendingCardProps) {
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
  {
    return (
      <View style={{flexDirection: 'row'}}>
        <Pressable onPress={handleNavigation} style={styles.trendingCard}>
          <Image
            style={styles.trendingCardImg}
            source={{
              uri: getBackdropPath(props.backdrop_path),
            }}></Image>
          <Text style={{marginTop: 10, fontSize: 15, textAlign: 'center'}}>
            {props.title == undefined ? props.name : props.title}
          </Text>
        </Pressable>
      </View>
    );
  }
}
