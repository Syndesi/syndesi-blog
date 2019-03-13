import React from 'react';
import axios from 'axios';

import Card from '../components/Card.js';
import FileDownloadTile from '../components/Tile/FileDownloadTile.js';
import MathTile from '../components/Tile/MathTile.js';
import YouTubeTile from '../components/Tile/YouTubeTile.js';
import TwitterTile from '../components/Tile/TwitterTile.js';
import GithubTile from '../components/Tile/GithubTile.js';

export default class Index extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      post: [],
      lang: 1,
      langCode: this.props.match.params.lang || 'en'
    };
    this.getData();
  }

  getData(){
    axios.get('http://localhost/directus_test/public/_/items/post_translation?fields=*.*&filter[language.code][eq]=' + this.state.langCode + '&sort=-created_on&limit=3&offset=0')
    .then((res) => {
      this.setState({
        post: res.data.data
      });
    });
  }

  titleToUrl(str){
    // https://stackoverflow.com/questions/1983767/only-keep-a-z-0-9-and-remove-other-characters-from-string-using-javascript
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
  }

  render(){
    var cards = [];
    this.state.post.forEach((el, i) => {
      var thumbnailUrl = null;
      var thumbnailAlt = null;
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
        for(var j = 0; j < el.thumbnail.data.thumbnails.length; j++){
          if(el.thumbnail.data.thumbnails[j].dimension == "250x167"){
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
                continueUrl={'/' + this.state.langCode + '/post/' + el.post_id.id + '-' + this.titleToUrl(el.title)}
          />
        </div>
      );
    });
    return (
      <div className="page">
        <div class="tile p-1 mb-1">
          <h1>Hello world :)</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="tile p-1 mb-1">
          <p>Hello world :)</p>
        </div>
        <MathTile content="c = \pm\sqrt{a^2 + b^2}" />
        <FileDownloadTile src="6" filename="Mensa HS Mittweida.jpg" />
        <FileDownloadTile src="https://spacenews.com/wp-content/uploads/2018/02/20180206004RP-879x485.jpeg" filename="rocket.jpg" />
        <GithubTile src="facebook/react" />
        <YouTubeTile />
        <TwitterTile />
        <div>
          {cards}
        </div>
      </div>
    );
  }
}