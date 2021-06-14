import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";
import "./scss/main.scss";
// import { AuthProvider } from "./contexts/index";
const Routing = () => {
  return (
    // <AuthProvider>
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
    // </AuthProvider>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));
