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
          <div class="layout-equal-spaced stretch">
            <ul class="site-details">
              <li>
                <a href="/">
                  <h3 className="icon">syndesi_big</h3>
                  <h3 className="title">Syndesi</h3>
                </a>
              </li>
              <li>
                <a class="active" href={"/" + s.lang + "/"}>
                  <p>Blog</p>
                </a>
              </li>
              <li>
                <a href={"/apps/"}>
                  <p>Apps</p>
                </a>
              </li>
            </ul>
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