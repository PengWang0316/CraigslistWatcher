import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { ItemsList } from '../../App/components/ItemsList/ItemsList';

jest.mock('../../App/components/CraigslistListItem', () => 'CraigslistListItem');

describe('Test ItemsList', () => {
  const defaultPorps = {
    lists: [],
    craigslistStates: {},
    fetchLists: jest.fn(),
    fetchMoreLists: jest.fn(),
    increasePageNumber: jest.fn()
  };

  const getComponent = (props = defaultPorps) => shallow(<ItemsList {...props} />);

  test('initial states', () => {
    const component = getComponent();
    expect(component.state('refreshing')).toBe(false);
  });
});
