import React from 'react';
import Prism from 'prismjs';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
let HtmlToReactParser = require('html-to-react').Parser;
import Icon from '../Icon';


@inject('store')
export default class PrismTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'prism';
    this.state = {
      project: ''
    };
  }

  copyToClipboard(){
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
            <button class="btn" onClick={() => {this.copyToClipboard();}}><Icon icon="content_copy" i18nText="tile:prismTile.iconCopy" /></button>
          </div>
        </div>
      </div>
    );
  }
}

PrismTile.defaultProps = {
  code: '<!DOCTYPE html>\n<html>\n    <head>\n        <title>Title</title>\n    </head>\n    <body>\n        <h1 id="heading">Heading</h1>\n        <p class="class">This is an example paragraph.</p>\n    </body>\n</html>',
  language: 'markup'
};

PrismTile.propTypes = {
  code:     PropTypes.string,
  language: PropTypes.string
};