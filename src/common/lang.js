/**
 * Lauguages
 */


'use strict';

import cookies from '../common/utils/cookies';


const supported = ['zh', 'en', 'jp'];

const langMap = {
  'pla_lan_001': 'zh',
  'pla_lan_002': 'en',
  'pla_lan_003': 'jp'
};

const lang = {

  zh: {

  },

  en: {

   
  },

  jp: {

  }
};

const bl = navigator.browserLanguage;
const ls = navigator.languages;
const l = navigator.language;

let defaultLang = cookies.getItem('lang')
                    || (bl && bl.split('-')[0]) // IE11+
                    || (ls && ls[0] && ls[0].split('-')[0])
                    || (l && l.split('-')[0]);

if (supported.indexOf(defaultLang) === -1) {
  defaultLang = 'en';
}


export default {

  setLang(code) {
    defaultLang = code;
    cookies.setItem('lang', langMap[code]);
  },

  getLang() {
    return defaultLang;
  },

  getItem(key) {
    return lang[defaultLang][key] || '';
  }
};
