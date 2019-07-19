import moment from 'moment';
import React from 'react';


export default class CommentTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'comment';
    this.state = {
      details:  ''
    };
  }

  renderComment(comment, level){
    let comments = [];
    for(var i = 0; i < comment.comments.length; i++){
      comments.push(this.renderComment(comment.comments[i]), level + 1);
    }
    let leftPadding = ' pl-2';
    if(level == 0){
      leftPadding = ' pl-1';
    }
    return <p>abc</p>;
    return (
      <div className={'row comment pt-1' + leftPadding}>
        <p>{comment.account.name}</p>
        <p>{comment.content}</p>
        {comments}
      </div>
    );
  }

  render(){
    let comments = [];
    for(var i = 0; i < this.props.comments.length; i++){
      comments.push(this.renderComment(this.props.comments[i]), 0);
    }
    console.log(comments);
    return (
      <div className={'tile tile-' + this.type + ' pb-1'}>
        {comments}
      </div>
    );
  }
}

CommentTile.defaultProps = {
  comments: [
    {
      id: 3,
      title: 'some title',
      content: 'some content',
      account: {
        id: 123,
        name: 'name 1',
        profileImage: 'https://api.syndesi.dev/uploads/_/originals/22.jpg'
      },
      comments: []
    },
    {
      id: 3,
      title: 'some title',
      content: 'some content',
      account: {
        id: 123,
        name: 'name 2',
        profileImage: 'https://api.syndesi.dev/uploads/_/originals/22.jpg'
      },
      comments: []
    },
    {
      id: 3,
      title: 'some title',
      content: 'some content',
      account: {
        id: 123,
        name: 'name 3',
        profileImage: 'https://api.syndesi.dev/uploads/_/originals/22.jpg'
      },
      comments: [
        {
          id: 3,
          title: 'some title',
          content: 'some content',
          account: {
            id: 123,
            name: 'name 4',
            profileImage: 'https://api.syndesi.dev/uploads/_/originals/22.jpg'
          },
          comments: []
        },
        {
          id: 3,
          title: 'some title',
          content: 'some content',
          account: {
            id: 123,
            name: 'name 5',
            profileImage: 'https://api.syndesi.dev/uploads/_/originals/22.jpg'
          },
          comments: [
            {
              id: 3,
              title: 'some title',
              content: 'some content',
              account: {
                id: 123,
                name: 'name 6',
                profileImage: 'https://api.syndesi.dev/uploads/_/originals/22.jpg'
              },
              comments: []
            }
          ]
        }
      ]
    }
  ]
};