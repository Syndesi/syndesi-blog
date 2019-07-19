import React from 'react';
import { withRouter } from 'react-router';


@withRouter
export default class PostEdit extends React.Component {

  render(){
    return (
      <div className="page">
        <div className="tile">
          <h4>Post Edit</h4>
        </div>
      </div>
    );
  }
}

PostEdit.defaultProps = {
};