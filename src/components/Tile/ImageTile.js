import React from 'react';
import { ContextMenu, SubMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import {Trans, withTranslation} from 'react-i18next';
import {UID} from 'react-uid';
import {inject} from 'mobx-react';
import i18next from 'i18next';
import PropTypes from 'prop-types';

@withTranslation('tile')
@inject('store')
export default class ImageTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'image';
    this.state = {
      fullscreen: false
    };
  }

  setSize(size){
    console.log('set size: ' + size);
  }

  setQuality(quality){
    console.log('set quality: ' + quality);
  }

  toggleFullscreen(){
    this.setState({
      fullscreen: !this.state.fullscreen
    });
  }

  copyImageUrl(){
    this.props.store.copyToClipboard(this.props.src, 'tile:imageTile.menu.copyImageUrlToast');
  }

  openImage(){
    window.open(this.props.src, '_blank');
  }

  renderNormalImage(){
    let p = this.props;
    return (
      <div class="row">
        <div class="aspect-ratio aspect-ratio-3-2">
          <div class="aspect-ratio-inside">
            <img class="image" src={p.src}/>
            <div class="text">
              {p.title && (
                <div class="row">
                  <h4>{p.title}</h4>
                </div>
              )}
              {p.description && (
                <div class="row">
                  <p>{p.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderFullscreenImage(){
    let p = this.props;
    return (
      <div class="row">
        <img class="image" src={p.src}/>
        <ul class="iconlist">
          <li class="icon" onClick={() => {this.toggleFullscreen();}}>
            close
          </li>
        </ul>
        <div class="text">
          {p.title && (
            <div class="row">
              <h4>{p.title}</h4>
            </div>
          )}
          {p.description && (
            <div class="row">
              <p>{p.description}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  renderContextMenu(id){
    return (
      <ContextMenu id={id}>
        <MenuItem onClick={() => {this.toggleFullscreen();}}>
          <Trans i18nKey="imageTile.menu.fullscreen">Fullscreen</Trans>
        </MenuItem>
        <MenuItem divider />
        <SubMenu title={i18next.t('tile:imageTile.menu.size.size')}>
          <MenuItem onClick={() => {this.setSize('original');}}><Trans i18nKey="imageTile.menu.size.original">Original</Trans></MenuItem>
          <MenuItem onClick={() => {this.setSize('hd');}}><Trans i18nKey="imageTile.menu.size.fullHd">Full HD</Trans></MenuItem>
          <MenuItem onClick={() => {this.setSize('desktop');}}><Trans i18nKey="imageTile.menu.size.desktop">Desktop</Trans></MenuItem>
          <MenuItem onClick={() => {this.setSize('sm');}}><Trans i18nKey="imageTile.menu.size.smartphone">Smartphone</Trans></MenuItem>
        </SubMenu>
        <SubMenu title={i18next.t('tile:imageTile.menu.quality.quality')}>
          <MenuItem onClick={() => {this.setQuality(1.00);}}><Trans i18nKey="imageTile.menu.quality.original">Original</Trans></MenuItem>
          <MenuItem onClick={() => {this.setQuality(0.75);}}><Trans i18nKey="imageTile.menu.quality.number">{{percentage: '75'}} %</Trans></MenuItem>
          <MenuItem onClick={() => {this.setQuality(0.50);}}><Trans i18nKey="imageTile.menu.quality.number">{{percentage: '50'}} %</Trans></MenuItem>
          <MenuItem onClick={() => {this.setQuality(0.25);}}><Trans i18nKey="imageTile.menu.quality.number">{{percentage: '25'}} %</Trans></MenuItem>
        </SubMenu>
        <MenuItem divider />
        <MenuItem onClick={() => {this.copyImageUrl();}}>
          <Trans i18nKey="imageTile.menu.copyImageUrl">Copy image URL</Trans>
        </MenuItem>
        <MenuItem onClick={() => {this.openImage();}}>
          <Trans i18nKey="imageTile.menu.openImage">Open image</Trans>
        </MenuItem>
      </ContextMenu>
    );
  }

  render(){
    let fullscreenClass = '';
    let content = null;
    if(!this.state.fullscreen){
      content = this.renderNormalImage();
    } else {
      fullscreenClass = ' fullscreen';
      content = this.renderFullscreenImage();
    }
    return (
      <UID>
        {id => (
          <div class={'tile tile-' + this.type + fullscreenClass}>
            <ContextMenuTrigger id={id}>
              {content}
            </ContextMenuTrigger>
            {this.renderContextMenu(id)}
          </div>
        )}
      </UID>
    );
  }
}

ImageTile.defaultProps = {
  src:         'https://api.syndesi.dev/uploads/_/originals/aurora-borealis-1032517_1920.jpg',
  title:       'Immergrün',
  description: 'Diese in Mittweida oft zu findenden Büsche sind selbst im Winter grün.',
  url:         '',
  animation:   'zoom-out-right'
};

ImageTile.propTypes = {
  src:         PropTypes.string,
  title:       PropTypes.string,
  description: PropTypes.string,
  url:         PropTypes.string,
  animation:   PropTypes.string,
};