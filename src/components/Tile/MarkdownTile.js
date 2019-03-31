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
  markdown: '# Hello world :)\n\nThis is a sample paragraph\nAs a metal, titanium is recognized for its high strength-to-weight ratio.[cite](1) It is a strong metal with low density that is quite ductile (especially in an oxygen-free environment),[cite](2) lustrous, and metallic-white in color.[cite](3) The relatively high melting point (more than 1,650 °C or 3,000 °F) makes it useful as a refractory metal. It is paramagnetic and has fairly low electrical and thermal conductivity.[cite](4)'
};