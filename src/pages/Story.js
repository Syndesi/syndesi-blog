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
      data: null,
      posts: []
    };
  }

  async componentDidMount() {
    let p = this.props;
    let data = await p.store.directus.story.getStory(p.match.params.storyId, p.match.params.lang);
    //let posts = await p.store.directus.post.getPostFromStory(p.match.params.storyId, p.match.params.lang);
    this.setState({
      data: data
    });
  }

  render(){
    console.log('Story is rendered');
    let d = this.state.data;
    let content = null;
    if(d){
      content = (
          <div>
            <h1>{d.title}</h1>
            <p>{d.summary}</p>
            <p>created on <span>{d.created_on}</span>, updated on <span>{d.modified_on}</span></p>
            <img src={d.thumbnail.data.thumbnails[1].url} />
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