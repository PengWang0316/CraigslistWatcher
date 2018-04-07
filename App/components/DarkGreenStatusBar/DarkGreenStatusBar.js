import React from 'react';
import { StatusBar } from 'react-native';

import Colors from '../../Colors';

const DarkGreenStatusBar = () => (<StatusBar
  barStyle="light-content"
  backgroundColor={Colors.primaryDark}
/>);
export default DarkGreenStatusBar;
