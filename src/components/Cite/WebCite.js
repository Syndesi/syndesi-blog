import moment from 'moment';
import React from 'react';


export default class WebCite extends React.Component {

  constructor(props){
    super(props);
    this.type = 'web';
    this.state = {};
  }

  render(){
    return (
      <p class={'cite cite-' + this.type}>
        WebCite
      </p>
    );
  }
}

WebCite.defaultProps = {
  src: null
};