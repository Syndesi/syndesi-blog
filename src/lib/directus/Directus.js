import axios from "axios";
import Cookies from "js-cookie";

import Auth from "./Auth.js";
import Post from "./Post.js";
import Story from "./Story.js";

export default class Directus {

  baseUrl = null;
  token   = null;
  axios   = null;

  constructor(baseUrl){
    this.baseUrl = baseUrl;
    this.axios   = axios.create();
    this.auth    = new Auth(this);
    this.post    = new Post(this);
    this.story   = new Story(this);
  }

  destroy(){
    this.auth.destroy();
  }

  sterilizeData(){
    this.setToken(null);
  }

  setToken(token){
    this.token = token;
    Cookies.set(this.baseUrl + '-token', token);
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

