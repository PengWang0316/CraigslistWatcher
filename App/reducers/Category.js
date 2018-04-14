import { CHANGE_CATEGORY_SUCCESS } from '../actions/ActionTypes';

const category = (state = 'sss', action) => {
  switch (action.type) {
    case CHANGE_CATEGORY_SUCCESS:
      return action.category;
    default:
      return state;
  }
};
export default category;
