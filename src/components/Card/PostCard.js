import React from 'react';
import moment from 'moment';
import {NavLink} from 'react-router-dom';
import {inject, observer} from "mobx-react";


@inject("store")
@observer
export default class PostCard extends React.Component {

  render(){
    let p = this.props;
    let s = this.props.store;
    let created = moment(p.created_on).format('DD.MM.YYYY');
    let author = null;
    if(p.created_by){
      author = (
        <p class="detail">
          by <NavLink className="detail" to={"/" + s.lang + "/author/" + p.created_by.id + "-" + p.created_by.last_name}>{p.created_by.last_name}</NavLink>
        </p>
      );
    }
    return (
      <div class="card">
        <div class="row">
          <div class="aspect-ratio aspect-ratio-3-2">
            <img class="aspect-ratio-inside" src={p.thumbnail.data.thumbnails[1].url} />
          </div>
        </div>
        <div class="row px-1 pt-1">
          <h4>{p.title}</h4>
        </div>
        <div class="row px-1 pb-1 layout-equal-spaced">
          {author}
          <p class="detail">{'created on ' + created}</p>
        </div>
        <div class="rpw px-1 pb-1">
          <p>{p.summary} <a href={p.moreUrl}>more</a></p>
        </div>
        <div class="adaptive-height"></div>
      </div>
    );
  }
}

PostCard.defaultProps = {
  title:        'Title of the card',
  author:       null,
  authorUrl:    null,
  created_on:   null,
  modified_on:  null,
  summary:      null,
  moreUrl:      null,
  thumbnailUrl: 'https://api.syndesi.dev/uploads/_/originals/satellite-1030780_1920.jpg'
};