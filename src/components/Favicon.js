import React from 'react';
import {Helmet} from "react-helmet";

export default class Favicon extends React.Component {

  render() {
    // files generated with realfavicongenerator.net
    return (
      <Helmet>
        <link rel="shortcut icon" href={require('../assets/favicon/favicon.ico')} type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href={require('../assets/favicon/apple-touch-icon.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={require('../assets/favicon/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={require('../assets/favicon/favicon-16x16.png')} />
        <link rel="manifest" href={require('../assets/favicon/site.webmanifest')} />
        <link rel="mask-icon" href={require('../assets/favicon/safari-pinned-tab.svg')} color="#282828" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="msapplication-TileImage" content={require('../assets/favicon/mstile-144x144.png')} />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
    );
  }
}