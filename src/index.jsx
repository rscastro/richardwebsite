import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './components/redux-store/configure-store';
import App from './App';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
