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
    return (
      <div class={'tile tile-' + this.type}>
        <div class="row">
          <div className="aspect-ratio-3-2">
            <div className="aspect-ratio-inside">
              <Slider {...settings}>
                <div class="slide">
                  <img class="content" src="http://localhost/directus_test/public/uploads/_/originals/IMG_8640-min.jpg" />
                </div>
                <div class="slide">
                  <img className="content" src="http://localhost/directus_test/public/uploads/_/originals/IMG_8547-min.jpg"/>
                </div>
                <div class="slide">
                  <img className="content" src="http://localhost/directus_test/public/uploads/_/originals/IMG_8555-min.jpg"/>
                </div>
                <div class="slide">
                  <img className="content" src="http://localhost/directus_test/public/uploads/_/originals/IMG_8615-min.jpg"/>
                </div>
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
      src: "6",
      title: "demo title",
      description: "lorem ipsum",
      url: ""
    },
    {
      src: "7",
      title: "demo title",
      description: "lorem ipsum",
      url: ""
    },
    {
      src: "8",
      title: "demo title",
      description: "lorem ipsum",
      url: ""
    },
    {
      src: "10",
      title: "demo title",
      description: "lorem ipsum",
      url: ""
    }
  ],
  autoplay: true,
  aspectRatio: "3-2",
  fullscreenAvailable: true
};