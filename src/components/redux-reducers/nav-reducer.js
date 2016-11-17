import * as types from '../redux-constants/action-types';

export default (state = [], action) => {

  switch (action.type) {

  case types.OPEN_NAVIGATION:
    return [...state, Object.assign({}, action.openNavigation)];

  case types.CLOSE_NAVIGATION:
    return [...state, Object.assign({}, action.closeNavigation)];

  default:
    return state;
  }
};
