import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import store from "./store";
import { light } from "./themes";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={createMuiTheme(light)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
