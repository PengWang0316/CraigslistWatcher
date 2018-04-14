import { CHANGE_CITY_SUCCESS, CHANGE_CATEGORY_SUCCESS, CHANGE_KEYWORD_SUCCESS, INCREASE_PAGE_NUMBER_SUCCESS } from '../actions/ActionTypes';

const craigslistStates = (state = { city: 'www', category: 'sss', page: 1 }, action) => {
  switch (action.type) {
    case CHANGE_CITY_SUCCESS:
      return { ...state, city: action.city };
    case CHANGE_CATEGORY_SUCCESS:
      return { ...state, category: action.category };
    case CHANGE_KEYWORD_SUCCESS:
      return { ...state, city: action.keyword };
    case INCREASE_PAGE_NUMBER_SUCCESS:
      return { ...state, pageNumber: action.pageNumber + 1 };
    default:
      return state;
  }
};
export default craigslistStates;
