import * as types from '../redux-constants/action-types';

export const openNavigation = () => {
  return {
    type: types.OPEN_NAVIGATION
  };
}

export const closeNavigation = () => {
  return {
    type: types.CLOSE_NAVIGATION
  };
}
