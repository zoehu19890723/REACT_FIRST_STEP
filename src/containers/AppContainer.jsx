/**
 * AppContainer page
 */


import React, { Component } from 'react';
import { Container } from 'flux/utils';
import { dispatch } from '../dispatcher/Dispatcher';
import CSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import lang, { getItem as getLang } from '../common/lang';
import UserStore from '../stores/UserStore';

import navForm from '../form/navForm.js';

import BottomNav from '../components/BottomNav/BottomNav.jsx';
import Header from '../components/Header/Header.jsx';

let tabIndex = 0;
class AppContainer extends Component {

  constructor(props) {
    super(props);
  }
  static getStores() {
    return [UserStore];
  }
  static calculateState() {
    return UserStore.getState();
  }
  handler() {
      let currentHash=this.props.location.pathname;
      if(currentHash.indexOf('inner-')>0){
          let currentTabIndex = parseInt(this.props.params.index);
          if(currentTabIndex > tabIndex){
            tabIndex = currentTabIndex;
            return false;
          }else{
            tabIndex = currentTabIndex;
            return true;
          }
      }
  }

  render() {
    const routeName = this.props.location.pathname;
    let currentTabIndex = 0;
    if(routeName.indexOf('inner-')>0){
        currentTabIndex = parseInt(this.props.params.index);
    }
    const title = navForm[currentTabIndex].text;
      return (
        <div>
            <Header title={title}/>
            <CSSTransitionGroup component='div' transitionName={this.handler()?'sliderOut':'slider'}>
                {React.cloneElement(this.props.children, { key: routeName })}
            </CSSTransitionGroup>
            <BottomNav items={navForm}/>
          </div>
      );
  }
}

export default Container.create(AppContainer);