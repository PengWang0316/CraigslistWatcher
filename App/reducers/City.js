import { CHANGE_CITY_SUCCESS } from '../actions/ActionTypes';

const city = (state = 'www', action) => {
  switch (action.type) {
    case CHANGE_CITY_SUCCESS:
      return action.city;
    default:
      return state;
  }
};
export default city;
