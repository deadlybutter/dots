import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import 'whatwg-fetch';

import './main.scss';

import Page from './js/pages';
import Home from './js/pages/Home';
import ProjectContainer from './js/containers/ProjectContainer';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <IndexRoute component={Home} />
      <Route path="/project" component={ProjectContainer} />
    </Route>
  </Router>
), document.getElementById('root'));
