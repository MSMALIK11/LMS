import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from 'react-redux';
import {store} from './Store/store'
// entry point  of component 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
