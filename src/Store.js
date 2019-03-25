import { observable, computed } from "mobx";
import Cookies from "js-cookie";

export default class Store {

  @observable lang = "en";
  @observable loggedIn = false;
  @observable account = null;
  @observable apiBaseUrl = "http://localhost/directus_test/public/_/";
  @observable loaded = false;

  constructor(){
    this.loadLanguage();
    this.loaded = true;
  }

  /**
   * Returns the preffered language
   * If possible, from cookie. Otherwise from browser-environment or default.
   * @returns string
   */
  loadLanguage(){
    var lang = (!!Cookies.get("lang") && Cookies.get("lang")) ||
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage ||
      "en";
    this.lang = lang;
  }

}