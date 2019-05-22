import React from 'react';


export default class PostCard extends React.Component {

  render(){
    var p = this.props;
    return (
      <div class="card">
        <div class="row">
          <div class="aspect-ratio aspect-ratio-3-2">
            <img class="aspect-ratio-inside" src={p.thumbnailUrl} />
          </div>
        </div>
        <div class="row">
          <h4>{p.title}</h4>
        </div>
        <div class="adaptive-height"></div>
      </div>
    );
  }
}

PostCard.defaultProps = {
  title:        'Title of the card',
  author:       null,
  created:      null,
  summary:      null,
  moreUrl:      null,
  thumbnailUrl: 'https://api.syndesi.dev/uploads/_/originals/satellite-1030780_1920.jpg'
};