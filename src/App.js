import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import "./scss/app.scss";
import "./styles/third-party.css";
import "./styles/style.css";
import "./styles/modal.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(renderProps) => <Home {...renderProps} />}
         
        />
      {/*
        <Route
          path="/blog/:uid"
          render={(renderProps) => <BlogPost {...renderProps} />}
        />
        <Route
          exact
          path="/about-us"
          render={(renderProps) => <AboutUs {...renderProps} />}
        />
        <Route
          exact
          path="/contact-us"
          render={(renderProps) => <ContactUS {...renderProps} />}
        /> */}
        
      </Switch>
    </div>
  );
}

export default App;
