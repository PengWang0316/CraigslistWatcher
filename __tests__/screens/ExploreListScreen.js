import React from 'react';
import renderer from 'react-test-renderer';

import ExploreListScreen from '../../App/screens/ExploreListScreen';

jest.mock('../../App/components/DarkGreenStatusBar', () => 'DarkGreenStatusBar');
jest.mock('../../App/components/SearchHeadBar', () => 'SearchHeadBar');
jest.mock('../../App/components/ItemsList', () => 'ItemsList');

describe('Test ExploreListScreen', () => {
  test('snapshot test', () => expect(renderer.create(<ExploreListScreen />).toJSON()).toMatchSnapshot());
});
