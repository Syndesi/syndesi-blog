import React from 'react';
import { withRouter } from "react-router";


@withRouter
export default class Apps extends React.Component {

  render(){
    return (
      <div class="page">
        <div class="tile p-1">
          <h1>Apps</h1>
          <p>WIP</p>
        </div>
      </div>
    );
  }
}

Apps.defaultProps = {
  descriptions: {
  }
};