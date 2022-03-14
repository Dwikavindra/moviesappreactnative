import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 64,

    margin: 30,
    justifyContent: 'space-between',
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
  genreImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  genreContainer: {
    flex: 1,
    height: 172,
    width: 100,
    marginRight: 10,
  },
  genreFlatList: {
    flexDirection: 'row',
    width: '100%',
    height: 173,
  },
  genrePressable: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 5,
  },
  genreText: {
    fontSize: 24,
    fontWeight: '700',
  },
  genreHeaderButtonContainer: {
    flexDirection: 'row',
  },
  genreContainerList: {
    flex: 1,
    flexDirection: `column`,
    marginTop: 27,
  },
  trendingCardText: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
});
