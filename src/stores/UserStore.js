/**
 * User Store
 */


'use strict';

import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';
import assign from 'object-assign';

import lang from '../common/lang';
import UserDataUtils from '../data-utils/UserDataUtils';


class UserStore extends ReduceStore {

  getInitialState() {
    const userCookie = UserDataUtils.readCookie();

    return {
      loggedIn: userCookie.loggedIn,
      lang: lang.getLang(),
      langList: localStorage.langList ? JSON.parse(localStorage.langList) : [],
      basicInfo: userCookie,

      // 0 - employee
      // 1 - manager
      // 2 - adminiatrator
      identity: 0
    };
  }

  reduce(state, action) {
    action.data || (action.data = {});

    switch (action.type) {
      case 'get-user-info':
        UserDataUtils.getUserInfo();
        break;
      case 'get-user-info-success':
        return assign(action.data, state);
      default:
    }

    return state;
  }
}


export default new UserStore(Dispatcher);