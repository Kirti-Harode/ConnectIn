import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        errors: state.errors.session,
        formType: 'Log In'
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>  {
    // debugger
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);