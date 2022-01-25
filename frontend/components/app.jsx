import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import WelcomeContainer from "./welcome_page/welcome_container";
import Welcome from "./welcome_page/welcome";
const App = () => {
    return (
        <div>
            <header>
                
                {/* <WelcomeContainer />                */}
            </header>

            <Switch>
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
                <Route exact path='/' component={Welcome} />
            </Switch>
        </div>
    )
}

export default App;