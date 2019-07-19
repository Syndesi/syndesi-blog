import React from 'react';

export default class Button extends React.Component {

  render(){
    return (
      <button {...this.props} className={'btn '+this.props.className}>
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  className: ''
};