import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 64,
    width: '100%',
  },
  headerTextContainer: {
    width: 80,
    fontSize: 24,
    fontWeight: '700',
    flexWrap: 'wrap',
  },
  trendingContainer: {
    marginTop: 64,
  },
  trendingText: {
    fontSize: 24,
    fontWeight: '700',
  },
  trendingCard: {
    height: 190,
    width: 320,
    borderRadius: 20,
    marginRight: 10,
  },
  trendingCardImg: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
});
