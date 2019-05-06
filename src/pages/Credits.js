import React from 'react';
import MarkdownTile from '../components/Tile/MarkdownTile.js';


export default class Credits extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    var markdown = "# Credits\n\nDisclaimer: This page will be changed in the future.\n\nLuca Strahlendorff - A very good friend and helped with the development & testing of this website. And even though he had seen countless bugs, he still couldn't hack the server ;)";
    return (
      <div class="page">
        <MarkdownTile markdown={markdown} />
      </div>
    );
  }
}