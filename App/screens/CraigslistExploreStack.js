import { StackNavigator } from 'react-navigation';

import ExploreListScreen from './ExploreListScreen';
import CraigslistDetailedScreen from './CraigslistDetailedScreen';

const CraigslistExploreStack = StackNavigator(
  {
    ExploreList: { screen: ExploreListScreen },
    DetailedItem: { screen: CraigslistDetailedScreen }
  },
  { headerMode: 'none' }
);
export default CraigslistExploreStack;
