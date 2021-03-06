import axios from 'axios';
import Cookies from 'js-cookie';

import Auth from './Auth';
import Post from './Post';
import Story from './Story';

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
    if(this.token == null){
      // no valid token -> anonymous requests etc.
      console.log('anonymous token');
      Cookies.remove(this.baseUrl + '-token');
      this.axios = axios.create();
    } else {
      // valid token does exist
      console.log('valid token');
      Cookies.set(this.baseUrl + '-token', token);
      this.axios = axios.create({
        headers: {
          'Authorization': ' Bearer '+token
        }
      });
    }
  }

}

