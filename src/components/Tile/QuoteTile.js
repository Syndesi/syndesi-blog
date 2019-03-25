import React from 'react';

export default class QuoteTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'quote';
  }

  render(){
    return (
        <div class={'tile tile-' + this.type}>
          <p className="icon quote_start unselectable">quote_start</p>
          <p className="icon quote_end unselectable">quote_end</p>
          <div class="row">
            <p class="quote mt-1">{this.props.quote}</p>
            <p class="author my-1"><a href={this.props.authorUrl} >{this.props.author}</a></p>
          </div>
        </div>
    );
  }
}

QuoteTile.defaultProps = {
  quote: 'I believe alien life is quite common in the universe, although intelligent life is less so. Some say it has yet to appear on planet Earth.',
  author: 'Stephen Hawking',
  authorUrl: ''
};