import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducer'

import './index.css';
import App from './App';

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);