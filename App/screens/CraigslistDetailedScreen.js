import React from 'react';
import { SafeAreaView } from 'react-navigation';

import DarkGreenStatusBar from '../components/DarkGreenStatusBar';
import ImageCarousel from '../components/ImageCarousel';
import Styles from './Styles';

const CraigslistDetailedScreen = props => (
  <SafeAreaView style={Styles.mainView}>
    <DarkGreenStatusBar />
    <ImageCarousel dataId={props.navigation.state.dataId} />
  </SafeAreaView>
);
export default CraigslistDetailedScreen;
