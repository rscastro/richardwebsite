import * as types from '../constants-projects/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_PROJECT:
      return [...state, Object.assign({}, action.person)];
    default:
      return state;
  }
};
