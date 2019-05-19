import axios from "axios";
import Cookies from "js-cookie";

export default class Auth {

  d           = null;
  authChecker = null;

  constructor(directus, checkInterval) {
    this.d = directus;
    this.refresh();
    this.authChecker = setInterval(() => {
      this.refresh();
    }, 1000 * 60 * 1); // run intervall all 10 min
  }

  destroy(){
    clearInterval(this.authChecker);
  }

  async login(email, password){
    let d = this.d;
    let token = null;
    if(d.token != null){
      console.login('need to logout before login s possible');
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
  }

  logout(){}

  async refresh(){
    console.log("refreshing token...");
    let d = this.d;
    let token = null;
    if(d.token != null){
      // account already logged in
      token = d.token;
    } else {
      if(!!Cookies.get(d.baseUrl + '-token')){
        // token is stored in cookie
        token = Cookies.get(d.baseUrl + '-token');
      } else {
        // no token available
      }
    }
    if(token != null){
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
    console.log("refresh complete");
  }

}