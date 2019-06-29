import React from 'react';
import { withRouter } from "react-router";
import {inject, observer} from "mobx-react";
import { withTranslation, Trans } from 'react-i18next';

@inject("store")
@withRouter
@withTranslation('tile')
@observer
export default class Wip extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    console.log(this.props);
    let demo = "demo whatever?";
    let author = "AuthorName";
    return (
      <div class="page" style={{"padding-bottom": "800px"}}>
        <p>WIP, hello world :)</p>
        <p>{this.props.t('demo')}</p>
        <p>{this.props.t('github.author', {author:"author"})}</p>
        <hr />
        <p><Trans i18nKey="github.author">
          text davor <span>{{author}}</span> text danach
        </Trans></p>
        <p><Trans i18nKey="github.demo">
          nolang {{demo}} nolang
        </Trans></p>
      </div>
    );
  }
}