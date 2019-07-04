import React from 'react';
import Prism from 'prismjs';
import {inject} from "mobx-react";
var HtmlToReactParser = require('html-to-react').Parser;


@inject("store")
export default class PrismTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'prism';
    this.state = {
      project: ''
    };
  }

  copyToClipboard(e){
    this.props.store.copyToClipboard(this.props.code, 'tile:prismTile.codeCopiedToast');
  }

  render(){
    let language = this.props.language;
    let html = Prism.highlight(this.props.code, Prism.languages[language], language);
    let codeContent = (new HtmlToReactParser()).parse(html);
    return (
      <div class={'tile tile-' + this.type}>
        <div class="row">
          <pre class={'line-numbers language-' + language}><code>
            {codeContent}
          </code></pre>
          <div class="buttongroup">
            <button class="btn icon" onClick={(e) => {this.copyToClipboard();}}>content_copy</button>
          </div>
        </div>
      </div>
    );
  }
}

PrismTile.defaultProps = {
  code: "<!DOCTYPE html>\n<html>\n    <head>\n        <title>Title</title>\n    </head>\n    <body>\n        <h1 id=\"heading\">Heading</h1>\n        <p class=\"class\">This is an example paragraph.</p>\n    </body>\n</html>",
  language: 'markup'
};