import * as CraigslistSearch from 'craigslist-searcher';
import { FETCH_LISTS_SUCCESS, FETCH_MORE_LISTS_SUCCESS } from './ActionTypes';
import { AMOUNT_ITEMS_IN_ONE_PAGE } from '../config';

const fetchListsSuccess = lists => ({
  type: FETCH_LISTS_SUCCESS,
  lists
});

const fetchMoreListsSuccess = lists => ({
  type: FETCH_MORE_LISTS_SUCCESS,
  lists
});

export const fetchLists = (page = 1) => dispatch =>
  CraigslistSearch.search({ city: 'seattle', query: '', offset: (page - 1) * AMOUNT_ITEMS_IN_ONE_PAGE }).then(data => dispatch(fetchListsSuccess(data)));

export const fetchMoreLists = (page = 1) => dispatch =>
  CraigslistSearch.search({ city: 'seattle', query: '', offset: (page - 1) * AMOUNT_ITEMS_IN_ONE_PAGE }).then(data => dispatch(fetchMoreListsSuccess(data)));

export default fetchLists;
