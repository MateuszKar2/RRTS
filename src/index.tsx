import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { reducers } from './reducers';

const store = configureStore({
  reducer: reducers,
})


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
