/**
 * App entrance
 */


import '../node_modules/font-awesome/css/font-awesome.css';
import '../bower_components/framework7/dist/css/framework7.ios.min.css';
import '../bower_components/framework7/dist/css/framework7.ios.colors.min.css';
import './common/styles/app.less';

import Framework7 from '../bower_components/framework7/dist/js/framework7.min.js';
import React, { Component } from 'react';
import CSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ReactTap from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

import ajax from './common/utils/ajax';
import { dispatch } from './dispatcher/Dispatcher';

import AppContainer from  './containers/AppContainer.jsx';
import HomeContainer from  './containers/Main/HomeContainer.jsx';
import MsgContainer from  './containers/Main/MsgContainer.jsx';
import ContactsContainer from  './containers/Main/ContactsContainer.jsx';
import NewsContainer from  './containers/Main/NewsContainer.jsx';
import SelfContainer from  './containers/Main/SelfContainer.jsx';


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
        
        <Route path='inner-home/:index' name='home' routerProps={{index :0}} component={HomeContainer} />
        <Route path='inner-message/:index' name='message' routerProps={{index :1}} component={MsgContainer} />
        <Route path='inner-contacts/:index' name='contacts' routerProps={{index :2}} component={ContactsContainer} />
        <Route path='inner-news/:index' name='news' routerProps={{index :3}} component={NewsContainer} />
        <Route path='inner-self/:index' name='self' routerProps={{index :4}} component={SelfContainer} />
      </Route>
  </Router>
), document.getElementById('app'));
