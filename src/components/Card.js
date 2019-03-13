import React from 'react';
import moment from 'moment';
import ImageLuminosity from '../lib/ImageLuminosity.js';

export default class Card extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      thumbnailBrightness: 0
    };
    //this.checkThumbnailBrightness();
  }

  checkThumbnailBrightness(){
    if(!this.props.thumbnailUrl){
      return true;
    }
    var self = this;
    var il = new ImageLuminosity();
    il.luminosity(this.props.thumbnailUrl, (res) => {
      // https://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color
      var brightness = (0.2126*res.r + 0.7152*res.g + 0.0722*res.b) / 256;
      self.setState({
        thumbnailBrightness: brightness
      });
    }, {
       sx: 0.5,
       sy: 0.5,
       sWidth: 0.5,
       sHeight: 0.5
    });
  }

  render(){
    var p = this.props;
    var thumbnail = '';
    var alt = '';
    if(p.thumbnailAlt){
      alt = p.thumbnailAlt;
    }
    if(p.thumbnailUrl){
      thumbnail = <img class="image-splash" src={p.thumbnailUrl} alt={alt} />;
    }
    var numberClass = 'light';
    if(this.state.thumbnailBrightness >= 0.6){
      numberClass = 'dark';
    }
    var date = '';
    if(p.date){
      var d = moment(p.date);
      date = d.format('DD.MM.YYYY');
    }
    return (
      <div class="card mb-1">
        <div class="splash">
          <div class="aspect-ratio-3-2">
            <div class="aspect-ratio-inside">
              {thumbnail}
              <p class={"post-number unselectable " + numberClass}>{p.number}</p>
            </div>
          </div>
        </div>
        <div class="pb-0">
          <h4>{p.title}</h4>
        </div>
        <div class="pb-0 pt-0 space-evenly">
          <p class="detail">by <a class="detail" href={p.authorUrl}>{p.author}</a></p>
          <p class="detail">{date}</p>
        </div>
        <div class="pb-0">
          <p>{p.summary}</p>
        </div>
        <div class="adaptive-height"></div>
        <div>
          <a class="text-secondary" href={p.continueUrl}>continue reading →</a>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  thumbnailUrl: null, // https://picsum.photos/300/200/?random
  thumbnailAlt: null,
  number: 1,
  title: '',
  author: '',
  authorUrl: '',
  date: '',
  summary: '',
  continueUrl: ''
};