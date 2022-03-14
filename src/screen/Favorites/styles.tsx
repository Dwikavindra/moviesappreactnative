import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
  },
  columnWrapperStyle: {
    flex: 1,
    width: '100%',
    margin: 10,
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
});
