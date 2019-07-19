import { observable, computed } from 'mobx';
import Cookies from 'js-cookie';
import i18next from 'i18next';
import axios from 'axios';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import FontFaceObserver from 'fontfaceobserver';

import Directus from './lib/directus/Directus.js';



export default class Store {

  @observable pageTitle    = process.env.APP_TITLE;
  @observable lang         = 'en';
  @observable directus     = null;
  @observable loaded       = false;
  @observable iconsEnabled = false;
  @observable cites        = [];
  @observable d            = null;
  i18n                     = null;
  history                  = null;

  constructor(){
    this.loadLanguage();
    this.loaded = true;
    this.trackIconFont();
    this.cites = [
      {
        type: 'web',
        title: 'titanium - definition of titanium in English',
        url: 'https://en.oxforddictionaries.com/definition/titanium',
        created: '2017',
        authors: [
          {
            name: 'Oxford Dictionaries'
          }
        ]
      },
      {
        type: 'web',
        title: 'Atomic weights of the elements 2013 (IUPAC Technical Report)',
        url: 'https://en.wikipedia.org/wiki/Pure_and_Applied_Chemistry',
        created: '2016',
        authors: [
          {
            name: 'Meija, J.'
          }
        ]
      },
      {
        type: 'web',
        title: 'Emission spectra of TiH and TiD near 938 nm',
        url: 'http://bernath.uwaterloo.ca/media/257.pdf',
        created: '2003',
        authors: [
          {
            name: 'Andersson, N.'
          }
        ]
      },
      {
        type: 'web',
        title: 'CRC, Handbook of Chemistry and Physics',
        url: 'https://en.wikipedia.org/wiki/Special:BookSources/0-8493-0464-4',
        created: '1984',
        authors: [
          {
            name: 'Weast'
          },
          {
            name: 'Robert'
          }
        ]
      },
      {
        type: 'web',
        title: 'Pitting Corrosion of Titanium',
        url: 'http://www.dtic.mil/get-tr-doc/pdf?AD=ADA274980',
        created: '1994',
        authors: [
          {
            name: 'Casillas, N.'
          },
          {
            name: 'Charlebois, S.'
          },
          {
            name: 'Smyrl, W. H.'
          },
          {
            name: 'White, H. S.'
          },
        ]
      },
      {
        type: 'web',
        title: 'Effects of Metal Chemistry on Behavior of Titanium in Industrial Applications',
        url: 'https://books.google.com/books?id=0Adr4zleybgC&pg=PA112',
        created: '1981',
        authors: [
          {
            name: 'Forrest, A. L.'
          }
        ]
      },
      {
        type: 'web',
        title: 'Bioinorganic Chemistry of Titanium',
        url: 'https://doi.org/10.1021%2Fcr1002886',
        created: '2012',
        authors: [
          {
            name: 'Buettner, K. M.'
          },
          {
            name: 'Valentine, A. M.'
          }
        ]
      }
    ];
    this.directus = new Directus(process.env.API_BASE_PATH);
  }

  trackIconFont(){
    let iconFont = new FontFaceObserver('icomoon');
    iconFont.load().then(() => {
      this.iconsEnabled = true;
    });
  }

  /**
   * Returns the preffered language
   * If possible, from cookie. Otherwise from browser-environment or default.
   * @returns string
   */
  loadLanguage(){
    var lang = (!!Cookies.get('lang') && Cookies.get('lang')) ||
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage ||
      process.env.APP_DEFAULT_LANGUAGE_CODE;
    this.setLanguage(lang);
  }

  setLanguage(code){
    if(code.length > 2){
      code = code.substr(0, 2);
    }
    this.lang = code;
    i18next.changeLanguage(code);
    if(this.history){
      let nextUrl = '/' + code;
      let currentUrl = this.history.location.pathname;
      if(currentUrl.length > 3){
        nextUrl += currentUrl.substr(3);
      }
      this.history.push(nextUrl);
    }
  }

  setHistory(history){
    this.history = history;
  }

  copyToClipboard(data, message = 'tile:demo'){
    message = i18next.t(message);
    copy(data);
    toast(message);
  }

}