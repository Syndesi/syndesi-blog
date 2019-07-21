import React from 'react';
import PostCard from './Card/PostCard';


export default class Matrix extends React.Component {
  render(){
    let p = this.props;
    return (
      <div {...p} class={'matrix ' + p.className}>
        {p.children}
      </div>
    );
  }
}

Matrix.defaultProps = {
  className: ''
};