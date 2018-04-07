import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import { FETCH_LISTS_SUCCESS } from '../../App/actions/ActionTypes';
import { fetchLists } from '../../App/actions/ListActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// jest.mock('node-craigslist', () => ({ Client: {} }));

describe('ListActions Test', () => {
  // test('fetchLists', () => {
  //   const lists = [{ id: 'id' }];
  //   const expectedActions = [{ type: FETCH_LISTS_SUCCESS, lists }];
  //   const craigslist = require('node-craigslist');
  //   const listMockFn = jest.fn().mockReturnValue(new Promise(resolve => resolve(lists)));
  //   craigslist.Client = function () {};
  //   craigslist.Client.prototype.list = listMockFn;
  //   // jest.fn().mockReturnValue({ list: listMockFn });
  //   const store = mockStore();
  //   return store.dispatch(fetchLists()).then(() =>
  //     expect(store.getActions()).toEqual(expectedActions));
  // });

  test('fetchLists', () => {

  });
});
