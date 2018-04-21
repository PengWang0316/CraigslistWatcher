import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { CraigslistListItem } from '../../App/components/CraigslistListItem/CraigslistListItem';

jest.mock('react-native-elements', () => ({ ListItem: 'ListItem', Icon: 'Icon' }));

describe('CraigslistListItem test', () => {
  const defaultProps = {
    item: {
      datetime: '2018-04-20 17:18',
      url: 'https://sfbay.craigslist.org/eby/bab/d/sit-and-stand-double-stroller/6556745475.html',
      dataId: '6556745475',
      title: 'Sit and stand double stroller',
      price: '$45',
      region: 'albany / el cerrito'
    },
    navigation: { navigate: jest.fn() },
    fetchCraigslistItem: jest.fn().mockReturnValue(new Promise(resolve => resolve())),
    craigslistStates: {
      items: {}
    }
  };
  const getShallowComponent = (props = defaultProps) => shallow(<CraigslistListItem {...props} />);

  test('Initial component without item match', () => {
    const component = getShallowComponent();
    expect(component.state('avatar')).toBeNull();
    expect(component.state('leftIcon')).not.toBeUndefined();
    expect(component.state('leftIcon')).not.toBeNull();
  });

  test('Initial component with item match', () => {
    const component = getShallowComponent({
      ...defaultProps,
      craigslistStates: {
        items: { 6556745475: { images: ['image uri 0'] } }
      }
    });
    expect(component.state('avatar')).toEqual({ uri: 'image uri 0' });
    expect(component.state('leftIcon')).toBeNull();
  });

  test('getDerivedStateFromPros with leftIcon and match items', () => {
    // const component = getShallowComponent();
    const nextProps = {
      craigslistStates: {
        items: { 6556745475: { images: ['image uri 1'] } }
      },
      item: { dataId: 6556745475 }
    };
    const prevState = {
      leftIcon: {}
    };
    expect(CraigslistListItem.getDerivedStateFromProps(nextProps, prevState)).toEqual({
      leftIcon: null,
      avatar: { uri: 'image uri 1' }
    });
  });

  test('getDerivedStateFromPros without leftIcon and match items', () => {
    // const component = getShallowComponent();
    const nextProps = {
      craigslistStates: {
        items: { 1234: { images: ['image uri 0'] } }
      },
      item: { dataId: 6556745475 }
    };
    let prevState = {
      leftIcon: null
    };
    expect(CraigslistListItem.getDerivedStateFromProps(nextProps, prevState)).toBeNull();

    prevState = {
      leftIcon: {}
    };
    expect(CraigslistListItem.getDerivedStateFromProps(nextProps, prevState)).toBeNull();
  });

  test('handleLeftIconClick with item match', () => {
    const component = getShallowComponent({
      ...defaultProps,
      craigslistStates: {
        items: { 6556745475: { images: ['image uri 3'] } }
      }
    });
    component.setState({ leftIcon: {} });
    component.instance().handleLeftIconClick();
    expect(component.state('avatar')).toEqual({ uri: 'image uri 3' });
    expect(component.state('leftIcon')).toBeNull();
    expect(defaultProps.fetchCraigslistItem).not.toHaveBeenCalled();
  });

  test('handleLeftIconClick without item match', () => {
    const component = getShallowComponent({
      ...defaultProps,
      craigslistStates: {
        items: { 1234: { images: ['image uri 3'] } }
      }
    });
    component.instance().handleLeftIconClick();
    expect(defaultProps.fetchCraigslistItem).toHaveBeenLastCalledWith('https://sfbay.craigslist.org/eby/bab/d/sit-and-stand-double-stroller/6556745475.html');
  });

  test('handlePress', () => {
    const component = getShallowComponent();
    component.instance().handlePress();
    expect(defaultProps.navigation.navigate).toHaveBeenLastCalledWith('DetailedItem');
  });

  test(' snapshot', () => expect(renderer.create(<CraigslistListItem {...defaultProps} />).toJSON()).toMatchSnapshot());
});
