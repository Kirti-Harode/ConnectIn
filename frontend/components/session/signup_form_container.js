import { connect } from 'react-redux';
import React from 'react';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { login, clearErrors} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        errors: state.errors.session,
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