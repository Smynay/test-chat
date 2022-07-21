import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./ui/App";
import reportWebVitals from "./reportWebVitals";
import { ServiceProvider } from "./providers";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./assets";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ServiceProvider>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline></CssBaseline>
        <App />
      </ThemeProvider>
    </ServiceProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();