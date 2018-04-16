import { combineReducers } from 'redux';

import lists from './Lists';
import craigslistStates from './CraigslistStates';
import craigslistItems from './CraigslistItems';

export default combineReducers({
  craigslistItems,
  craigslistStates,
  lists
});
