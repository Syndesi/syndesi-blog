import React from 'react';


export default class ContainerTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'container';
  }

  render(){
    return (
      <div class={'tile tile-' + this.type + ' tile-transparent tile-overflow'}>
        {this.props.children}
      </div>
    );
  }
}