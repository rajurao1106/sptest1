import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing the CSS file for global styles

ReactDOM.hydrate(<App />, document.getElementById('root'));