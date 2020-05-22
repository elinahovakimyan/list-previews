import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { connect } from 'react-redux';

import Card from '../../../components/Card';
import Title from '../../../components/Title';

import { styles } from './styles';

const CardView = (props) => {
  const { usersFlat } = props;

  const renderItem = ({ item }) => (
    <Card item={item} parent={usersFlat[item.parent_id]} />
  );

  const extractKey = (item) => `${item.id}`;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title>Card View</Title>
        <FlatList style={styles.list} keyExtractor={extractKey} data={props.list} renderItem={renderItem} ListFooterComponent={<View style={styles.footer} />} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  list: state.App.list,
  usersFlat: state.App.usersFlat,
});

export default React.memo(connect(mapStateToProps)(CardView));
