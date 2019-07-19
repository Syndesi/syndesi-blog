import React, { Suspense } from 'react';
import {Switch, Route} from 'react-router-dom';
import { withRouter } from 'react-router';
import Loadable from 'react-loadable';
import {inject, observer} from 'mobx-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Index = Loadable({
  loader: () => import('./Index'),
  loading: Loader,
});

const Post = Loadable({
  loader: () => import('./Post'),
  loading: Loader,
});

const Story = Loadable({
  loader: () => import('./Story'),
  loading: Loader,
});

const Credits = Loadable({
  loader: () => import('./Credits'),
  loading: Loader,
});

@withRouter
@inject('store')
@observer
export default class PublicRoute extends React.Component {

  render() {
    let url = this.props.match.url;
    return (
      <Suspense fallback={Loader}>
        <Route component={Header}/>
        <Switch>
          <Route exact path={url} component={Index}/>
          <Route exact path={url + '/credits'} component={Credits}/>
          <Route path={url + '/post/:postId'} component={Post}/>
          <Route path={url + '/story/:storyId'} component={Story}/>
        </Switch>
        <Route component={Footer}/>
      </Suspense>
    );
  }
}