import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.borderGrey,
    backgroundColor: colors.lightGrey,
    padding: 12,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.grey,
    fontSize: 14,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  parent: {
    color: colors.grey2,
    fontSize: 14,
    fontWeight: 'bold',
  },
  value: {
    flex: 3,
    color: colors.darkGreen,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  content: {
    flex: 9,
  },
});
