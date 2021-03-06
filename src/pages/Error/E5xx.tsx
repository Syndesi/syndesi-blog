import React from 'react';
import { withRouter } from 'react-router';
import Error from '../../components/Error';
import PropTypes from 'prop-types';


@withRouter
export default class E5xx extends React.Component {

  render(){
    let code = this.props.match.params.httpCode;
    let description = 'Internal Server Error';
    if(code in this.props.descriptions){
      description = this.props.descriptions[code];
    }
    return (
      <div class="page">
        <div class="tile">
          <Error code={code} description={description} />
        </div>
      </div>
    );
  }
}

E5xx.defaultProps = {
  descriptions: {
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version not supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    509: 'Bandwidth Limit Exceeded',
    510: 'Not Extended',
    511: 'Network Authentication Required'
  }
};

E5xx.propTypes = {
  descriptions: PropTypes.object
};