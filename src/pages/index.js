import React from 'react';
import { observer, inject } from 'mobx-react';
import axios from 'axios';

import Card from '../components/Card.js';
import FileDownloadTile from '../components/Tile/FileDownloadTile.js';
import MathTile from '../components/Tile/MathTile.js';
import YouTubeTile from '../components/Tile/YouTubeTile.js';
import TwitterTile from '../components/Tile/TwitterTile.js';
import GithubTile from '../components/Tile/GithubTile.js';
import PrismTile from '../components/Tile/PrismTile.js';
import GalleryTile from '../components/Tile/GalleryTile.js';
import QuoteTile from '../components/Tile/QuoteTile.js';

@inject("store")
@observer
export default class Index extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      post: []
    };
    this.getData();
  }

  getData(){
    var s = this.props.store;
    axios.get(s.apiBaseUrl + 'items/post_translation?fields=*.*&filter[language.code][eq]=' + s.lang + '&sort=-created_on&limit=3&offset=0')
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
    var s = this.props.store;
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
                continueUrl={'/' + s.lang + '/post/' + el.post_id.id + '-' + this.titleToUrl(el.title)}
          />
        </div>
      );
    });
    return (
      <div className="page">
        <div class="tile p-1">
          <h1>Hello world :)</h1>
          <p><b>Neodym</b> ist ein chemisches Element mit dem Elementsymbol Nd und der Ordnungszahl 60. Im Periodensystem steht es in der Gruppe der Lanthanoide und zählt damit auch zu den Metallen der Seltenen Erden. Die Elementbezeichnung leitet sich von den griechischen Worten νέος <i>neos</i> ‚neu‘ und δίδυμος <i>didymos</i> ‚Zwilling‘ ab. Das Metall wird in Form der Legierung Neodym-Eisen-Bor für starke Permanentmagnete verwendet.</p>
        </div>
        <div class="tile p-1">
          <p>{s.lang}</p>
        </div>
        <MathTile content="c = \pm\sqrt{a^2 + b^2}" />
        <FileDownloadTile src="6" filename="Mensa HS Mittweida.jpg" />
        <FileDownloadTile src="https://spacenews.com/wp-content/uploads/2018/02/20180206004RP-879x485.jpeg" filename="rocket.jpg" />
        <QuoteTile />
        <PrismTile />
        <GalleryTile />
        <YouTubeTile />
        <TwitterTile />
        <div>
          {cards}
        </div>
      </div>
    );
  }
}