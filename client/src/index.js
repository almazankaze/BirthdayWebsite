import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { AppProvider } from "./context";

import App from "./App";
import "./main.css";

const middlewares = [thunk].filter(Boolean);

const store = configureStore({ reducer: reducers, middleware: middlewares });

ReactDOM.render(
  <Provider store={store}>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </Provider>,
  document.getElementById("root")
);
