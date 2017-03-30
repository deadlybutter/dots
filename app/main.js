import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducers from './reducers';

import './main.scss';

import Header from './components/header';
import Home from './components/home';
import Project from './components/project';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="container-fluid">
        <Header />
        <main role="main">
          <Route exact path="/" component={Home} />
          <Route path="/projects/:id" component={Project} />
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
