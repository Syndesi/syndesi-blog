import React from 'react';

export default class GithubTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'github';
  }

  render(){
    return (
        <div class={'card mb-1 tile-' + this.type}>
          <div class="splash">
            <p>Github tile</p>
          </div>
        </div>
    );
  }
}

GithubTile.defaultProps = {
  src:            "80AFso-l1Eg"
};