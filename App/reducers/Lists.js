import { FETCH_LISTS_SUCCESS, FETCH_MORE_LISTS_SUCCESS } from '../actions/ActionTypes';

const lists = (state = [], action) => {
  switch (action.type) {
    case FETCH_LISTS_SUCCESS:
      return [...action.lists];
    case FETCH_MORE_LISTS_SUCCESS:
      return [...state, ...action.lists];
    default:
      return state;
  }
};
export default lists;
