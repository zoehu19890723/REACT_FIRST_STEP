/**
 * ContactsContainer page
 */


import React, { Component } from 'react';
import { Container } from 'flux/utils';
import { dispatch } from '../../dispatcher/Dispatcher';

import lang, { getItem as getLang } from '../../common/lang';
import UserStore from '../../stores/UserStore';


class ContactsContainer extends Component {

  constructor(props) {
    super(props);
  }

  static getStores() {
    return [UserStore];
  }

  static calculateState() {
    return UserStore.getState();
  }

  componentDidMount() {
  }

  render() {
    
    return (
              <div>contacts page</div>
           );
  }
}

export default Container.create(ContactsContainer);