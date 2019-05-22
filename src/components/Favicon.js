import React from 'react';
import {Helmet} from "react-helmet";

export default class Favicon extends React.Component {

  render() {
    // files generated with realfavicongenerator.net
    return (
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href="/blog/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/blog/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="194x194" href="/blog/favicon-194x194.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/blog/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/blog/favicon-16x16.png" />
        <link rel="manifest" href="/blog/site.webmanifest" />
        <link rel="mask-icon" href="/blog/safari-pinned-tab.svg" color="#1d1d1b" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
    );
  }
}