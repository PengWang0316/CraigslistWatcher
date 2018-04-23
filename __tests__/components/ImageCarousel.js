import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Image } from 'react-native';

import ImageCarousel from '../../App/components/ImageCarousel';

// jest.mock('react-native', () => ({ Image: 'Image' }));
jest.mock('react-native-snap-carousel', () => 'Carousel');

describe('Test ImageCarousel', () => {
  const defaultProps = {
    images: ['image 1 url']
  };

  const getShallowComponent = (props = defaultProps) =>
    shallow(<ImageCarousel {...defaultProps} />);

  test('refFunction', () => {
    const component = getShallowComponent();
    component.instance().refFunction(component);
    expect(component.instance()._carousel).toBe(component);
  });

  test('renderItem', () => {
    const component = getShallowComponent();
    expect(component.instance().renderItem({ item: 'url', index: 1 })).toEqual(<Image style={{ height: 250, width: 300 }} source={{ uri: 'url' }} key={1} />);
  });

  test('Snapshot', () => expect(renderer.create(<ImageCarousel {...defaultProps} />).toJSON()).toMatchSnapshot());
});
