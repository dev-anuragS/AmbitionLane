import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {BrowserRouter} from 'react-router-dom';
import './components/css/main.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

