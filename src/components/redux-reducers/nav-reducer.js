import * as types from '../redux-constants/action-types';

export default (state = [], action) => {

  switch (action.type) {

  case types.TOGGLE_NAVIGATION:
    console.log('nav-reducer :: TOGGLE_NAVIGATION');
    return [...state, Object.assign({}, action.project)];

  default:
    return state;
  }
};
