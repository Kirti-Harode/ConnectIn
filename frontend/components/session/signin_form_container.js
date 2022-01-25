import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import SigninForm from './signin_form';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        errors: state.errors.session,
        formType: 'Sign In'
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>  {
    // debugger
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);