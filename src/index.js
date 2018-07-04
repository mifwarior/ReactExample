import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {Router, Route, } from 'react-router'

const store = createStore((state = {})=>{
  return state;
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

