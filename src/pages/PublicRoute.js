import React, { Suspense } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { withRouter } from "react-router";
import Loadable from 'react-loadable';
import {inject, observer} from 'mobx-react';
import { ToastContainer } from 'react-toastify';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Loader from '../components/Loader.js';

const Index = Loadable({
  loader: () => import('./Index.js'),
  loading: Loader,
});

const Post = Loadable({
  loader: () => import('./Post.js'),
  loading: Loader,
});

const Story = Loadable({
  loader: () => import('./Story.js'),
  loading: Loader,
});

const Credits = Loadable({
  loader: () => import('./Credits.js'),
  loading: Loader,
});

@withRouter
@inject("store")
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
        <ToastContainer hideProgressBar="true" />
      </Suspense>
    );
  }
}