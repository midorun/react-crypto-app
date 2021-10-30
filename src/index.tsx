import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'components/App';

import store from 'app/store';

import './index.css';
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);