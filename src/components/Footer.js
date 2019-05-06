import React from 'react';


export default class Footer extends React.Component {

  render(){
    return (
      <div class="footer page">
        <div class="layout-equal-spaced stretch hero">
          <p class="neo-eon unselectable">
            <span class="n">N</span>
            <span class="eo">EO</span>
          </p>
          <div class="social-media-links">
            <ul class="flat">
              <li>
                <a class="github" href="https://github.com/Syndesi" target="_blank">
                  <p class="icon">github</p>
                </a>
              </li>
              <li>
                <a class="xing" href="https://www.xing.com/profile/Soeren_Klein7/" target="_blank">
                  <p class="icon">xing</p>
                </a>
              </li>
              <li>
                <a class="youtube" href="https://www.youtube.com/channel/UCeq9pswz0tzUJNi2Gy6o-NA" target="_blank">
                  <p class="icon">youtube</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="layout-equal-spaced stretch legal-links">
          <ul class="flat pb-1">
            <li>
              <a href="#" target="_blank">
                <p>Contact</p>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <p>Impressum</p>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <p>Data Privacy</p>
              </a>
            </li>
          </ul>
          <p class="pb-1"><span class="icon">copyright</span> by Sören Klein, 2019</p>
        </div>
      </div>
    );
  }
}