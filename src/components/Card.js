import React from 'react';

import Icon from './Icon.js';

export default class Card extends React.Component {

    render(){
        return (
            <div class="card">
                <div class="img">
                    <div style={{backgroundImage: 'url("'+this.props.src+'")'}} />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <a href={this.props.href} class="btn btn-primary floatingAction"><Icon>chevron_right</Icon></a>
                    <p class="card-text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

Card.defaultProps = {
    src: 'https://wp-assets.futurism.com/2018/06/drink-675x600.png',
    alt: 'Metaballs',
    title: 'This Study To Assess How Drinking Affects Our Health Is A Master Class In How To Do Science Poorly',
    text: 'Remember that massive clinical trial that was supposed to determine the health impacts of alcohol once and for all? Well, the National Institutes of Health decided Friday to shut it down.',
    href: 'https://futurism.com/study-how-drinking-affects-health-master-class-science/',
    link: 'YouTube'
};