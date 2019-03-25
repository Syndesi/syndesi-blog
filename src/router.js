import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import {Provider} from 'mobx-react';
import { ToastContainer } from 'react-toastify';

import Store from './Store.js';
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