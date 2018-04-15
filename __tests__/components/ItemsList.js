import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { ItemsList } from '../../App/components/ItemsList/ItemsList';

jest.mock('../../App/components/CraigslistListItem', () => 'CraigslistListItem');

describe('Test ItemsList', () => {
  const defaultPorps = {
    lists: [],
    craigslistStates: {
      city: 'city', keyword: 'keyword', category: 'category', pageNumber: 2
    },
    fetchLists: jest.fn(),
    fetchMoreLists: jest.fn(),
    increasePageNumber: jest.fn()
  };

  const getComponent = (props = defaultPorps) => shallow(<ItemsList {...props} />);

  test('initial states and componentDidMount', () => {
    const component = getComponent();
    expect(component.state('refreshing')).toBe(false);
    expect(defaultPorps.fetchLists).toHaveBeenCalledWith({
      city: 'city', keyword: 'keyword', category: 'category'
    });
    expect(defaultPorps.fetchLists).toHaveBeenCalledTimes(1);
  });

  test('getDerivedStateFromProps', () => {
    const component = getComponent();
    const newLists = [];
    component.setState({ refreshing: true });
    component.setProps({ lists: newLists });
    expect(component.state('refreshing')).toBe(false);
    component.setState({ refreshing: true, lists: newLists });
    component.setProps({ lists: newLists });
    expect(component.state('refreshing')).toBe(true);
  });

  test('handleRefresh', () => {
    const component = getComponent({ ...defaultPorps, craigslistStates: { city: 'new city', keyword: 'new keyword', category: 'new category' } });
    component.instance().handleRefresh();
    expect(component.state('refreshing')).toBe(true);
    expect(defaultPorps.fetchLists).toHaveBeenCalledWith({
      city: 'new city', keyword: 'new keyword', category: 'new category'
    });
  });

  test('handleEndReached', () => {
    const component = getComponent();
    component.instance().handleEndReached();
    expect(defaultPorps.fetchMoreLists).toHaveBeenCalledWith({
      city: 'city', keyword: 'keyword', category: 'category', page: 3
    });
    expect(defaultPorps.increasePageNumber).toHaveBeenCalledTimes(1);
  });

  test('renderItem snapshot', () => {
    const component = getComponent();
    expect(renderer.create(component.instance().renderItem({ item: 'item' })).toJSON()).toMatchSnapshot();
  });

  test('renderSeparator snapshot', () => {
    const component = getComponent();
    expect(renderer.create(component.instance().renderSeparator()).toJSON()).toMatchSnapshot();
  });

  test('renderFooter snapshot', () => {
    const component = getComponent();
    expect(component.instance().renderFooter()).toBeNull();
    component.setProps({ lists: [1] });
    expect(renderer.create(component.instance().renderFooter()).toJSON()).toMatchSnapshot();
  });

  test('snapshot test empty lists', () => expect(renderer.create(<ItemsList {...defaultPorps} />).toJSON()).toMatchSnapshot());

  test('snapshot test not empty lists', () => expect(renderer.create(<ItemsList {...{ ...defaultPorps, lists: [1] }} />).toJSON()).toMatchSnapshot());
});
