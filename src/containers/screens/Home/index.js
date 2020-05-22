import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../../components/Button';
import { getList } from '../../redux/actions';

import { styles } from './styles';

const Home = (props) => {
  const onButtonPress = () => {
    props.getList();
    props.navigation.push('Tabs');
  };

  return (
    <View style={styles.container}>
      <Button title="Start drawing" onPress={onButtonPress} />
    </View>
  );
};

const mapDispatchToProps = {
  getList,
};

export default React.memo(connect(null, mapDispatchToProps)(Home));
