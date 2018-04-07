import React from 'react';
import renderer from 'react-test-renderer';

import DarkGreenStatusBar from '../../App/components/DarkGreenStatusBar';

jest.mock('react-native', () => ({ StatusBar: 'StatusBar' }));

describe('DarkGreenStatusBar Test', () => {
  test('snapshot', () => expect(renderer.create(<DarkGreenStatusBar />).toJSON()).toMatchSnapshot());
});
