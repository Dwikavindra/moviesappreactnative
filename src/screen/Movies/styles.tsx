import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  renderLoader: {
    marginVertical: 16,
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
    width: '100%',
    margin: 10,
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  headerFont: {
    fontSize: 24,
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    margin: 10,
  },
  safeAreaContainer: {
    flex: 1,
  },
});
