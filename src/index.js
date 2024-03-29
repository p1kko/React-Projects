import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.scss';
import 'macro-css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router >
        <App />
    </Router>
);

// json-server --watch db.json --port 3001
