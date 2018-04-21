import React from 'react';
import { SafeAreaView } from 'react-navigation';

import DarkGreenStatusBar from '../components/DarkGreenStatusBar';
import SearchHeadBar from '../components/SearchHeadBar';
import ItemsList from '../components/ItemsList';
import Styles from './Styles';

const ExploreListScreen = props => (
  <SafeAreaView style={Styles.mainView}>
    <DarkGreenStatusBar />
    <SearchHeadBar />
    <ItemsList navigation={props.navigation} />
  </SafeAreaView>
);
export default ExploreListScreen;
