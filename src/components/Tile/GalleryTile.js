import React from 'react';
import Slider from "react-slick";

export default class GalleryTile extends React.Component {

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
      tiles.push(
        <div className="slide">
          <img className="image" src={el.src} />
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
      src: "http://localhost/directus_test/public/uploads/_/originals/IMG_8640-min.jpg",
      title: "Mensa Mittweida",
      description: "Das Gebäude beherbergt die Bibliothek, Mensa und ein Raketentriebwerk.",
      url: ""
    },
    {
      src: "http://localhost/directus_test/public/uploads/_/originals/IMG_8547-min.jpg",
      title: "Park Baum",
      description: "Mittweida's Schwanenteich im Sommer.",
      url: ""
    },
    {
      src: "http://localhost/directus_test/public/uploads/_/originals/IMG_8555-min.jpg",
      title: "Teich",
      description: "Wunderschöne Wasserreflexionen an einem Sommertag.",
      url: ""
    },
    {
      src: "http://localhost/directus_test/public/uploads/_/originals/IMG_8615-min.jpg",
      title: "Immergrün",
      description: "Diese in Mittweida oft zu findenden Büsche sind selbst im Winter grün.",
      url: ""
    }
  ],
  autoplay: true,
  aspectRatio: "3-2",
  fullscreenAvailable: true
};