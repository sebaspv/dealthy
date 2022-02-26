import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./App.css";
import { Route } from "wouter";
import Welcome from "./components/Welcome";
import Covid from "./components/Covid";
import Map from "./components/Map";
import { ModalsProvider } from "@mantine/modals";

const App = () => {
  return (
    <Auth0Provider
      domain="energify.us.auth0.com"
      clientId="x0e6irFODnrUdf2dZhXRjEsux8QoMUg9"
      redirectUri={window.location.origin}
    >
      <ModalsProvider>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "space-between",
          }}
        >
          <Header />
          <Route path="/">
            <Welcome />
          </Route>
          <Route path="/covid">
            <Covid />
          </Route>
          <Route path="/covid/map">
            <Map />
          </Route>
          <Nav />
        </section>
      </ModalsProvider>
    </Auth0Provider>
  );
};

export default App;
