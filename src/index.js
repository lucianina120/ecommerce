import React from 'react';
import ReactDOM from 'react-dom/client';
import getFirestoreApp from './firebase/config'

import App from './App';

import './index.css';

getFirestoreApp();

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)