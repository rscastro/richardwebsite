import * as types from '../redux-constants/action-types';

export default (state = [], action) => {
  switch (action.type) {
  case types.ADD_PROJECT:
    return [...state, Object.assign({}, action.project)];
  default:
    return state;
  }
};
