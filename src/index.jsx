import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './components/redux-store/configure-store';
import { Router, browserHistory } from 'react-router';
// import * as navActions from './components/redux-actions/nav-actions';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={ routes } />
  </Provider>,
  document.getElementById('root')
);
