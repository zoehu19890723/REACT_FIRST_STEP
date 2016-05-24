/**
 * User data utils
 */


'use strict';

import dispatcher, { dispatch } from '../dispatcher/Dispatcher';

import ajax, { ajaxDispatch } from '../common/utils/ajax';
import cookies from '../common/utils/cookies';
import lang from '../common/lang';


export default {

  readCookie() {
    let result = {};

    cookies.keys().forEach((key) => {
      result[key] = cookies.getItem(key);
    });

    return result;
  },

  getUserInfo(){
    ajax.get('user-info')
    .then((res) => {
      dispatch({
          type: 'get-user-info-success',
          data: res
        });
      });
  }

};
