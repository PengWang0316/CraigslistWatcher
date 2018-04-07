import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DarkGreenStatusBar from '../components/DarkGreenStatusBar';

const styles = StyleSheet.create({
  mainView: { backgroundColor: '#e0e0e0', flex: 1 }
});

const WatchListScreen = props => (
  <View style={styles.mainView}>
    <DarkGreenStatusBar />
    <Text>The WatchListScreen</Text>
  </View>
);
export default WatchListScreen;
