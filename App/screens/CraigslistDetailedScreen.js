import React from 'react';
import { SafeAreaView } from 'react-navigation';

import DarkGreenStatusBar from '../components/DarkGreenStatusBar';
import Styles from './Styles';

const CraigslistDetailedScreen = () => (
  <SafeAreaView style={Styles.mainView}>
    <DarkGreenStatusBar />

  </SafeAreaView>
);
export default CraigslistDetailedScreen;
