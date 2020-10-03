import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as SessionProvider } from "./session/context";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyCourse from "./pages/BuyCourse"

ReactDOM.render(
  <Router>
    {/* <SessionProvider> */}
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/registro" component={Register} />
    <Route exact path="/comprar" component={BuyCourse} />
    {/* </SessionProvider> */}
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
