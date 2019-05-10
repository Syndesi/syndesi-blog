import React from 'react';


export default class Loader extends React.Component {
  render(){
    return (
      <div class="loader p-2">
        <div class="dot-box unselectable">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    );
  }
}