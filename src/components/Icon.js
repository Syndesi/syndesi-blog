import React from 'react';


export default class Icon extends React.Component {

    render(){
        return (
            <span class="icon">{this.props.children}</span>
        );
    }
}