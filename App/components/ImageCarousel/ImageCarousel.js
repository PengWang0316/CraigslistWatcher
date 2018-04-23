import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import { Image, Dimensions } from 'react-native';

import Styles from './Styles';

/** Show a carousel for the item's images. */
class ImageCarousel extends Component {
  static propTypes = { images: PropTypes.array.isRequired };

  /**
   * Saving the carousel's reference.
   * @param {object} ref is the reference of this component.
   * @return {null} No return.
   */
  refFunction = ref => { this._carousel = ref; };

  /**
   * Creating the component to the Carousel.
   * @param {object} item is the image's url.
   * @return {jsx} No return the component's jsx.
   */
  renderItem = ({ item, index }) =>
    <Image style={Styles.image} source={{ uri: item }} key={index} />;

  /**
   * Rendering the jsx for the component.
   * @return {jsx} Return jsx.
   */
  render() {
    const { width } = Dimensions.get('window');
    return (
      <Carousel
        ref={this.refFunction}
        data={this.props.images}
        renderItem={this.renderItem}
        itemWidth={width - 100}
        sliderWidth={width}
        loop
      />);
  }
}
export default ImageCarousel;
