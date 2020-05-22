/* eslint-disable consistent-return */
import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const TreeCard = ({ item, parents }) => {
  const renderCard = (data, level) => (
    <View key={data.id} style={[styles.container, { marginLeft: (level * 20) || 0 }]}>
      <View style={styles.content}>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <Text style={styles.value}>{data.value}</Text>
    </View>
  );

  const drawTree = (data, level) => (
    <React.Fragment key={data.id}>
      {renderCard(data, level)}
      {parents[data.id] ? parents[data.id]?.map((el) => drawTree(el, level + 1)) : null}
    </React.Fragment>
  );

  return drawTree(item, 0);
};


export default React.memo(TreeCard);
