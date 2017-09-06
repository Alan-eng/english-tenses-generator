import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TableTenses from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';





ReactDOM.render(<TableTenses subject="he" predicate="work"/>, document.getElementById('root'));
registerServiceWorker();

