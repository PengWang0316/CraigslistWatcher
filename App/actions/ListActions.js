import axios from 'axios';

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

// export const fetchLists = page => dispatch => getCraigslistClient().list({ offset: page * AMOUNT_ITEMS_IN_ONE_PAGE }).then(lists => dispatch(fetchListsSuccess(lists)));

export const fetchLists = page => dispatch => {
  const regexFindResult = /<p class="result-info">.+?datetime="(.+?)".+?href="(.+?)".+?>(.+?)<\/a>.+?price">(.+?)<.+?hood">(.+?)<.+?<\/p>/g;
  return axios.get('https://seattle.craigslist.org/search/sss?query=surface&sort=rel').then(({ data }) => {
    const formatedData = data.replace(/\n/g, '');
    const dataResult = [];
    let matchArray;
    while (matchArray = regexFindResult.exec(formatedData)) {
      dataResult.push({
        datetime: matchArray[1],
        url: matchArray[2],
        title: matchArray[3],
        price: matchArray[4],
        region: matchArray[5]
      });
    }
    dispatch(fetchListsSuccess(dataResult));
  });
};

export default fetchLists;
