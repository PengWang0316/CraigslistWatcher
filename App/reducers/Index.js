import { combineReducers } from 'redux';

import lists from './Lists';
import craigslistStates from './CraigslistStates';

export default combineReducers({
  craigslistStates,
  lists
});
