import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';

import { fetchLists } from '../../actions/ListActions';

/** The component are used to show the item list that fetched from CraigsList. */
class ItemsList extends Component {
  /**
   * Fetching the inintal list data from CraigsList.
   * @param {object} props contains the props values.
   * @return {null} No return.
   */
  constructor(props) {
    super(props);
    props.fetchLists(0);
  }

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
        {lists.length !== 0 && <Text>{lists[0].title}</Text>}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  lists: state.lists
});
const mapDispatchToProps = dispatch => ({
  fetchLists: page => dispatch(fetchLists(page))
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
