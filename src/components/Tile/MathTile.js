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
        <p className="error">{e.toString()}</p>
      );
    }
    return (
      <div className={'tile tile-' + this.type}>
        <div className="row p-1">
          {content}
        </div>
      </div>
    );
  }
}

MathTile.defaultProps = {
  content: ''
};