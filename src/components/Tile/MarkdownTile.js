import React from 'react';
import Markdown from '../Markdown.js';

export default class MarkdownTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'markdown';
    this.state = {};
  }

  render(){
    return (
      <div class={'tile tile-' + this.type + ' p-1'}>
        <Markdown markdown={this.props.markdown} />
      </div>
    );
  }
}

MarkdownTile.defaultProps = {
  markdown: '# Hello world :)\n\nThis is a sample paragraph\n[with a link](https://www.google.de)'
};