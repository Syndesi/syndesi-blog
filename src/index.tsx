import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import {initReactI18next} from 'react-i18next';

import './style.scss';
import Router from './router';
import {Provider} from 'mobx-react';
import Store from './Store';

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },                // React already does escaping
    lng: process.env.APP_DEFAULT_LANGUAGE_CODE,           // language to use
    fallbackLng: process.env.APP_DEFAULT_LANGUAGE_CODE,   // fallback-language, by default EN
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: process.env.WEB_BASE_PATH + 'i18n/{{ns}}/{{lng}}.json'
    },
    ns: ['footer', 'header', 'tile', 'l10n'],
    defaultNS: 'tile',
    load: 'languageOnly'
  });

let store = new Store();
document.store = store;

ReactDOM.render((
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <BrowserRouter basename={process.env.WEB_BASE_PATH}>
        <Router/>
      </BrowserRouter>
    </Provider>
  </I18nextProvider>
), document.getElementById('app'));