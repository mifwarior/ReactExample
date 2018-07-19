import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import {createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import styles from './styles.css'


const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

