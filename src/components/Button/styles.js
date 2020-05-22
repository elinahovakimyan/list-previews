import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: colors.darkGreen,
    backgroundColor: colors.lightGreen,
    padding: 10,
  },
  text: {
    color: colors.darkGreen,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
