import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './App';
import store from './config/store';

const root = <Provider store={store}>
<BrowserRouter>
    <App />
</BrowserRouter>
</Provider>;

ReactDOM.render(root, document.getElementById('root'));