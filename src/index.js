import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { AppProvider, WebAuth0AuthClient } from '@8base/react-sdk';

const URI = 'https://api.8base.com/cjy5vy6oz000201mm0rvk9bme'
const auth0WebClient = new WebAuth0AuthClient({
  domain: "secure.8base.com", // domain client information from authentication page
  clientId: "dvnQ0JKOeIIR1rZSwXGKiSkRQOAFssyw", // client id information
  redirectUri: `${window.location.origin}/auth/callback`, // the callback url you set
  logoutRedirectUri: `${window.location.origin}/`, // logout url you entered
});
const client = new ApolloClient({
  uri: "https://api.8base.com/cjy5vy6oz000201mm0rvk9bme"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppProvider uri={URI} authClient={auth0WebClient}>
      {({ loading }) => {
        if (loading) {
          return <p>Please wait...</p>;
        }
        return <App />;
      }}
    </AppProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
