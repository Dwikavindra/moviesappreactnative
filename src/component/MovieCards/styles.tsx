import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  movieTitle: {
    fontSize: 15,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    overflow: 'hidden',
  },
  ImageCard: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  ImageContainer: {
    flex: 1,
    height: 250,
    width: 120,
  },
});
