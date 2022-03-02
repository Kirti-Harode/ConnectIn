import { connect } from 'react-redux';
import React from 'react';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { login, clearErrors} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    const errors = Object.values(state.errors.session)
    let errObj = {}
    errors.map(error => {
        if(error.includes("Email")){
            errObj.Email = error
        }
        if(error.includes("Fname")){
            errObj.Fname = error
        }
        if(error.includes("Lname")){
            errObj.Lname = error
        }
        if(error.includes("Password")){
            errObj.Password = error
        }
    })
    console.log(errObj)
    // debugger
    return {
        errObj,
        formType: 'Sign Up'
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>  {
    // debugger
    return {
        processForm: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);