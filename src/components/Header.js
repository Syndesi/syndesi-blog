import React from 'react';

export default class Header extends React.Component {

  render(){
    return (
        <div class="header">
          <h1>Syndesi Blog</h1>
          <p>search</p>
          <p>account</p>
        </div>
    );
  }
}

Header.defaultProps = {};