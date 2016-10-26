import rootReducer from '../reducers-projects';
import {createStore} from 'redux';

export default (initialState) => {
  return createStore(rootReducer, initialState);
};
