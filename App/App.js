import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CraigslistExploreStack from './screens/CraigslistExploreStack';
import WatchingListStack from './screens/WatchingListStack';
import Colors from './Colors';

const App = TabNavigator(
  {
    CraigslistExplore: { screen: CraigslistExploreStack },
    WatchingList: { screen: WatchingListStack }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'CraigslistExplore') {
          iconName = `ios-images${focused ? '' : '-outline'}`;
        } else if (routeName === 'WatchingList') {
          iconName = `ios-eye${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'lightgray',
      style: {
        backgroundColor: Colors.primary,
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true
  }
);
export default App;
