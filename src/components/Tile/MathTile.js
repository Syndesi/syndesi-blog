import React from 'react';
import katex from 'katex';
var HtmlToReactParser = require('html-to-react').Parser;

export default class MathTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'math';
  }

  createKatexString(){

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
      <div class={'tile mb-1 tile-' + this.type}>
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