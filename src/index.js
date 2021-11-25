import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/reducer';

import './styles/404.css';
import './styles/burger.css';
import './styles/edit-profile.css';
import './styles/global.css';
import './styles/icons.css';
import './styles/index.css';
import './styles/profile.css';


const app = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)

ReactDOM.render(app, document.getElementById('root'));


