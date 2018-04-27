import React, { Component } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { Badge } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';

import ImageCarousel from '../ImageCarousel';
import Styles from './Styles';
import { fetchCraigslistItem } from '../../actions/CraigslistStatesActions';

/** Show the detailed information for a Craigslist item */
class CraigslistDetailPage extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    fetchCraigslistItem: PropTypes.func.isRequired
  };

  /**
   * Fetching item detailed information if the Redux has not had it.
   * @param {object} props contains prop values for the component.
   * @return {null} No return.
   */
  constructor(props) {
    super(props);
    if (!props.items[props.dataId])
      props.fetchCraigslistItem(props.url);
  }

  /**
   * Rendering the components for the detail page.
   * @return {jsx} Return jsx.
   */
  render() {
    const item = this.props.items[this.props.dataId];
    if (!item) return <ActivityIndicator />;
    return (
      <View style={Styles.mainView}>
        <ImageCarousel images={item.images} />
        <View style={Styles.subView}>
          <Text style={Styles.title}>{item.title}</Text>
          <Badge value={item.price} />
        </View>
        <View style={Styles.subView}>
          <Text>{`Posted on: ${item.postedDate}`}</Text>
          <Text>{`  Location: ${item.location}`}</Text>
        </View>
        <View style={Styles.subView}>
          <Text>{item.description}</Text>
        </View>
        {item.latitude && item.longitude &&
          <View style={Styles.mapView}>
            <MapView
              style={Styles.map}
              initialRegion={{
                latitude: item.latitude * 1,
                longitude: item.longitude * 1,
                latitudeDelta: 0.0622,
                longitudeDelta: 0.0321
                }}
            />
          </View>
        }
      </View>
    );
  }
}
/* istanbul ignore next */
const mapStateToProps = state => ({
  items: state.craigslistStates.items,
});
/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  fetchCraigslistItem: url => dispatch(fetchCraigslistItem(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(CraigslistDetailPage);
