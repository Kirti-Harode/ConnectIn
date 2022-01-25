import React from "react"
import { connect } from "react-redux"
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStatetoProps = (state) => ({
    loggedIn: Boolean(state.session.id)
});

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={props => (
            loggedIn ? ( <Redirect to='/' /> ) : ( <Component {...props} /> )
        )}
    />
)

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={props => (
            loggedIn ? ( <Component {...props} /> ) : ( <Redirect to='/signup' /> )
        )}
    />
)

export const AuthRoute = withRouter( connect(mapStatetoProps, null)(Auth));
export const ProtectedRoute = withRouter( connect(mapStatetoProps, null)(Protected))