import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import styles from './Styles';
import { fetchCraigslistItem } from '../../actions/CraigslistStatesActions';

/** ListItem for CraigsList's FlatList */
export class CraigslistListItem extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    fetchCraigslistItem: PropTypes.func.isRequired,
    craigslistStates: PropTypes.object.isRequired
  };

  /**
   * Update avatar and leftIcon state after a new item was added to Redux's craigslistStates.items.
   * @param {object} nextProps is the changed props values.
   * @param {object} prevState is the old state values.
   * @return {object} Return a object that contains state that need to be updated.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.leftIcon !== null && nextProps.craigslistStates.items[nextProps.item.dataId])
      return {
        leftIcon: null,
        avatar: { uri: nextProps.craigslistStates.items[nextProps.item.dataId].images[0] }
      };
    return null;
  }

  /**
   * Initialing states for the component.
   * @param {object} props contains props values.
   * @return {null} No return.
   */
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.craigslistStates.items[this.props.item.dataId] ?
        { uri: this.props.craigslistStates.items[this.props.item.dataId].images[0] } : null,
      leftIcon: this.props.craigslistStates.items[this.props.item.dataId] ? null : <Icon name="wallpaper" raised onPress={this.handleLeftIconClick} />
    };
  }

  /**
   * When a user click the left icon, the avatar state will be set to the image's uri or call the action to fetch the item's detailed information.
   * @return {null} No return.
   */
  handleLeftIconClick = () => {
    if (this.props.craigslistStates.items[this.props.item.dataId]) this.setState({
      avatar: { uri: this.props.craigslistStates.items[this.props.item.dataId].images[0] },
      leftIcon: null
    }); else this.props.fetchCraigslistItem(this.props.item.url).catch(err => console.log(err));
  };

  /**
   * When a user click the component, navigate to the detailed screen.
   * @return {null} No return.
   */
  handlePress = () => this.props.navigation.navigate('DetailedItem', { dataId: this.props.item.dataId });

  /**
   * Rendering the jsx for the component.
   * @param {object} props contians all prop's vaule.
   * @return {jsx} Return jsx for the component.
   */
  render() {
    const { item } = this.props;
    return (
      <ListItem
        roundAvatar
        avatar={this.state.avatar}
        title={item.title}
        subtitle={`${item.region} ${item.datetime}`}
        leftIcon={this.state.leftIcon}
        badge={{ value: item.price }}
        containerStyle={styles.containerStyle}
        onPress={this.handlePress}
      />
    );
  }
}
/* istanbul ignore next */
const mapStateToProps = state => ({
  craigslistStates: state.craigslistStates
});
/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  fetchCraigslistItem: url => dispatch(fetchCraigslistItem(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(CraigslistListItem);
