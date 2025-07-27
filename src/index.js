import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();
reportWebVitals();
