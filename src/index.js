import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './style.scss';
import Router from './router.js';


ReactDOM.render((
  <BrowserRouter basename={process.env.WEB_BASE_PATH}>
    <Router/>
  </BrowserRouter>
), document.getElementById('app'));