import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, FlatList } from 'react-native';
// import { ListItem, Icon } from 'react-native-elements';

import Styles from './Styles';
import { fetchLists, fetchMoreLists } from '../../actions/ListActions';
import { increasePageNumber } from '../../actions/CraigslistStatesActions';
import CraigslistListItem from '../CraigslistListItem';

/** The component are used to show the item list that fetched from CraigsList. */
export class ItemsList extends Component {
  static propTypes = {
    lists: PropTypes.array.isRequired,
    craigslistStates: PropTypes.object.isRequired,
    fetchLists: PropTypes.func.isRequired,
    fetchMoreLists: PropTypes.func.isRequired,
    increasePageNumber: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  /**
   * If a new Lists data is loaded, set refreshing state to false.
   * @param {object} nextProps contains new prop values.
   * @param {object} prevState contains old state values.
   * @return {object} Return a new state.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.lists !== nextProps.lists) return { refreshing: false };
    return null;
  }

  state = { refreshing: false };

  /**
   * Fetching the inintal list data from CraigsList.
   * @return {null} No return.
   */
  componentDidMount() {
    this.props.fetchLists({
      city: this.props.craigslistStates.city,
      keyword: this.props.craigslistStates.keyword,
      category: this.props.craigslistStates.category
    });
  }

  /**
   * Loading new data from the data source.
   * @return {null} No return.
   */
  handleRefresh = () => this.setState({ refreshing: true }, () => this.props.fetchLists({
    city: this.props.craigslistStates.city,
    keyword: this.props.craigslistStates.keyword,
    category: this.props.craigslistStates.category
  }));

  /**
   * Loading new data from the data source when a user reach the end of the list.
   * @return {null} No return.
   */
  handleEndReached = () => {
    this.props.fetchMoreLists({
      page: this.props.craigslistStates.pageNumber + 1,
      city: this.props.craigslistStates.city,
      keyword: this.props.craigslistStates.keyword,
      category: this.props.craigslistStates.category
    });
    this.props.increasePageNumber();
  };

  /**
   * Rendering eatch item for the FlatList.
   * @return {jsx} Return a CraigslistListItem component.
   */
  renderItem = ({ item }) => <CraigslistListItem item={item} navigation={this.props.navigation} />;

  /**
   * Rendering the footer for the FlatList.
   * @return {jsx} Return null when lists is empty. Return an activity indicator when the lists is not empty.
   */
  renderFooter = () => {
    if (this.props.lists.length === 0) return null;
    return (
      <View style={Styles.indicatorViewStyle}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  /**
   * Rendering the separator for the FlatList.
   * @return {jsx} Return a view with separator style.
   */
  renderSeparator = () => <View style={Styles.separatorStyle} />;

  /**
   * Render the jsx for the component.
   * @param {object} props contains the prop values for the component.
   * @return {jsx} Return jsx.
   */
  render() {
    const { lists } = this.props;
    return (
      <View>
        {lists.length === 0 && <ActivityIndicator size="large" color="gray" />}
        {lists.length !== 0 &&
        <FlatList
          data={lists}
          keyExtractor={item => item.dataId}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleEndReached}
          onEndThreshold={10}
        />
        }
      </View>
    );
  }
}
/* istanbul ignore next */
const mapStateToProps = state => ({
  lists: state.lists,
  craigslistStates: state.craigslistStates
});
/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  fetchLists: parameter => dispatch(fetchLists(parameter)),
  fetchMoreLists: parameter => dispatch(fetchMoreLists(parameter)),
  increasePageNumber: () => dispatch(increasePageNumber())
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
