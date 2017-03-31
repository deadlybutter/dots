import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducers from './reducers';

import './main.scss';

import FluidContainer from './components/fluid-container';
import Header from './components/header';
import Home from './components/home';
import Project from './components/project';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  reducers({
    router: routerReducer
  }),
  {
    dots: window.state
  },
  applyMiddleware(middleware)
);

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="page">
        <Header />
        <FluidContainer>
          <Route exact path="/" component={Home} />
          <Route path="/projects/:id" component={Project} />
        </FluidContainer>
      </div>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
