import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormComponent from './component/formComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormComponent />
  </React.StrictMode>
);


reportWebVitals();
