import React from 'react';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

import DarkGreenStatusBar from '../components/DarkGreenStatusBar';
import CraigslistDetailPage from '../components/CraigslistDetailPage';
import Styles from './Styles';

/* Showing CraigsList item's detail page. */
const CraigslistDetailedScreen = ({ navigation }) => (
  <SafeAreaView style={Styles.mainView}>
    <DarkGreenStatusBar />
    <CraigslistDetailPage
      dataId={navigation.state.params.dataId}
      url={navigation.state.params.url}
    />
  </SafeAreaView>
);
CraigslistDetailedScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default CraigslistDetailedScreen;
