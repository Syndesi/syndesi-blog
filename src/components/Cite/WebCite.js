import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';


export default class WebCite extends React.Component {

  constructor(props){
    super(props);
    this.type = 'web';
    this.state = {};
  }

  render(){
    var p = this.props;
    var authors = null;
    if(p.authors){
      authors = [];
      for(var i = 0; i < p.authors.length; i++){
        var a = p.authors[i];
        let author = a.name;
        if(a.url){
          author = <a href={a.url} type="_blank">{author}</a>;
        }
        authors.push(author);
        authors.push("; ");
      }
      authors.pop();
    }
    var created = p.created ? ' (' + p.created + ')' : null;
    var createdSeperator = (authors || created) ? '.' : null;
    var visited = p.visited ? ' Retrieved on ' + p.visited + '.' : null;
    return (
      <p class={'cite-text cite-' + this.type}>
        {authors}{created}{createdSeperator} <a href={p.url} target="_blank" >"{p.title}"</a>. {visited}
      </p>
    );
  }
}

WebCite.defaultProps = {
  url: null,
  title: null,
  authors: null,
  created: null,
  visited: null,
  domain: null,
};

WebCite.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  created: PropTypes.string,
  visited: PropTypes.string,
  domain: PropTypes.string,
};