import React from 'react';
import axios from 'axios';

import Carousel from '../components/Carousel.js';
import Card from '../components/Card.js';

export default class Index extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            futurism: [],
            scmedia: []
        };
        this.getData();
    }

    getData(){
        axios.get('https://raw.githubusercontent.com/Syndesi/demo/master/news/futurism.json')
        .then((res) => {
            this.setState({
                futurism: res.data
            });
        });
        axios.get('https://raw.githubusercontent.com/Syndesi/demo/master/news/scmedia.json')
        .then((res) => {
            this.setState({
                scmedia: res.data
            });
        });
    }

    render(){
        var cards_futurism = [];
        this.state.futurism.forEach((el) => {
            cards_futurism.push(<Card src={el.image}
                            title={el.title}
                            content={el.content.split("\n")[0]}
                      />);
        });
        var cards_scmedia = [];
        this.state.scmedia.forEach((el) => {
            cards_scmedia.push(<Card src={el.image}
                            title={el.title}
                            content={el.content.split("\n")[0]}
                      />);
        });

        return (
            <div className="container">
                <h1>Futurism</h1>
                <Carousel>{cards_futurism}</Carousel>
                <h1>SCMedia</h1>
                <Carousel>{cards_scmedia}</Carousel>
            </div>
        );
    }
}