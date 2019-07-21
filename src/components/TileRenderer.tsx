import React from 'react';

import GalleryTile from './Tile/GalleryTile';
import GithubTile from './Tile/GithubTile';
import ImageTile from './Tile/ImageTile';
import MathTile from './Tile/MathTile';
import PrismTile from './Tile/PrismTile';
import QuoteTile from './Tile/QuoteTile';
import TwitterTile from './Tile/TwitterTile';
import YouTubeTile from './Tile/YouTubeTile';
import MarkdownTile from './Tile/MarkdownTile';
import PropTypes from 'prop-types';

export default class TileRenderer extends React.Component {

  constructor(props){
    super(props);
  }

  renderTiles(){
    let tiles = [];
    if(this.props.content.version !== '1.0'){
      // WIP: implement alternative loaders
      return false;
    }
    if(!this.props.content.content){
      return false;
    }
    this.props.content.content.forEach((el, i) => {
      switch(el.type){
      case 'gallery-tile':
        tiles.push(<GalleryTile {...el.parameters} key={i} />);
        break;
      case 'github-tile':
        tiles.push(<GithubTile {...el.parameters} key={i} />);
        break;
      case 'image-tile':
        tiles.push(<ImageTile {...el.parameters} key={i} />);
        break;
      case 'math-tile':
        tiles.push(<MathTile {...el.parameters} key={i} />);
        break;
      case 'markdown-tile':
        tiles.push(<MarkdownTile {...el.parameters} key={i} />);
        break;
      case 'prism-tile':
        tiles.push(<PrismTile {...el.parameters} key={i} />);
        break;
      case 'quote-tile':
        tiles.push(<QuoteTile {...el.parameters} key={i} />);
        break;
      case 'twitter-tile':
        tiles.push(<TwitterTile {...el.parameters} key={i} />);
        break;
      case 'youtube-tile':
        tiles.push(<YouTubeTile {...el.parameters} key={i} />);
        break;
      default:
        tiles.push(<p key={i}>unknown tile {el.type}</p>);
        break;
      }
    });
    return tiles;
  }


  render(){
    return (
      <div class='tileRenderer'>
        {this.renderTiles()}
      </div>
    );
  }
}

TileRenderer.defaultProps = {
  content: ''
};

TileRenderer.propTypes = {
  content: PropTypes.object
};