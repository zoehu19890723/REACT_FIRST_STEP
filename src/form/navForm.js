/**
 * Created by Zoe Hu on 16/5/25.
 */


'use strict';

import { getItem as getLang } from '../common/lang';

export default [
   {
    name : 'home',
    text : '首页',
    icon : 'home',
    link : 'inner-home/0',
    active : true
  },
  {
    name : 'message',
    text : '消息',
    icon : 'comments',
    notification : 2,
    link : 'inner-message/1',
    active : false
  },
  {
    name : 'contacts',
    text : '联系人',
    icon : 'users',
    link : 'inner-contacts/2',
    active : false
  },
  {
    name : 'news',
    text : '咨讯',
    icon : 'newspaper-o',
    link : 'inner-news/3',
    active : false
  },
  {
    name : 'self',
    text : '我',
    icon : 'user',
    link : 'inner-self/4',
    active : false
  }
];