import * as CraigslistSearch from 'craigslist-searcher';
import { FETCH_LISTS_SUCCESS } from './ActionTypes';
import { AMOUNT_ITEMS_IN_ONE_PAGE } from '../config';

// const craigslist = require('node-craigslist');

// const getCraigslistClient = () => new craigslist.Client({
//   baseHost: 'craigslist.org',
//   city: 'Seattle'
// });

const fetchListsSuccess = lists => ({
  type: FETCH_LISTS_SUCCESS,
  lists
});

export const fetchLists = (page = 1) => dispatch =>
  CraigslistSearch.search({ city: 'seattle', query: 'surface book', offset: (page - 1) * AMOUNT_ITEMS_IN_ONE_PAGE }).then(data => dispatch(fetchListsSuccess(data)));

export default fetchLists;
