import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { INCREASE_PAGE_NUMBER_SUCCESS, CHANGE_CITY_SUCCESS, CHANGE_CATEGORY_SUCCESS, CHANGE_KEYWORD_SUCCESS, ADD_CRAIGSLIST_ITEM_SUCCESS } from '../../App/actions/ActionTypes';
import { increasePageNumber, changeCity, changeKeyword, changeCategory, fetchCraigslistItem } from '../../App/actions/CraigslistStatesActions';

jest.mock('craigslist-searcher', () => ({ detail: jest.fn().mockReturnValue(new Promise((resolve, reject) => resolve({ dataId: '1' }))) }));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test CraigslistStatesAction', () => {
  test('Test increasePageNumber', () => {
    const expectedActions = [{ type: INCREASE_PAGE_NUMBER_SUCCESS }];
    const store = mockStore();
    store.dispatch(increasePageNumber());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Test changeCity', () => {
    const expectedActions = [{ type: CHANGE_CITY_SUCCESS, city: 'seattle' }];
    const store = mockStore();
    store.dispatch(changeCity('seattle'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Test changeKeyword', () => {
    const expectedActions = [{ type: CHANGE_KEYWORD_SUCCESS, keyword: 'new keyword' }];
    const store = mockStore();
    store.dispatch(changeKeyword('new keyword'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Test changeCategory', () => {
    const expectedActions = [{ type: CHANGE_CATEGORY_SUCCESS, category: 'new category' }];
    const store = mockStore();
    store.dispatch(changeCategory('new category'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Test fetchCraigslistItem', () => {
    const item = { dataId: '1' };
    const url = 'fakeUrl';
    const expectedActions = [{ type: ADD_CRAIGSLIST_ITEM_SUCCESS, item }];
    const store = mockStore();
    return store.dispatch(fetchCraigslistItem(url)).then(() =>
      expect(store.getActions()).toEqual(expectedActions));
  });
});
