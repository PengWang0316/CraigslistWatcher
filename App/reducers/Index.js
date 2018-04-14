import { combineReducers } from 'redux';

import lists from './Lists';
import city from './City';
import category from './Category';
import keyword from './Keyword';

export default combineReducers({
  category,
  city,
  keyword,
  lists
});
