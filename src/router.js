import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { withRouter } from "react-router";
import Loadable from 'react-loadable';
import {observer, Provider} from 'mobx-react';
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';
import anchorOffset from 'anchor-offset';

import Store from './Store.js';
import Favicon from './components/Favicon.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Loader from './components/Loader.js';

const Index = Loadable({
  loader: () => import('./pages/Index.js'),
  loading: Loader,
});

const Post = Loadable({
  loader: () => import('./pages/Post.js'),
  loading: Loader,
});

const Credits = Loadable({
  loader: () => import('./pages/Credits.js'),
  loading: Loader,
});

@withRouter
@observer
export default class Router extends React.Component {

  constructor(props){
    super(props);
    this.store = new Store();
    document.store = this.store;
  }

  componentDidMount() {
    anchorOffset(5 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    setTimeout(() => {
      anchorOffset(5 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    }, 1000);
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className="app">
          <Favicon />
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <title>{this.store.pageTitle}</title>
          </Helmet>
          <Route component={Header}/>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/en"/>
            )}/>
            <Route exact path='/credits' component={Credits}/>
            <Route exact path='/:lang' component={Index}/>
            <Route path='/:lang/post/:postId' component={Post}/>
          </Switch>
          <Route component={Footer}/>
          <ToastContainer hideProgressBar="true" />
        </div>
      </Provider>
    );
  }
}