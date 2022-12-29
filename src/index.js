import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/common/ScrollToTop';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
      <CookiesProvider>
        <Router>
          <ScrollToTop />
            <App />
        </Router>
      </CookiesProvider>
  </React.StrictMode>
);

