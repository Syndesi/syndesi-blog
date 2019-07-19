import React from 'react';
import PropTypes from 'prop-types';


export default class FormTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'form';
    this.state = {
      details:  ''
    };
  }

  render(){
    return (
      <div class={'tile tile-' + this.type}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfpXoXfXQ7EqQFQhwOTqToMG5KFi1ZlFkkI2c2UN4ehTadhog/viewform?embedded=true"
          frameBorder="0" marginHeight="0" marginWidth="0">Form wird geladen...</iframe>
      </div>
    );
  }
}

FormTile.defaultProps = {
  a: ''
};

FormTile.propTypes = {
  a: PropTypes.string
};