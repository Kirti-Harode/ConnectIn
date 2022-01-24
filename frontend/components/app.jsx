import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import WelcomeContainer from "./welcome_page/welcome_container";
const App = () => {
    return (
        <div>
            <header>
                <h1>ConnectIn</h1>
                <WelcomeContainer />               
            </header>

            <Switch>
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
                {/* <Route exact path='/' component={SearchIndexContainer} /> */}
            </Switch>
        </div>
    )
}

export default App;