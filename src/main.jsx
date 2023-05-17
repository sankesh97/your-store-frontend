import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { makeServer } from './server';

import App from './App.jsx';
import './index.css';
import AppContext from './context/AppContext.jsx';

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext>
        <App />
      </AppContext>
    </BrowserRouter>
  </React.StrictMode>
);
