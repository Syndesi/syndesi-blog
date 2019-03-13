import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './style.scss';


import Router from './router.js';

ReactDOM.render((
  <BrowserRouter basename="/">
    <Router/>
  </BrowserRouter>
), document.getElementById('app'));