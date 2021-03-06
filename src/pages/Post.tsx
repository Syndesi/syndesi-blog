import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';


export default class Post extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: null,
      lang: 1,
      langCode: 'en'
    };
    this.getData();
  }

  getData(){
    axios.get('http://localhost/directus_test/public/_/items/post_translation?single=1&fields=*.*&filter[language.code][eq]=' + this.props.match.params.lang + '&filter[post_id][eq]=' + this.getPostId())
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          data: res.data.data
        });
      });
  }

  getPostId(){
    let id = this.props.match.params.postId;
    return id.substr(0, id.indexOf('-'));
  }

  render(){
    let d = this.state.data;
    let post = <p>loading post data...</p>;
    if(d){
      post = (
        <div className="card mb-1">
          <h1>{d.title}</h1>
          <p className="gray">{d.summary}</p>
          <ReactMarkdown source={d.content} />
        </div>
      );
    }
    return (
      <div className="page">
        {post}
      </div>
    );
  }
}