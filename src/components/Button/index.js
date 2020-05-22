import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default React.memo(Button);
