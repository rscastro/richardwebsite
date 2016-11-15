import * as types from '../redux-constants/action-types';

export const toggleNavigation = () => {
  console.log('toggleNavigation');
  return {
    type: types.TOGGLE_NAVIGATION
  };
}
