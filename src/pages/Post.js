import React from 'react';
import axios from 'axios';


export default class Post extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      post: {
        title: 'Hello world',
        content: 'Some content here... :)',
        tags: [],
        image: '',
        subtitle: '',
        url: '',
        authors: []
      }
    };
    this.getData();
  }

  getData(){
    var url = '';
    var id = this.props.match.params.id;
    switch(this.props.match.params.story){
      case 'futurism':
        url = 'https://raw.githubusercontent.com/Syndesi/demo/master/news/futurism.json';
        break;
      case 'scmedia':
        url = 'https://raw.githubusercontent.com/Syndesi/demo/master/news/scmedia.json';
        break;
      default:
        return false;
    }
    axios.get(url)
    .then((res) => {
      document.title = res.data[id].title;
      this.setState({
        post: res.data[id]
      });
    });
  }

  render(){
    var paragraphs = [];
    this.state.post.content.split("\n").forEach((el, i) => {
      paragraphs.push(<p>{el}</p>);
    });
    var tags = [];
    this.state.post.tags.forEach((el, i) => {
      tags.push(<span><h3><a href="#">{'#'+el}</a></h3></span>);
    });
    var preTitle = [<span>{this.state.post.posted}</span>];
    this.state.post.authors.forEach((el, i) => {
      preTitle.push(<span><a href={el.url}>{el.name}</a></span>);
    });
    var subTitle = null;
    if(this.state.post.subtitle){
      subTitle = <h2 class="subtitle"><span>{this.state.post.subtitle}</span></h2>;
    }
    return (
      <div class="post">
        <div className="container full-width heroImage">
          <div class="backgroundImage" style={{backgroundImage: 'url("'+this.state.post.image+'")'}} />
          <div class="bottom">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-sm-12 col-md-9">
                  <h3 class="preTitle">{preTitle}</h3>
                  <h1 class="title"><span>{this.state.post.title}</span></h1>
                  {subTitle}
                  <h3 class="tags">{tags}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="row justify-content-center">
            <div class="col-sm-12 col-md-9 bg-white">
              {paragraphs}
              <a class="btn" href={this.state.post.url}>original post</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.defaultProps = {
  src:   'https://wp-assets.futurism.com/2018/06/drink-675x600.png',
  alt:   'Metaballs',
  title: 'This Study To Assess How Drinking Affects Our Health Is A Master Class In How To Do Science Poorly',
  text:  'Remember that massive clinical trial that was supposed to determine the health impacts of alcohol once and for all? Well, the National Institutes of Health decided Friday to shut it down.',
  href:  'https://futurism.com/study-how-drinking-affects-health-master-class-science/',
  link:  'YouTube'
};