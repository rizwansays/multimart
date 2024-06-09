import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store";
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ToastContainer 
      theme="dark"
       position="top-right"
       autoClose= {3000}
       pauseOnHover = {false}
       closeOnClick/>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
