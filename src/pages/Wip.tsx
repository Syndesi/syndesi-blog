import React from 'react';
import {inject, observer} from 'mobx-react';
import demoPost from '../assets/demoPost.json';
import TileRenderer from '../components/TileRenderer';

@inject('store')
@observer
export default class Wip extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="page">
        <article>
          <TileRenderer content={demoPost} />
        </article>
      </div>
    );
  }
}