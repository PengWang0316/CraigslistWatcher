import { INCREASE_PAGE_NUMBER_SUCCESS, CHANGE_CITY_SUCCESS, CHANGE_CATEGORY_SUCCESS, CHANGE_KEYWORD_SUCCESS } from './ActionTypes';

export const increasePageNumber = () => ({ type: INCREASE_PAGE_NUMBER_SUCCESS });

export const changeCity = city => ({ type: CHANGE_CITY_SUCCESS, city });

export const changeCategory = category => ({ type: CHANGE_CATEGORY_SUCCESS, category });

export const changeKeyword = keyword => ({ type: CHANGE_KEYWORD_SUCCESS, keyword });
