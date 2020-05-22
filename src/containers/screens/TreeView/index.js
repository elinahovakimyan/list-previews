import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { connect } from 'react-redux';

import TreeCard from '../../../components/TreeCard';
import Title from '../../../components/Title';

import { styles } from './styles';

const TreeView = (props) => {
  const { list } = props;
  const [sortedList, setSortedList] = useState({});

  useEffect(() => {
    const parents = {};
    list.forEach((item) => {
      if (!item.parent_id) {
        parents[0] = [...(parents[0] || []), item];
      } else {
        parents[item.parent_id] = [...(parents[item.parent_id] || []), item];
      }
    });

    setSortedList(parents);
  }, []);

  const renderItem = ({ item }) => (
    <TreeCard item={item} parents={sortedList} />
  );

  const extractKey = (item) => `${item.id}`;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title>Tree View</Title>
        <FlatList style={styles.list} keyExtractor={extractKey} data={sortedList[0]} renderItem={renderItem} ListFooterComponent={<View style={styles.footer} />} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  list: state.App.list,
  usersFlat: state.App.usersFlat,
});

export default React.memo(connect(mapStateToProps)(TreeView));
