import projects from './project-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  projects
});

export default rootReducer;
