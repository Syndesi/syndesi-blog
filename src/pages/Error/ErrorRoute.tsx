import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { withRouter } from 'react-router';
import Loadable from 'react-loadable';

import Loader from '../../components/Loader';

const E404 = Loadable({
  loader: () => import('./E404'),
  loading: Loader,
});

const E4xx = Loadable({
  loader: () => import('./E4xx'),
  loading: Loader,
});

const E5xx = Loadable({
  loader: () => import('./E5xx'),
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
        <Route exact path={url + '/'} component={E404} />
      </Switch>
    );
  }
}