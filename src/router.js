import React, { Suspense } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { withRouter } from 'react-router';
import Loadable from 'react-loadable';
import {inject, observer, Provider} from 'mobx-react';
import {Helmet} from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import anchorOffset from 'anchor-offset';

import Favicon from './components/Favicon.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Loader from './components/Loader.js';


const PublicRoute = Loadable({
  loader: () => import('./pages/PublicRoute.js'),
  loading: Loader,
});

const AdminRoute = Loadable({
  loader: () => import('./pages/Admin/AdminRoute.js'),
  loading: Loader,
});

const ErrorRoute = Loadable({
  loader: () => import('./pages/Error/ErrorRoute.js'),
  loading: Loader,
});

const Wip = Loadable({
  loader: () => import('./pages/Wip.js'),
  loading: Loader,
});

@withRouter
@inject('store')
@observer
export default class Router extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.store.setHistory(this.props.history);
    anchorOffset(5 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    setTimeout(() => {
      anchorOffset(5 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    }, 1000);
  }

  render() {
    let s = this.props.store;
    let appClasses = ['app'];
    if(!s.iconsEnabled){
      appClasses.push('icon-disabled');
    }
    appClasses = appClasses.join(' ');
    return (
      <Suspense fallback={Loader}>
        <div className={appClasses}>
          <Favicon />
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <title>{s.pageTitle}</title>
          </Helmet>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/en"/>
            )}/>
            <Route exact path='/:lang(\w{2})/wip' component={Wip}/>
            <Route path='/:lang(\w{2})' component={PublicRoute}/>
            <Route path='/:lang(\w{2})/error' component={ErrorRoute}/>
            <Route path='/:lang(\w{2})/admin' component={AdminRoute}/>
          </Switch>
          <ToastContainer hideProgressBar="true" />
        </div>
      </Suspense>
    );
  }
}