import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducers from './js/reducers';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

import './main.scss';

import { page, home } from './js/components';

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={page}>
        <Route exact path="/" component={home}/>
      </Route>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
