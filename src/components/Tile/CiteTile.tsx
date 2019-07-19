import React from 'react';
import {inject} from 'mobx-react';
import {Trans, withTranslation} from 'react-i18next';
import WebCite from '../Cite/WebCite';


@withTranslation('tile')
@inject('store')
export default class CiteTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'cite';
  }

  createCiteTile(data, citeNumber){
    var types = {
      'web': WebCite
    };
    var TagName = types[data.type] || WebCite;
    return (
      <div className="cite mb-1" id={'cite-' + citeNumber}>
        <p className="cite-number unselectable">{citeNumber}.</p>
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
      <div className={'tile tile-' + this.type} id="cite" >
        <div className="row px-1 cite-title">
          <h4><Trans i18nKey="citeTile.sources">
            Sources
          </Trans></h4>
        </div>
        <div className="row p-1 cite-list">
          {cites}
        </div>
      </div>
    );
  }
}

CiteTile.defaultProps = {
  content: ''
};