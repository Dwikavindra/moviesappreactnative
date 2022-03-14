import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {GlobalContext, FavoriteMoviesStates} from '../../context/GlobalState';
import MovieCards from '../../component/MovieCards/MovieCard';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
export default function Favorites() {
  const {favorite} = useContext(GlobalContext) as FavoriteMoviesStates;
  const {colors} = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handleNavigation = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.headerContainer}>
        <Text style={{...styles.header, color: colors.text}}>Favorites</Text>
        <View>
          <Pressable onPress={handleNavigation}>
            <Icon name="home" style={{color: colors.text}} size={30}></Icon>
          </Pressable>
        </View>
      </View>
      <FlatList
        columnWrapperStyle={styles.columnWrapperStyle}
        data={favorite}
        numColumns={2}
        renderItem={({item, index}) => (
          <MovieCards
            poster_path={item.poster_path}
            title={item.title}
            id={item.id}
            backdrop_path={item.backdrop_path}
            overview={item.overview}></MovieCards>
        )}></FlatList>
    </SafeAreaView>
  );
}
