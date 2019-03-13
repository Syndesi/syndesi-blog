import axios from "axios";
import moment from 'moment';
import React from 'react';

import Button from '../Button.js';

export default class FileDownloadTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'file-download';
    this.state = {
      details:  '',
      href:     this.props.src,
      filename: this.props.filename
    };
    if(/^\d+$/.test(this.props.src)){
      // string is numeric, therefore assumed it's a file id
      this.parseFileId(this.props.src);
    } else {
      // it's assumed that the src is a valid URL
      var domain = this.getHostName(this.props.src);
      this.state.details = domain;
    }
  }

  parseFileId(id){
    axios.get('http://localhost/directus_test/public/_/files/' + id)
         .then((res) => {
           var uploaded = moment(res.data.data.uploaded_on).format('DD.MM.YYYY');
           var filesize = this.formatBytes(res.data.data.filesize, 1);
           var filename = this.state.filename;
           if(!filename){
             filename = res.data.data.filename;
           }
           this.setState({
             details:  'syndesi.dev, ' + uploaded + ', ' + filesize,
             filename: filename,
             href:     res.data.data.data.full_url
           });
         });
  }

  // https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
  formatBytes(bytes,decimals) {
    if(bytes == 0) return '0 Bytes';
    var k = 1024,
        dm = decimals <= 0 ? 0 : decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  // http://www.primaryobjects.com/2012/11/19/parsing-hostname-and-domain-from-a-url-with-javascript/
  getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
      return match[2];
    }
    else {
      return "";
    }
  }

  render(){
    return (
      <div class={'tile tile-' + this.type}>
        <div class="row layout-equal-spaced">
          <div class="detailText">
            <p>{this.state.filename}</p>
            <p class="detail">{this.state.details}</p>
          </div>
          <a href={this.state.href} download={this.state.filename} target="_blank" class="download">
            <Button>Download</Button>
          </a>
        </div>
      </div>
    );
  }
}

FileDownloadTile.defaultProps = {
  filename: null,
  src: null
};