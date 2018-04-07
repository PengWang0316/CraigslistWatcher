import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App/App';

// jest.mock('react-navigation', () => ({ TabNavigator: jest.fn(), TabBarBottom: null }));
jest.mock('../App/screens/CraigslistExploreStack', () => 'CraigslistExploreStack');
jest.mock('../App/screens/WatchingListStack', () => 'WatchingListStack');
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');

// test('renders correctly', () => {
//   const reactNavigation = require('react-navigation');
//   const mockFn = jest.fn();
//   reactNavigation.TabNavigator = mockFn;
//   const App = require('../App/App');
//   expect(mockFn).toHaveBeenCalledTimes(1);
// });

test('snapshot', () => expect(renderer.create(<App />).toJSON()).toMatchSnapshot());
