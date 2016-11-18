import * as types from '../redux-constants/action-types';

export const openNavigation = () => {
  console.log('nav-actions.js :: OPEN_NAVIGATION');
  return {
    type: types.OPEN_NAVIGATION
  };
}

export const closeNavigation = () => {
  console.log('nav-actions.js :: CLOSE_NAVIGATION');
  return {
    type: types.CLOSE_NAVIGATION
  };
}
