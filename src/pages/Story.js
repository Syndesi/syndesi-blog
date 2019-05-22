import React from 'react';
import { withRouter } from "react-router";
import {inject, observer} from "mobx-react";


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
    console.log('Story is rendered');
    let s = this.state.story;
    let content = null;
    let posts = [];
    this.state.posts.forEach((p) => {
      console.log(p);
      posts.push(
        <div key={p.post_id}>
          <h4>{p.title}</h4>
          <p>{p.summary}</p>
        </div>
      );
    });
    if(s){
      content = (
          <div>
            <h1>{s.title}</h1>
            <p>{s.summary}</p>
            <p>created on <span>{s.created_on}</span>, updated on <span>{s.modified_on}</span></p>
            <img src={s.thumbnail.data.thumbnails[1].url} />
            {posts}
          </div>
      );
    }
    return (
      <div class="page">
        {content}
      </div>
    );
  }
}