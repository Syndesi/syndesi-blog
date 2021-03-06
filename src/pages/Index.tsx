import React from 'react';
import { observer, inject } from 'mobx-react';

import Card from '../components/Card';
import GithubTile from '../components/Tile/GithubTile';
import PrismTile from '../components/Tile/PrismTile';
import GalleryTile from '../components/Tile/GalleryTile';
import QuoteTile from '../components/Tile/QuoteTile';
import CiteTile from '../components/Tile/CiteTile';
import MarkdownTile from '../components/Tile/MarkdownTile';
import ImageTile from '../components/Tile/ImageTile';

import Error from '../components/Error';

@inject('store')
@observer
export default class Index extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      post: []
    };
  }

  titleToUrl(str){
    // https://stackoverflow.com/questions/1983767/only-keep-a-z-0-9-and-remove-other-characters-from-string-using-javascript
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
  }

  render(){
    let s = this.props.store;
    let cards = [];
    this.state.post.forEach((el) => {
      let thumbnailUrl = null;
      let thumbnailAlt = null;
      if(el.thumbnail){
        // use the most usefull description for the thumbnail
        if(el.thumbnail.title){
          thumbnailAlt = el.thumbnail.title;
        }
        if(el.thumbnail.description){
          thumbnailAlt = el.thumbnail.description;
        }
        // use the most usefull image src for the thumbnail
        // (use 250x167 or the default thumbnail size)
        thumbnailUrl = el.thumbnail.data.thumbnails[0].url;
        for(let j = 0; j < el.thumbnail.data.thumbnails.length; j++){
          if(el.thumbnail.data.thumbnails[j].dimension == '250x167'){
            thumbnailUrl = el.thumbnail.data.thumbnails[j].url;
            break;
          }
        }
      }
      cards.push(
        <div className="col">
          <Card title={el.title}
            summary={el.summary}
            number={el.post_id.id}
            thumbnailUrl={thumbnailUrl}
            thumbnailAlt={thumbnailAlt}
            date={el.created_on}
            author={el.created_by.last_name}
            authorUrl="#"
            continueUrl={'/' + s.lang + '/post/' + el.post_id.id + '-' + this.titleToUrl(el.title)}
          />
        </div>
      );
    });
    return (
      <div className="page">
        <article>
          <MarkdownTile />
          <QuoteTile />
          <PrismTile />
          <GithubTile src="facebook/react" />
          <GithubTile src="facebook/react/2" />
          <ImageTile />
          <ImageTile src="https://api.syndesi.dev/uploads/_/originals/img_0622.jpg" />
          <ImageTile src="https://api.syndesi.dev/uploads/_/originals/img_0264.jpg" />
          <div className="tile">
            <Error />
          </div>
          <GalleryTile />
          <CiteTile />
        </article>
      </div>
    );
  }
}