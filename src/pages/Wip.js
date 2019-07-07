import React from 'react';
import {inject, observer} from "mobx-react";
import demoPost from '../assets/demoPost.json';
import TileRenderer from '../components/TileRenderer.js'

@inject("store")
@observer
export default class Wip extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    console.log(demoPost);
    return (
      <div class="page">
        <TileRenderer content={demoPost} />
      </div>
    );
  }
}