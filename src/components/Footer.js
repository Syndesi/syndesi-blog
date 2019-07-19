import React from 'react';


export default class Footer extends React.Component {

  render(){
    return (
      <div className="footer page">
        <div className="layout-equal-spaced stretch hero">
          <p className="neo-eon unselectable">
            <span className="n">N</span>
            <span className="eo">EO</span>
          </p>
          <div className="social-media-links">
            <ul className="flat">
              <li>
                <a className="github" href="https://github.com/Syndesi" target="_blank">
                  <p className="icon">github</p>
                </a>
              </li>
              <li>
                <a className="xing" href="https://www.xing.com/profile/Soeren_Klein7/" target="_blank">
                  <p className="icon">xing</p>
                </a>
              </li>
              <li>
                <a className="youtube" href="https://www.youtube.com/channel/UCeq9pswz0tzUJNi2Gy6o-NA" target="_blank">
                  <p className="icon">youtube</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="layout-equal-spaced stretch legal-links">
          <ul className="flat pb-1">
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
          <p className="pb-1"><span className="icon">copyright</span> by Sören Klein, 2019</p>
        </div>
      </div>
    );
  }
}