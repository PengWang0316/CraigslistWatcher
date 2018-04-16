import * as CraigslistSearch from 'craigslist-searcher';

import { INCREASE_PAGE_NUMBER_SUCCESS, CHANGE_CITY_SUCCESS, CHANGE_CATEGORY_SUCCESS, CHANGE_KEYWORD_SUCCESS, ADD_CRAIGSLIST_ITEM_SUCCESS } from './ActionTypes';

export const increasePageNumber = () => ({ type: INCREASE_PAGE_NUMBER_SUCCESS });

export const changeCity = city => ({ type: CHANGE_CITY_SUCCESS, city });

export const changeCategory = category => ({ type: CHANGE_CATEGORY_SUCCESS, category });

export const changeKeyword = keyword => ({ type: CHANGE_KEYWORD_SUCCESS, keyword });

const addCraigslistItem = item => ({ type: ADD_CRAIGSLIST_ITEM_SUCCESS, item });

export const fetchCraigslistItem = url => dispatch => CraigslistSearch.detail(url)
  .then(item => dispatch(addCraigslistItem(item)));
