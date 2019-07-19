import React from 'react';
import katex from 'katex';
import PropTypes from 'prop-types';
var HtmlToReactParser = require('html-to-react').Parser;

export default class MathTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'math';
  }

  render(){
    var content = null;
    try {
      var math = katex.renderToString(this.props.content, {displayMode: true});
      content = (new HtmlToReactParser()).parse(math);
    } catch(e) {
      content = (
        <p class="error">{e.toString()}</p>
      );
    }
    return (
      <div class={'tile tile-' + this.type}>
        <div class="row p-1">
          {content}
        </div>
      </div>
    );
  }
}

MathTile.defaultProps = {
  content: ''
};

MathTile.propTypes = {
  content: PropTypes.string
};