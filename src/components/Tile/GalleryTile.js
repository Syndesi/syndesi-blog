import React from 'react';
import Slider from 'react-slick';
import { ContextMenu, SubMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import Error from '../Error.js';
import Loader from '../Loader.js';

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
    window.open(this.props.images[this.state.index].src, "_blank")
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
      var imageClass = el.animation || "";
      tiles.push(
        <div className="slide">
          <img className={"image " + imageClass} src={el.src} />
          <div class="text">
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
      <div class={'tile tile-' + this.type}>
        <ContextMenuTrigger id="some_unique_identifier">
          <div class="row">
            <div class="aspect-ratio-3-2">
              <div class="aspect-ratio-inside">
                <Slider {...settings}>
                  {tiles}
                </Slider>
              </div>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenu id="some_unique_identifier">
          <MenuItem onClick={() => {this.toggleFullscreen();}}>
            Fullscreen
          </MenuItem>
          <MenuItem divider />
          <SubMenu title='Size'>
            <MenuItem onClick={() => {this.setSize('original');}}>Original</MenuItem>
            <MenuItem onClick={() => {this.setSize('hd');}}>Full HD</MenuItem>
            <MenuItem onClick={() => {this.setSize('desktop');}}>Desktop</MenuItem>
            <MenuItem onClick={() => {this.setSize('sm');}}>Smartphone</MenuItem>
          </SubMenu>
          <SubMenu title='Quality'>
            <MenuItem onClick={() => {this.setQuality(1.00);}}>Original</MenuItem>
            <MenuItem onClick={() => {this.setQuality(0.75);}}>75%</MenuItem>
            <MenuItem onClick={() => {this.setQuality(0.50);}}>50%</MenuItem>
            <MenuItem onClick={() => {this.setQuality(0.25);}}>25%</MenuItem>
          </SubMenu>
          <MenuItem divider />
          <MenuItem onClick={() => {this.open();}}>
            Open image
          </MenuItem>

        </ContextMenu>
      </div>
    );
  }
}

GalleryTile.defaultProps = {
  images: [
    {
      src: "https://api.syndesi.dev/uploads/_/originals/satellite-1030780_1920.jpg",
      title: "Mensa Mittweida",
      description: "Das Gebäude beherbergt die Bibliothek, Mensa und ein Raketentriebwerk.",
      url: ""
    },
    {
      src: "https://api.syndesi.dev/uploads/_/originals/iceland-2111811_1920.jpg",
      title: "Park Baum",
      description: "Mittweida's Schwanenteich im Sommer.",
      url: "",
      animation: "zoom-out-center"
    },
    {
      src: "https://api.syndesi.dev/uploads/_/originals/cape-canaveral-693254_1920.jpg",
      title: "Teich",
      description: "Wunderschöne Wasserreflexionen an einem Sommertag.",
      url: "",
      animation: "zoom-out-top"
    },
    {
      src: "https://api.syndesi.dev/uploads/_/originals/aurora-borealis-1032517_1920.jpg",
      title: "Immergrün",
      description: "Diese in Mittweida oft zu findenden Büsche sind selbst im Winter grün.",
      url: "",
      animation: "zoom-out-right"
    }
  ],
  autoplay: false,
  autoplaySpeed: 20000,
  speed: 500,
  aspectRatio: "3-2",
  fullscreenAvailable: true
};