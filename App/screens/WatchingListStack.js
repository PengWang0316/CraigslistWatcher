import { StackNavigator } from 'react-navigation';

import WatchListScreen from './WatchListScreen';

const WatchingListStack = StackNavigator(
  {
    WatchList: { screen: WatchListScreen }
  },
  { headerMode: 'none' }
);
export default WatchingListStack;
