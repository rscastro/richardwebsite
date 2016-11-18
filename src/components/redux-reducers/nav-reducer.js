import * as types from '../redux-constants/action-types';

export default (state = [], action) => {

  switch (action.type) {

  case types.OPEN_NAVIGATION:
    console.log('open nav');
    return [...state, Object.assign({}, action.open)];

  case types.CLOSE_NAVIGATION:
    console.log('close nav');
    return [...state, Object.assign({}, action.close)];

  default:
    return state;
  }
};
