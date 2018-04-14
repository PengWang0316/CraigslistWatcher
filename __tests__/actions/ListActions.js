import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { FETCH_LISTS_SUCCESS, FETCH_MORE_LISTS_SUCCESS } from '../../App/actions/ActionTypes';
import { fetchLists, fetchMoreLists } from '../../App/actions/ListActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('craigslist-searcher', () => ({ search: jest.fn().mockReturnValue(new Promise(resolve => resolve([{ id: 'id' }]))) }));

describe('ListActions Test', () => {
  test('fetchLists', () => {
    const expectedActions = [{ type: FETCH_LISTS_SUCCESS, lists: [{ id: 'id' }] }];
    // const CraigslistSearch = require('craigslist-searcher');
    // CraigslistSearch.search = jest.fn().mockReturnValue(new Promise(resolve => resolve(lists)));
    const store = mockStore();
    return store.dispatch(fetchLists({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('fetchMoreLists', () => {
    const expectedActions = [{ type: FETCH_MORE_LISTS_SUCCESS, lists: [{ id: 'id' }] }];
    // const CraigslistSearch = require('craigslist-searcher');
    // CraigslistSearch.search = jest.fn().mockReturnValue(new Promise(resolve => resolve(lists)));
    const store = mockStore();
    return store.dispatch(fetchMoreLists({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
