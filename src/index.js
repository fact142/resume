import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/reducers';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
