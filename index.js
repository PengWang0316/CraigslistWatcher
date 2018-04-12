import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';

import App from './App/App';
import configureStore from './App/stores/ConfigureStore';

const store = configureStore();

const AppContainer = () => (<Provider store={store}><App /></Provider>);

console.ignoredYellowBox = ['Warning: component', 'Warning: isMounted'];

AppRegistry.registerComponent('CraigslistWatcher', () => AppContainer);
