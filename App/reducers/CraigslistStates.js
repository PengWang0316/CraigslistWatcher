import { CHANGE_CITY_SUCCESS, CHANGE_CATEGORY_SUCCESS, CHANGE_KEYWORD_SUCCESS, INCREASE_PAGE_NUMBER_SUCCESS, ADD_CRAIGSLIST_ITEM_SUCCESS } from '../actions/ActionTypes';

const craigslistStates = (state = {
  city: 'www', category: 'sss', pageNumber: 1, items: {}
}, action) => {
  switch (action.type) {
    case CHANGE_CITY_SUCCESS:
      return { ...state, city: action.city };
    case CHANGE_CATEGORY_SUCCESS:
      return { ...state, category: action.category };
    case CHANGE_KEYWORD_SUCCESS:
      return { ...state, city: action.keyword };
    case INCREASE_PAGE_NUMBER_SUCCESS:
      return { ...state, pageNumber: state.pageNumber + 1 };
    case ADD_CRAIGSLIST_ITEM_SUCCESS:
      return { ...state, items: { ...state.items, [action.item.dataId]: action.item } };
    default:
      return state;
  }
};
export default craigslistStates;
