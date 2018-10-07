import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Root from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './res/css/navbar.css';
import './res/css/list.css';
import './res/css/buttons.css';
import 'react-circular-progressbar/dist/styles.css';
import './res/css/progress.css';
import './res/css/inputs.css';
import './res/css/structure.css';
import './res/css/fonts.css';
import './res/css/modal.css';
import './res/css/animate.css';
import './res/css/loginpage.css';
import './res/css/pagenotfound.css';
import './res/css/custom_alert.css';
import './res/css/theme.css';
import 'react-color-picker/index.css'
import store from './store'
// import initAppData from './helpers/init'

// if (LoginManager.isAuthenticated("admin")) {
  // initAppData(store.dispatch);
// }

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>, document.getElementById('root'))
}

render(Root)

if (module.hot) {
  module
    .hot
    .accept('./routes.js', () => {
      const newRoot = require('./routes').default;
      render(newRoot)
    })
}