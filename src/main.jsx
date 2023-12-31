import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productsApi } from './services/products.services.js';
// strictmode bug dupli fetch
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={productsApi}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ApiProvider>
);
