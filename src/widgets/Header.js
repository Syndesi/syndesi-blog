import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default class Header extends React.Component {

  render(){
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" class="navbar-brand">react-boilerplate</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav mr-auto">
            <NavLink to="/" exact className="nav-item nav-link" activeClassName="active">Index</NavLink>
            <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
          </div>
        </div>
      </nav>
    );
  }
}