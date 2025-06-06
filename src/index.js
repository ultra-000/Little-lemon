import "./global.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/index';
import MultistepForm from "./components/MultistepForm/index";
import ConfirmationPage from "./components/ConfirmationPage/index";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MultistepForm />} />
          <Route path="confirm" element={<ConfirmationPage />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
