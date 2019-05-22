import React from 'react';


export default class Matrix extends React.Component {
  render(){
    return (
        <div class="matrix">
            {this.props.children}
        </div>
    );
  }
}