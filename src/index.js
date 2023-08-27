import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
