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
                url: ''
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
            tags.push(<li>{'#'+el}</li>);
        });
        return (
            <div class="post">
                <div className="container full-width postBackground">
                    <div class="backgroundImage" style={{backgroundImage: 'url("'+this.state.post.image+'")'}} />
                    <h1 class="title"><span>{this.state.post.title}</span></h1>
                    <h3 class="subtitle">{this.state.post.subtitle}</h3>
                    <ul class="tags">{tags}</ul>
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
    src: 'https://wp-assets.futurism.com/2018/06/drink-675x600.png',
    alt: 'Metaballs',
    title: 'This Study To Assess How Drinking Affects Our Health Is A Master Class In How To Do Science Poorly',
    text: 'Remember that massive clinical trial that was supposed to determine the health impacts of alcohol once and for all? Well, the National Institutes of Health decided Friday to shut it down.',
    href: 'https://futurism.com/study-how-drinking-affects-health-master-class-science/',
    link: 'YouTube'
};