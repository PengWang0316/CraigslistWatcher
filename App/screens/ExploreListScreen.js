import React from 'react';
import { View, StyleSheet } from 'react-native';

import DarkGreenStatusBar from '../components/DarkGreenStatusBar';
import SearchHeadBar from '../components/SearchHeadBar';
import ItemsList from '../components/ItemsList';

const styles = StyleSheet.create({
  mainView: { backgroundColor: '#e0e0e0', flex: 1 }
});

const ExploreListScreen = props => (
  <View style={styles.mainView}>
    <DarkGreenStatusBar />
    <SearchHeadBar />
    <ItemsList />
  </View>
);
export default ExploreListScreen;
