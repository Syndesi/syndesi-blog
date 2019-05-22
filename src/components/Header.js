import React from 'react';
import {NavLink} from 'react-router-dom';
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
                  <h3 class="title">{process.env.APP_NAME}</h3>
                </a>
              </li>
              <li class="site-link">
                <NavLink activeClassName='active' to={"/" + s.lang + "/"}>
                  <p>Blog</p>
                </NavLink>
              </li>
              <li class="site-link">
                <NavLink activeClassName='active' to="/apps/">
                  <p>Apps</p>
                </NavLink>
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