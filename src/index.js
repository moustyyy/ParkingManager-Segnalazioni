import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './routes/tabs/app';
import ReactDOM from'react-dom/client';

const rootElement = document.getElementById('root');
// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
