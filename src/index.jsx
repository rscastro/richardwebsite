import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './components/redux-store/configure-store';
import * as navActions from './components/redux-actions/nav-actions';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() => {
  console.log('store change: ', store.state());
})


store.dispatch( navActions.openNavigation );
