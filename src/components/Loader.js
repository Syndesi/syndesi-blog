import React from 'react';


export default class Loader extends React.Component {
  render(){
    return (
      <div className="loader p-2">
        <div className="dot-box unselectable">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }
}