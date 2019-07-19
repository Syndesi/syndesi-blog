import axios from 'axios';
import Cookies from 'js-cookie';

export default class Auth {

  d           = null;
  authChecker = null;
  onLogin     = null;
  onLogout    = null;
  onRefresh   = null;

  constructor(directus, checkInterval) {
    this.d = directus;
    this.refresh();
    this.authChecker = setInterval(() => {
      this.refresh();
    }, 1000 * 60 * 4); // run intervall all 4 min, token will expire after 5 min
  }

  destroy(){
    clearInterval(this.authChecker);
  }

  setOnLogin(c){
    this.onLogin = c;
  }

  setOnLogout(c){
    this.onLogout = c;
  }

  setOnRefresh(c){
    this.onRefresh = c;
  }

  async login(email, password){
    let d = this.d;
    let token = null;
    if(d.token != null){
      try {
        await this.logout();
      } catch (e) {
        // exit login-function if previous user cannot be reliably removed
        console.log(e);
        return false;
      }
    } else {
      try {
        let res = await axios.post(d.baseUrl + 'auth/authenticate', {
          email: email,
          password: password
        });
        token = res.data.data.token;
      } catch (e) {
        token = null;
      }
    }
    // update token
    d.setToken(token);
    if(typeof(this.onLogin) == 'function'){
      this.onLogin();
    }
  }

  async logout(){
    let d = this.d;
    d.sterilizeData();
    if(typeof(this.onLogout) == 'function'){
      this.onLogout();
    }
    return true;
  }

  async refresh(){
    let d = this.d;
    let token = null;
    if(d.token != null){
      // account already logged in
      token = d.token;
    } else {
      if(Cookies.get(d.baseUrl + '-token')){
        // token is stored in cookie
        token = Cookies.get(d.baseUrl + '-token');
      } else {
        // no token available
      }
    }
    if(token){
      // try to refresh token
      try {
        let res = await axios.post(d.baseUrl + 'auth/refresh', {
          token: token
        });
        token = res.data.data.token;
      } catch (e) {
        token = null;
      }
    }
    // update token
    d.setToken(token);
    if(typeof(this.onRefresh) == 'function'){
      this.onRefresh();
    }
  }

}