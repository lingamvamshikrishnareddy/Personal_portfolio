import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';  // Adjust this path if necessary
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
