import React from 'react';


export default class CiteLink extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <sup><a href={'#cite-' + this.props.citeNumber}>[{this.props.citeNumber}]</a></sup>
    );
  }
}

CiteLink.defaultProps = {
  citeNumber: 1
};