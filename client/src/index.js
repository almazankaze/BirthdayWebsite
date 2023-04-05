import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { AppProvider } from "./context";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import "./main.css";

const middlewares = [thunk].filter(Boolean);
const GOOGLE = process.env.REACT_APP_GOOGLE;

const store = configureStore({ reducer: reducers, middleware: middlewares });

ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={GOOGLE}>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById("root")
);
