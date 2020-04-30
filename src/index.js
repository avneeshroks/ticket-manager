import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "react-perfect-scrollbar/dist/css/styles.css";
import "nprogress/nprogress.css";
import "./mixins/chartjs";
import React from "react";
import ReactDOM from "react-dom";

import { SettingsProvider } from "./context/SettingsContext";
import { restoreSettings } from "./utils/settings";
import App from "./App";

const settings = restoreSettings();

ReactDOM.render(
  <SettingsProvider settings={settings}>
    <App />
  </SettingsProvider>,
  document.getElementById("root")
);
