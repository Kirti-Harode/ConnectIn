import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import WelcomeContainer from "./welcome_page/welcome_container";
const App = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <h1 className="logo-first">Connect</h1>
                    <h1 className="logo-second">In</h1>
                </div>
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