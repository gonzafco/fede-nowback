import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as SessionProvider } from "./session/context";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

ReactDOM.render(
  <Router>
    {/* <SessionProvider> */}
    <Route path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/registro" component={Register} /> */}
    {/* </SessionProvider> */}
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
