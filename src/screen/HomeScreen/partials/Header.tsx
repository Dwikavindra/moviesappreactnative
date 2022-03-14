import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';
export function Header() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handleNavigation = () => {
    navigation.navigate('Favorites');
  };
  const {colors} = useTheme();
  return (
    <View style={styles.headerContainer}>
      <Text style={{...styles.headerTextContainer, color: colors.text}}>
        Movies App
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <Pressable onPress={handleNavigation}>
          <Icon style={{color: colors.text}} name="heart" size={30}></Icon>
        </Pressable>
      </View>
    </View>
  );
}
