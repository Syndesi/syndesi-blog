import React from 'react';
import {NavLink} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import Cookies from 'js-cookie';
import {Trans, withTranslation} from 'react-i18next';
import headerConfig from '../assets/header.json';
import Icon from './Icon';


@withTranslation('header')
@inject('store')
@observer
export default class Header extends React.Component {

  changeLang(lang){
    this.props.store.setLanguage(lang);
  }

  renderLinks() {
    let links = [];
    headerConfig.links.forEach((link, i) => {
      switch (link.id) {
      case 'blog':
        links.push(
          <li class="site-link" key={i}>
            <NavLink class='active' to={'/' + this.props.store.lang + '/'}>
              <p><Trans i18nKey={link.title}>
                {link.title}
              </Trans></p>
            </NavLink>
          </li>
        );
        break;
      default:
        links.push(
          <li class="site-link" key={i}>
            <NavLink to={link.url}>
              <p><Trans i18nKey={link.title}>
                {link.title}
              </Trans></p>
            </NavLink>
          </li>
        );
        break;
      }
    });
    return links;
  }


  render(){
    let s = this.props.store;
    return (
      <div class="header page">
        <div class="layout-equal-spaced stretch">
          <ul class="site-details">
            <li class="site-logo">
              <a href="/">
                <h3 class="icon"><Icon icon="syndesi_big" i18nText="header:iconLogo" /></h3>
                <h3 class="title"><Trans i18nKey="title">
                  {process.env.APP_NAME}
                </Trans></h3>
              </a>
            </li>
            {this.renderLinks()}
          </ul>
          <ul class="site-options">
            <li>
              <a href="#" onClick={(e) => {this.props.store.setLanguage('en');e.preventDefault();}}>EN</a>
            </li>
            <li>
              <a href="#" onClick={(e) => {this.props.store.setLanguage('de');e.preventDefault();}}>DE</a>
            </li>
            <li>
              <a href="#" onClick={(e) => {this.props.store.setLanguage('ar');e.preventDefault();}}>AR</a>
            </li>
            <li>
              <a href="#" onClick={(e) => {this.props.store.setLanguage('ko');e.preventDefault();}}>KO</a>
            </li>
            <li>
              <a href="#">
                <Icon icon="search" i18nText="header:iconSearch" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon icon="menu" i18nText="header:iconMenu" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {};