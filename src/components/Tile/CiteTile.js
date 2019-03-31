import React from 'react';
import {inject} from "mobx-react";

import WebCite from '../Cite/WebCite.js';


@inject("store")
export default class CiteTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'cite';
  }

  createCiteTile(data, citeNumber){
    var types = {
      "web": WebCite
    };
    var TagName = types[data.type] || WebCite;
    return (
      <div class="cite mb-1" id={"cite-" + citeNumber}>
        <p class="cite-number unselectable">{citeNumber}.</p>
        <TagName {...data} />
      </div>
    );
  }

  render(){
    var cites = [];
    for(var i = 0; i < this.props.store.cites.length; i++){
      cites.push(this.createCiteTile(this.props.store.cites[i], i + 1));
    }
    return (
      <div class={'tile tile-' + this.type} id="cite" >
        <div class="row px-1 cite-title">
          <h4>Sources</h4>
        </div>
        <div class="row p-1 cite-list">
          {cites}
        </div>
      </div>
    );
  }
}

CiteTile.defaultProps = {
  content: ''
};