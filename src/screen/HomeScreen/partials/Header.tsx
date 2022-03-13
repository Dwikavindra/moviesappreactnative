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
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
export function Header() {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('Favorites');
  };
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTextContainer}>Movies App</Text>
      <View
        style={{
          flexDirection: 'row',
          left: '70%',
          width: '100%',
          alignSelf: 'center',
        }}>
        <Icon.Button
          style={{}}
          name="heart"
          size={30}
          onPress={handleNavigation}></Icon.Button>
      </View>
    </View>
  );
}
