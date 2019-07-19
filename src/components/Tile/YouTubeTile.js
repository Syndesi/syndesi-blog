import React from 'react';

export default class YouTubeTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'youtube';
  }

  render(){
    var {src, ...playerOptions} = this.props;
    var options = [];
    for (var i of Object.keys(playerOptions)){
      if(playerOptions[i] == null){
        continue;
      }
      options.push(i + '=' + playerOptions[i]);
    }
    if(options.length == 0){
      options = '';
    } else {
      options = '?' + options.join('&');
    }
    return (
      <div className={'tile tile-' + this.type}>
        <div className="row">
          <div className="aspect-ratio aspect-ratio-16-9">
            <div className="aspect-ratio-inside">
              <iframe
                width="100%"
                height="100%"
                src={'https://www.youtube.com/embed/' + src + options}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// for futher informations visit https://developers.google.com/youtube/player_parameters
YouTubeTile.defaultProps = {
  src:            '80AFso-l1Eg',
  autoplay:       0,
  cc_load_policy: null,
  color:          null,
  controls:       null,
  disablekb:      null,
  end:            null,
  fs:             null,
  hl:             null,
  iv_load_policy: null,
  list:           null,
  listType:       null,
  loop:           null,
  modestbranding: null,
  playlist:       null,
  playsinline:    null,
  rel:            0,
  showinfo:       1,
  start:          null
};