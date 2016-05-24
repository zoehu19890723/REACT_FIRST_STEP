/**
 * AppContainer page
 */


import React, { Component } from 'react';
import { Container } from 'flux/utils';
import { dispatch } from '../dispatcher/Dispatcher';
import CSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import lang, { getItem as getLang } from '../common/lang';
import UserStore from '../stores/UserStore';

let history = [];
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
      let historyLen = history.length;
      if(historyLen > 1 && history[historyLen-2]==currentHash){
          history.pop();
          return true;
      }else{
          history.push(currentHash);
          return false;
      }
  }

  render() {
    const routeName = this.props.location.pathname;
      return (
            <CSSTransitionGroup component='div' transitionName={this.handler()?'sliderOut':'slider'}>
                {React.cloneElement(this.props.children, { key: routeName })}
            </CSSTransitionGroup>
      );
  }
}

export default Container.create(AppContainer);