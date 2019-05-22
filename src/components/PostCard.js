import React from 'react';
import Card from "./Card";


export default class PostCard extends React.Component {

  render(){
    var p = this.props;
    return (
      <div class="card">
        <div class="row">
          <h4>{p.title}</h4>
        </div>
        {post}
      </div>
    );
  }
}

PostCard.defaultProps = {
  title:        null,
  author:       null,
  created:      null,
  summary:      null,
  moreUrl:      null,
  thumbnailUrl: null
};