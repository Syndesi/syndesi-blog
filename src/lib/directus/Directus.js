import axios from "axios";
import Auth from "./Auth.js";

export default class Directus {

  baseUrl = null;
  token   = null;
  axios   = null;

  constructor(baseUrl){
    this.baseUrl = baseUrl;
    this.axios   = axios.create();
    this.auth    = new Auth(this);
  }

  destroy(){
    this.auth.destroy();
  }

  setToken(token){
    this.token = token;
    if(this.token == null){
      // no valid token -> anonymous requests etc.
      console.log("anonymous token");
      this.axios = axios.create();
    } else {
      // valid token does exist
      console.log("valid token");
      this.axios = axios.create({
        headers: {
          'Authorization': ' Bearer '+token
        }
      });
    }
  }

}

