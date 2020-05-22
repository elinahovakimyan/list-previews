import React from 'react';
import { View, Alert } from 'react-native';

import Button from '../../../components/Button';

import { styles } from './styles';

const Table = () => (
  <View style={styles.container}>
    <Button title="Under construction" onPress={() => Alert.alert('Oops! Not ready :(')} />
  </View>
);


export default React.memo(Table);
