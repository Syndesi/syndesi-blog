import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Loadable from 'react-loadable';

import Header from './widgets/Header.js';
import Footer from './widgets/Footer.js';

const Loading = () => <div>Loading...</div>;

const Index = Loadable({
  loader: () => import('./pages/Index'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./pages/About'),
  loading: Loading,
});


export default class Router extends React.Component {
    render() {
        return (
            <div className="app">
                <Route component={Header}/>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route path='/about' component={About}/>
                </Switch>
                <Route component={Footer}/>
            </div>
        );
    }
}