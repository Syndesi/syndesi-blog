import React from 'react';
import {inject, observer} from "mobx-react";
import Cookies from "js-cookie";


@inject("store")
@observer
export default class Header extends React.Component {

  changeLang(lang){
    Cookies.set("lang", lang);
    this.props.store.loadLanguage();
  }

  render(){
    var s = this.props.store;
    return (
        <div class="header page">
          <div class="layout-equal-spaced">
            <div class="site-details">
              <h3 class="icon">syndesi_big</h3>
              <h3 class="title">Syndesi</h3>
              <ul class="navigation">
                <li><a href={"/" + s.lang + "/"}>Blog</a></li>
                <li><a href={"/apps/"}>Apps</a></li>
              </ul>
            </div>
            <div>
              <button onClick={() => {this.changeLang("en");}}>EN</button>
              <button onClick={() => {this.changeLang("de");}}>DE</button>
              <button onClick={() => {this.changeLang("no");}}>NO</button>
            </div>
          </div>
        </div>
    );
  }
}

Header.defaultProps = {};