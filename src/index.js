import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './components/app';
import store from './app/store';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
// import flatsReducer from './reducers/flats_reducer';
import * as serviceWorker from './serviceWorker';

const reducers = combineReducers({
  // flats: flatsReducer
});

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
