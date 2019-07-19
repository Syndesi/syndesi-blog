import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React from 'react';

export default class TwitterTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'twitter';
  }

  render(){
    var twitter = null;
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
      <div className={'tile tile-' + this.type}>
        <div className="row">
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