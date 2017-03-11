import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import 'whatwg-fetch';

import './reset.scss';

import Page from './js/pages';
import Home from './js/pages/Home';
import Project from './js/pages/Project';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <IndexRoute component={Home} />
      <Route path="/project" component={Project} />
    </Route>
  </Router>
), document.getElementById('root'));
