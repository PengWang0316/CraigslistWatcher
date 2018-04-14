import { CHANGE_KEYWORD_SUCCESS } from '../actions/ActionTypes';

const keyword = (state, action) => {
  switch (action.type) {
    case CHANGE_KEYWORD_SUCCESS:
      return action.keyword;
    default:
      return state;
  }
};
export default keyword;
