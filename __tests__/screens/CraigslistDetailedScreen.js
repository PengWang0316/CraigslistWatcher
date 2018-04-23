import React from 'react';
import renderer from 'react-test-renderer';

import CraigslistDetailedScreen from '../../App/screens/CraigslistDetailedScreen';

jest.mock('../../App/components/DarkGreenStatusBar', () => 'DarkGreenStatusBar');
jest.mock('../../App/components/CraigslistDetailPage', () => 'CraigslistDetailPage');

describe('Test CraigslistDetailedScreen', () => {
  const defaultProps = {
    state: {
      params: {
        dataId: 'dataId',
        url: 'url'
      }
    }
  };
  test('CraigslistDetailedScreen Snapshot', () => expect(renderer.create(<CraigslistDetailedScreen navigation={defaultProps} />).toJSON()).toMatchSnapshot());
});
