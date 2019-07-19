import React from 'react';
import { withRouter } from 'react-router';
import Error from '../../components/Error';
import PropTypes from 'prop-types';


@withRouter
export default class E4xx extends React.Component {

  render(){
    let code = this.props.match.params.httpCode;
    let description = 'Bad Request';
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

E4xx.defaultProps = {
  descriptions: {
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Request Entity Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Requested range not satisfiable',
    417: 'Expectation Failed',
    420: 'Policy Not Fulfilled',
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    451: 'Unavailable For Legal Reasons',
    418: 'I’m a teapot',
    425: 'Unordered Collection',
    444: 'No Response',
    449: 'The request should be retried after doing the appropriate action',
    499: 'Client Closed Request'
  }
};

E4xx.propTypes = {
  descriptions: PropTypes.object
};