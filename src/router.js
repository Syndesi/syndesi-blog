import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import {observer, Provider} from 'mobx-react';
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';

import Store from './Store.js';
import Favicon from './components/Favicon.js';
import Header from './components/Header.js';
const Loading = () => <div>Loading...</div>;

const Index = Loadable({
  loader: () => import('./pages/Index.js'),
  loading: Loading,
});

const Post = Loadable({
  loader: () => import('./pages/Post.js'),
  loading: Loading,
});

@observer
export default class Router extends React.Component {

  constructor(props){
    super(props);
    this.store = new Store();
    document.store = this.store;
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className="app">
          <Favicon />
          <Helmet>
            <meta charSet="utf-8" />
            <title>{this.store.pageTitle}</title>
          </Helmet>
          <Route component={Header}/>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/en/"/>
            )}/>
            <Route exact path='/:lang' component={Index}/>
            <Route path='/:lang/post/:postId' component={Post}/>
          </Switch>
          <ToastContainer hideProgressBar="true" />
        </div>
      </Provider>
    );
  }
}