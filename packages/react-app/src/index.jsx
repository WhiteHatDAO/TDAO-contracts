import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { ErrorBoundary } from "./components";
import "./index.css";

const themes = {
  dark: "./dark-theme.css",
  light: "./light-theme.css",
};

const prevTheme = window.localStorage.getItem("theme");

const subgraphUri = "https://arweave.net/graphql";

const client = new ApolloClient({
  uri: subgraphUri,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme || "light"}>
        <HashRouter hashType="slash">
          <App subgraphUri={subgraphUri} />
        </HashRouter>
      </ThemeSwitcherProvider>
    </ApolloProvider>
  </ErrorBoundary>,
  document.getElementById("root"),
);
