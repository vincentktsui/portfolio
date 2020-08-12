import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from "./app";
import "./reset.css"
const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default Root;