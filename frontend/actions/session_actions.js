import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";



const receiveCurrentUser = (currentUser) =>{
    // debugger
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () =>({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) =>({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () =>({
    type: CLEAR_SESSION_ERRORS
});

export const signup = user => dispatch => {
    // debugger
    return (
        APIUtil.postUser(user)
        .then(user => dispatch(receiveCurrentUser(user)), 
        (errors) => (dispatch(receiveErrors(errors.responseJSON)))
        )
    );
        
}

export const logout = () => dispatch => {
    return (
        APIUtil.deleteSession()
        .then(() => dispatch(logoutCurrentUser())
        )
    );
}

export const login = user => dispatch => {
    return (
        APIUtil.postSession(user)
        .then(user => dispatch(receiveCurrentUser(user)), 
        (errors) => (dispatch(receiveErrors(errors.responseJSON)))
        )
    );
}
