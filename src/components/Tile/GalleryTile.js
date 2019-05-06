import React from 'react';
import Slider from "react-slick";

export default class GalleryTile extends React.Component {

  // https://help.github.com/en/articles/github-terms-of-service#5-license-grant-to-other-users

  constructor(props){
    super(props);
    this.type = 'gallery';
    this.state = {
      project: ''
    };
  }

  render(){
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    var tiles = [];
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
        <div class="row">
          <div className="aspect-ratio-3-2">
            <div className="aspect-ratio-inside">
              <Slider {...settings}>
                {tiles}
              </Slider>
            </div>
          </div>
        </div>
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
  autoplay: true,
  aspectRatio: "3-2",
  fullscreenAvailable: true
};