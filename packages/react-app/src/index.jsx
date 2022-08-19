import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import App from "./App";
import { ErrorBoundary } from "./components";
import "./index.css";
import { arweaveClient } from "./utils/graphqlClient";
import client from "./utils/wagmi";

const themes = {
  dark: "./dark-theme.css",
  light: "./light-theme.css",
};

const prevTheme = window.localStorage.getItem("theme");

ReactDOM.render(
  <ErrorBoundary>
    <ApolloProvider client={arweaveClient}>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme || "light"}>
        <WagmiConfig client={client}>
          <Router>
            <App />
          </Router>
        </WagmiConfig>
      </ThemeSwitcherProvider>
    </ApolloProvider>
  </ErrorBoundary>,
  document.getElementById("root"),
);
