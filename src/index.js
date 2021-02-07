import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MainContextProvider } from "./contexts/MainContext";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <Router>
        <App />
      </Router>
    </MainContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
