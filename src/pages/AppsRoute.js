import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { withRouter } from "react-router";
import Loadable from 'react-loadable';

import Loader from '../components/Loader.js';

const Apps = Loadable({
  loader: () => import('./Apps/Apps.js'),
  loading: Loader,
});

const E404 = Loadable({
  loader: () => import('./Error/E404.js'),
  loading: Loader,
});


@withRouter
export default class AppsRoute extends React.Component {

  render() {
    let url = this.props.match.url;
    return (
        <Switch>
          <Route exact path={url + '/'} component={Apps}/>
          <Route exact path={url + '/*'} component={E404} />
        </Switch>
    );
  }
}