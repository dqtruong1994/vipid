// import * as ReactDOMClient from 'react-dom/client';
// // TODO: remove
// // import { StrictMode } from 'react';
// import './index.css';
// import App from './App';

// const container: any = document.getElementById('root');

// const root = ReactDOMClient.createRoot(container);

// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
