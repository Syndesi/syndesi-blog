import React from 'react';
import Prism from 'prismjs';
import copy from 'copy-to-clipboard';
var HtmlToReactParser = require('html-to-react').Parser;

export default class PrismTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'prism';
    this.state = {
      project: ''
    };
  }

  copyToClipboard(e){
    copy(this.props.code);
  }

  render(){
    var language = this.props.language;
    var html = Prism.highlight(this.props.code, Prism.languages[language], language);
    var code = (new HtmlToReactParser()).parse(html);
    return (
      <div class={'tile tile-' + this.type}>
        <div class="row">
          <pre class="line-numbers"><code class={'language-' + language}>
            {code}
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