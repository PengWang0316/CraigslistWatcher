import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import DarkGreenStatusBar from '../components/DarkGreenStatusBar';
import SearchHeadBar from '../components/SearchHeadBar';
import ItemsList from '../components/ItemsList';

const styles = StyleSheet.create({
  mainView: { backgroundColor: '#e0e0e0', flex: 1 }
});

const ExploreListScreen = props => (
  <SafeAreaView style={styles.mainView}>
    <DarkGreenStatusBar />
    <SearchHeadBar />
    <ItemsList />
  </SafeAreaView>
);
export default ExploreListScreen;
