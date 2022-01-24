import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

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
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);