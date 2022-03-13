import {useNavigation} from '@react-navigation/native';
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

interface GenresCardProps {
  uri: string;
}
export default function GenresCard(props: GenresCardProps) {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('MovieDetails');
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
