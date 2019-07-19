import React from 'react';
import Slider from 'react-slick';
import { ContextMenu, SubMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import {Trans, withTranslation} from 'react-i18next';
import Error from '../Error';
import Loader from '../Loader';

@withTranslation('tile')
export default class GalleryTile extends React.Component {

  // https://help.github.com/en/articles/github-terms-of-service#5-license-grant-to-other-users

  constructor(props){
    super(props);
    this.type = 'gallery';
    this.state = {
      project: '',
      index: 0 // the current index of the slider
    };
  }

  setSize(size){
    console.log('set size: ' + size);
  }

  setQuality(quality){
    console.log('set quality: ' + quality);
  }

  toggleFullscreen(){
    console.log('toggle fullscreen');
  }

  open(){
    window.open(this.props.images[this.state.index].src, '_blank');
  }

  render(){
    let settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: this.props.autoplay,
      autoplaySpeed: this.props.autoplaySpeed,
      speed: this.props.speed,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (e) => {this.setState({index: e});}
    };
    let tiles = [];
    this.props.images.forEach((el, i) => {
      var imageClass = el.animation || '';
      tiles.push(
        <div className="slide">
          <img className={'image ' + imageClass} src={el.src} />
          <div className="text">
            <div className="row">
              <h4>{el.title}</h4>
            </div>
            <div className="row">
              <p>{el.description}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className={'tile tile-' + this.type}>
        <ContextMenuTrigger id="some_unique_identifier">
          <div className="row">
            <div className="aspect-ratio aspect-ratio-3-2">
              <div className="aspect-ratio-inside">
                <Slider {...settings}>
                  {tiles}
                </Slider>
              </div>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenu id="some_unique_identifier">
          <MenuItem onClick={() => {this.toggleFullscreen();}}>
            <Trans i18nKey="imageTile.menu.fullscreen">Fullscreen</Trans>
          </MenuItem>
          <MenuItem divider />
          <SubMenu title={this.props.t('demo')}>
            <MenuItem onClick={() => {this.setSize('original');}}><Trans i18nKey="imageTile.menu.size.original">Original</Trans></MenuItem>
            <MenuItem onClick={() => {this.setSize('hd');}}><Trans i18nKey="imageTile.menu.size.fullHd">Full HD</Trans></MenuItem>
            <MenuItem onClick={() => {this.setSize('desktop');}}><Trans i18nKey="imageTile.menu.size.desktop">Desktop</Trans></MenuItem>
            <MenuItem onClick={() => {this.setSize('sm');}}><Trans i18nKey="imageTile.menu.size.smartphone">Smartphone</Trans></MenuItem>
          </SubMenu>
          <SubMenu title='Quality'>
            <MenuItem onClick={() => {this.setQuality(1.00);}}><Trans i18nKey="imageTile.menu.quality.original">Original</Trans></MenuItem>
            <MenuItem onClick={() => {this.setQuality(0.75);}}><Trans i18nKey="imageTile.menu.quality.number">{{percentage: '75'}} %</Trans></MenuItem>
            <MenuItem onClick={() => {this.setQuality(0.50);}}><Trans i18nKey="imageTile.menu.quality.number">{{percentage: '50'}} %</Trans></MenuItem>
            <MenuItem onClick={() => {this.setQuality(0.25);}}><Trans i18nKey="imageTile.menu.quality.number">{{percentage: '25'}} %</Trans></MenuItem>
          </SubMenu>
          <MenuItem divider />
          <MenuItem onClick={() => {this.open();}}>
            <Trans i18nKey="imageTile.menu.openImage">Open image</Trans>
          </MenuItem>
        </ContextMenu>
      </div>
    );
  }
}

GalleryTile.defaultProps = {
  images: [
    {
      src: 'https://api.syndesi.dev/uploads/_/originals/satellite-1030780_1920.jpg',
      title: 'Mensa Mittweida',
      description: 'Das Gebäude beherbergt die Bibliothek, Mensa und ein Raketentriebwerk.',
      url: ''
    },
    {
      src: 'https://api.syndesi.dev/uploads/_/originals/iceland-2111811_1920.jpg',
      title: 'Park Baum',
      description: 'Mittweida\'s Schwanenteich im Sommer.',
      url: '',
      animation: 'zoom-out-center'
    },
    {
      src: 'https://api.syndesi.dev/uploads/_/originals/cape-canaveral-693254_1920.jpg',
      title: 'Teich',
      description: 'Wunderschöne Wasserreflexionen an einem Sommertag.',
      url: '',
      animation: 'zoom-out-top'
    },
    {
      src: 'https://api.syndesi.dev/uploads/_/originals/aurora-borealis-1032517_1920.jpg',
      title: 'Immergrün',
      description: 'Diese in Mittweida oft zu findenden Büsche sind selbst im Winter grün.',
      url: '',
      animation: 'zoom-out-right'
    }
  ],
  autoplay: false,
  autoplaySpeed: 20000,
  speed: 500,
  aspectRatio: '3-2',
  fullscreenAvailable: true
};