import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //브라우저 주소 변경 감지 기능능
  <BrowserRouter>
    <App />
  </BrowserRouter>
);