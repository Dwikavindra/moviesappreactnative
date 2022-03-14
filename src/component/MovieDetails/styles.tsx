import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  RemoveFromFavoriteText: {
    fontSize: 15,
    paddingLeft: 15,
    color: 'white',
  },
  RemoveFromFavorite: {
    marginTop: 100,
    alignSelf: 'center',
    backgroundColor: 'red',
    height: 40,
    width: '45%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  addToFavoriteText: {
    fontSize: 15,
    paddingLeft: 40,
    color: 'white',
  },
  addToFavorite: {
    marginTop: 100,
    alignSelf: 'center',
    backgroundColor: 'green',
    height: 40,
    width: '45%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textRow: {
    flex: 1,
    fontSize: 15,
    flexWrap: 'wrap',
    width: '50%',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 2,
  },
  imageRow: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  imageRowContainer: {
    marginLeft: 20,
    marginTop: 10,
    height: 200,
    width: 120,
  },
  rowContainer: {
    marginTop: 40,
    flexDirection: 'row',
    height: 220,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
  },
  overlappingSheetContainer: {
    flex: 1,
    position: 'absolute',
    height: '500%',
    top: '110%',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
  },
  ImageStyleBackground: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  ImageBackgroundHeight: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  ImageBackgroundContainer: {
    height: 200,
    width: '100%',
    borderRadius: 20,
    marginRight: 10,
  },
  safeAreaContainer: {
    position: 'relative',
    backgroundColor: 'white',
  },
});
