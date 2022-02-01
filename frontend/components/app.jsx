import React from "react";
import { Route, Switch } from "react-router-dom";
import SigninFormContainer from "./session/signin_form_container";
import SignupFormContainer from "./session/signup_form_container";
import HeaderContainer from "./headers/header";
import FeedContainer from './feed/feed_container'
import Welcome from "./welcome_page/welcome";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NotFound from "./not_found_error/not_found";
import ProfileContainer from "./users_profile/profile_container";
import Modal from "./modal/modal";

const App = () => {
    return (
        <div>
            <Modal />
            <header>
                <HeaderContainer/>
            </header>
            <Switch>
                <ProtectedRoute exact path='/feed' component={FeedContainer} />
                <AuthRoute exact path='/' component={Welcome} />
                <AuthRoute path="/login" component={SigninFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path='/users/:userId' component={ProfileContainer} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default App;