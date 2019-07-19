import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { withRouter } from 'react-router';
import Loadable from 'react-loadable';

import Loader from '../../components/Loader.js';

const PostEdit = Loadable({
  loader: () => import('./PostEdit.js'),
  loading: Loader,
});

@withRouter
export default class AdminRoute extends React.Component {

  render() {
    let url = this.props.match.url;
    return (
      <Switch>
        <Route exact path={url + '/post/:postId/edit'} component={PostEdit}/>
      </Switch>
    );
  }
}