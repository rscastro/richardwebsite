import rootReducer from '../components/reducers-projects';
import {createStore} from 'redux';

export default (initialState) => {
  return createStore(rootReducer, initialState);
};
