import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the Redux Provider and the store configuration
import { Provider } from 'react-redux';
import { store } from './store';

// Global CSS: Bootstrap and our custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Create root and render the App wrapped in the Redux Provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
