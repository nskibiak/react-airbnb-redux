import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './stylesheets/index.scss';

// import store from './app/store';
// import * as serviceWorker from './serviceWorker';
import flatsReducer from './reducers/flat_reducer';

import App from './components/app';

const reducers = combineReducers({
  flats: flatsReducer
});

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers)}>
  <App />
  </Provider>,
  root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
