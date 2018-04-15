import React from 'react';
import renderer from 'react-test-renderer';

import WatchListScreen from '../../App/screens/WatchListScreen';

jest.mock('../../App/components/DarkGreenStatusBar', () => 'DarkGreenStatusBar');

describe('Test WatchListScreen', () => {
  test('snapshot test', () => expect(renderer.create(<WatchListScreen />).toJSON()).toMatchSnapshot());
});
