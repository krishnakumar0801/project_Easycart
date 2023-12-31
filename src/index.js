import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initialstate } from './reducer';
import reducer from './reducer';
import { Stateprovider } from './Stateprovider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Stateprovider initialstate={initialstate} reducer={reducer} >
    <App />
    </Stateprovider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
