import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

import configureStore from './configureStore';
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);


ReactDOM.render(
  <Provider store={store} >
    {/* <ConnectedRouter history={history}> */}
      <App />
    {/* </ConnectedRouter> */}
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
