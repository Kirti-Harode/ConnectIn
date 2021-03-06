import React from "react";
import { Route, Switch } from "react-router-dom";
import SigninFormContainer from "./session/signin_form_container";
import SignupFormContainer from "./session/signup_form_container";
import HeaderContainer from "./headers/header";
import FeedContainer from './feed/feed'
import Welcome from "./welcome_page/welcome";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NotFound from "./not_found_error/not_found";
import ProfileContainer from "./users_profile/profile_container";
import Modal from "./modal/modal";
import MyNetwrok from './my_network/my_network';
import ConnectInUsers from './my_network/connectIn_users';
import BrowserRouter from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Modal />
            <header>
                <HeaderContainer/>
            </header>
            {/* <BrowserRouter> */}
            {/* <React.Fragment>  */}
            <Switch>
                <ProtectedRoute exact path='/feed' component={FeedContainer} />
                <ProtectedRoute exact path='/mynetwork' component={MyNetwrok} />
                <ProtectedRoute exact path='/allUsers' component={ConnectInUsers}/>
                <ProtectedRoute exact path='/users/:userId' component={ProfileContainer} />
                <AuthRoute exact path='/' component={Welcome} />
                <AuthRoute exact path="/login" component={SigninFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <Route component={NotFound} />
            </Switch>
            {/* </React.Fragment> */}
            {/* </BrowserRouter> */}
        </div>
    )
}

export default App;