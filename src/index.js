import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './routes/tabs/app';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

reportWebVitals();
