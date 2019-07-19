import React from 'react';
import { withRouter } from 'react-router';
import Error from '../../components/Error';


@withRouter
export default class E404 extends React.Component {

  render(){
    return (
      <div class="page">
        <div class="tile">
          <Error code="404" description="Not found" />
        </div>
      </div>
    );
  }
}

E404.defaultProps = {
  descriptions: {
  }
};