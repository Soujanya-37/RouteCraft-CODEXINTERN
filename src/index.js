import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Imports your global styles
import App from './App'; // Imports your main App component

// 1. Find the DOM element with the ID 'root' from your index.html
const rootElement = document.getElementById('root');

// 2. Create a React root to manage rendering for that element
const root = ReactDOM.createRoot(rootElement);

// 3. Render your entire App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);