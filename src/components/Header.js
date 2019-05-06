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
              <li class="site-logo">
                <a href="/">
                  <h3 class="icon">syndesi_big</h3>
                  <h3 class="title">Syndesi</h3>
                </a>
              </li>
              <li class="site-link">
                <a class="active" href={"/" + s.lang + "/"}>
                  <p>Blog</p>
                </a>
              </li>
              <li class="site-link">
                <a href={"/apps/"}>
                  <p>Apps</p>
                </a>
              </li>
            </ul>
            <ul class="site-options">
              <li>
                <a href="#">
                  <p className="icon">search</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="icon">menu</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

Header.defaultProps = {};