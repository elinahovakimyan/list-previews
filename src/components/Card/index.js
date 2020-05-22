import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const Card = ({ item, parent }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.parent}>{parent?.name ? `${parent.name}` : '-'}</Text>
    </View>
    <Text style={styles.value}>{item.value}</Text>
  </View>
);

export default React.memo(Card);
