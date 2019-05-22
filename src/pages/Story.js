import React from 'react';
import { withRouter } from "react-router";
import {inject, observer} from "mobx-react";

import Loader from '../components/Loader.js';
import PostCard from '../components/Card/PostCard.js';
import Matrix from '../components/Matrix.js';
import ContainerTile from '../components/Tile/ContainerTile.js';

@inject("store")
@withRouter
@observer
export default class Post extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      story: null,
      posts: []
    };
  }

  async componentDidMount() {
    let p = this.props;
    let story = await p.store.directus.story.getStory(p.match.params.storyId, p.match.params.lang);
    let posts = await p.store.directus.story.getAllPosts(p.match.params.storyId, p.match.params.lang);
    this.setState({
      story: story,
      posts: posts
    });
  }

  render(){
    let s = this.state.story;
    let content = null;
    if(s){
      let posts = [];
      this.state.posts.forEach((p) => {
        //posts.push(
        //  <div key={p.post_id} class="mb-1">
        //    <h4>{p.title}</h4>
        //    <p>{p.summary}</p>
        //  </div>
        //);
        posts.push(
          <PostCard {...p} />
        );
      });
      let img = null;
      if(s.thumbnail){
        img = <img src={s.thumbnail.data.thumbnails[1].url} />;
      }
      content = (
        <div>
          <h1>{s.title}</h1>
          <p>{s.summary}</p>
          <p>created on <span>{s.created_on}</span>, updated on <span>{s.modified_on}</span></p>
          {img}
          <h3>Posts in this story:</h3>
          <ContainerTile>
            <Matrix>
              {posts}
            </Matrix>
          </ContainerTile>
        </div>
      );
    } else {
      content = <Loader />;
    }
    return (
      <div class="page">
        {content}
      </div>
    );
  }
}