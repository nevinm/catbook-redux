import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import thunk from 'redux-thunk';
import { loadCats } from './actions/catActions';

// Store creation
const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(loadCats());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
