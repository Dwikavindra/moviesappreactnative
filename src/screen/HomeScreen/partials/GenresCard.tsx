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
  Image,
  ProgressViewIOSComponent,
  Pressable,
} from 'react-native';
import {RootStackParams} from '../../../App';

interface GenresCardProps {
  uri: string;
  id: number;
  title: string;
}
export default function GenresCard(props: GenresCardProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handleNavigation = () => {
    navigation.navigate('MovieDetails', {id: props.id, title: props.title});
  };
  return (
    <Pressable onPress={handleNavigation}>
      <View style={{flex: 1, height: 172, width: 100, marginRight: 10}}>
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
      </View>
    </Pressable>
  );
}
