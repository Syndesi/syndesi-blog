import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { withRouter } from "react-router";
import Loadable from 'react-loadable';

import Loader from '../components/Loader.js';

const E404 = Loadable({
  loader: () => import('./Error/E404.js'),
  loading: Loader,
});

const E4xx = Loadable({
  loader: () => import('./Error/E4xx.js'),
  loading: Loader,
});

const E5xx = Loadable({
  loader: () => import('./Error/E5xx.js'),
  loading: Loader,
});

@withRouter
export default class ErrorRoute extends React.Component {

  render() {
    let url = this.props.match.url;
    return (
      <Switch>
        <Route exact path={url + '/404'} component={E404}/>
        <Route exact path={url + '/:httpCode(4\\d{2})'} component={E4xx}/>
        <Route exact path={url + '/:httpCode(5\\d{2})'} component={E5xx}/>
        <Route exact path={url + '/*'} component={E404} />
      </Switch>
    );
  }
}