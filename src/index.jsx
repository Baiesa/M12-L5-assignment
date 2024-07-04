import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../i18n'; // Initialize i18next

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);