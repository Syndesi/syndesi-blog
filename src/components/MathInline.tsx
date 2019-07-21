import React from 'react';
import katex from 'katex';
import PropTypes from 'prop-types';
var HtmlToReactParser = require('html-to-react').Parser;

export default class MathInline extends React.Component {

  render(){
    var content = null;
    try {
      var math = katex.renderToString(this.props.content, {displayMode: false});
      content = (new HtmlToReactParser()).parse(math);
    } catch(e) {
      content = (
        <span class="error">{e.toString()}</span>
      );
    }
    return (
      <span class="math-inline">{content}</span>
    );
  }
}

MathInline.defaultProps = {
  content: ''
};

MathInline.propTypes = {
  content: PropTypes.string
};