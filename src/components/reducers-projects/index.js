import people from './project-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people
});

export default rootReducer;
