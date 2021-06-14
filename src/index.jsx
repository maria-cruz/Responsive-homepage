import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";
import "./scss/main.scss";

const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>
          <Route path="/CreateAccount" exact>
            <CreateAccount />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));
