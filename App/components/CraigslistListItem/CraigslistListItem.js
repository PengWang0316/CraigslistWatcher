import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Icon } from 'react-native-elements';

import styles from './Styles';

/** ListItem for CraigsList's FlatList */
class CraigslistListItem extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  handleLeftIconClick = () => console.log('ok');

  /**
   * Rendering the jsx for the component.
   * @param {object} props contians all prop's vaule.
   * @return {jsx} Return jsx for the component.
   */
  render() {
    const { item } = this.props;
    return (
      <ListItem
        title={item.title}
        subtitle={`${item.region} ${item.datetime}`}
        leftIcon={<Icon name="wallpaper" raised onPress={this.handleLeftIconClick} />}
        badge={{ value: item.price }}
        containerStyle={styles.containerStyle}
      />
    );
  }
}
export default CraigslistListItem;
