import React from 'react';

export default class GalleryTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'gallery';
    this.state = {
      project: ''
    };
  }

  render(){
    return (
      <div class={'tile tile-' + this.type}>
        <div class="row">
          <div className="aspect-ratio-3-2">
            <div className="aspect-ratio-inside">
              <p>Gallery</p>
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