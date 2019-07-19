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
      <div className={'tile tile-' + this.type + ' p-1'}>
        <Markdown markdown={this.props.content} />
      </div>
    );
  }
}

MarkdownTile.defaultProps = {
  content: '# Hello world :)\n\nThis is a sample paragraph\nAs a metal, titanium is recognized for its high ratio [unit|temperature](300 K) [cite](1). It is a strong metal with low density that is quite ductile (especially in an oxygen-free environment), [unit|length](2.5 mi) [cite](2) lustrous, and metallic-white in color.[cite](3) The relatively high melting point makes it useful as a refractory metal. It is paramagnetic and has fairly low electrical and thermal conductivity.[cite](4)'
};