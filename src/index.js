import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import Routes from './routes'
const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <Routes/>
  </Provider>,
  document.getElementById('root')
);