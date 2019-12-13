import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;