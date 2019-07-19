import { TwitterTweetEmbed } from 'react-twitter-embed';
import React from 'react';
import PropTypes from 'prop-types';

export default class TwitterTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'twitter';
  }

  render(){
    let twitter = null;
    switch(this.props.type){
    case 'timeline':
      break;
    case 'tweet':
      twitter = (
        <TwitterTweetEmbed
          tweetId={this.props.id}
          options={{
            width: 520     // basically max width
          }}
        />
      );
      break;
    case 'moment':
      break;
    case 'video':
      break;
    default:
      break;
    }
    return (
      <div class={'tile tile-' + this.type}>
        <div class="row">
          {twitter}
        </div>
      </div>
    );
  }
}


TwitterTile.defaultProps = {
  id:   '1104505103229153280',
  type: 'tweet'
};

TwitterTile.propTypes = {
  id:   PropTypes.string,
  type: PropTypes.string
};