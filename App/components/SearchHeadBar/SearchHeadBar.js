import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './Styles';

const SearchHeadBar = () => (
  <View style={styles.view}>
    <TextInput underlineColorAndroid="transparent" style={styles.searchInput} placeholder="What you want to search?" />
    <TouchableOpacity><Icon raised name="search" size={20} /></TouchableOpacity>
    <TouchableOpacity><Text>City Name</Text></TouchableOpacity>
    <TouchableOpacity><Icon raised name="directions-car" color="white" containerStyle={{ backgroundColor: 'lawngreen' }} size={20} /></TouchableOpacity>
  </View>
);
export default SearchHeadBar;
