import { StackNavigator } from 'react-navigation';

import ExploreListScreen from './ExploreListScreen';

const CraigslistExploreStack = StackNavigator(
  {
    ExploreList: { screen: ExploreListScreen }
  },
  { headerMode: 'none' }
);
export default CraigslistExploreStack;
