/**
 * App entrance
 */


import '../node_modules/font-awesome/css/font-awesome.css';
import '../bower_components/framework7/dist/css/framework7.ios.min.css';
import './common/styles/app.less';

import Framework7 from '../bower_components/framework7/dist/js/framework7.min.js';
import React, { Component } from 'react';
import CSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ReactTap from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

import ajax from './common/utils/ajax';
import { dispatch } from './dispatcher/Dispatcher';

import AppContainer from  './containers/AppContainer.jsx';
import HomeContainer from  './containers/HomeContainer.jsx';

// Settings
// ---------------------------

React.initializeTouchEvents(true);
ReactTap();

// Routes
// ---------------------------

React.render((
  <Router>
      <Route path='/' name='app' component={AppContainer}>
        <IndexRoute component={HomeContainer} />
      </Route>
  </Router>
), document.getElementById('app'));
