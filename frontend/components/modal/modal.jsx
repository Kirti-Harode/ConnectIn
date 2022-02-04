import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UserIntro from '../users_profile/intros/intro_form'
import CreateAbout from '../users_profile/abouts/create_about_container';
import EditAbout from '../users_profile/abouts/edit_about_container';
import CreateExperience from '../users_profile/experiences/create_experience_container';
import EditExperience from '../users_profile/experiences/edit_experience_container';
import CreateEducation from '../users_profile/educations/create_education_container';
import EditEducation from '../users_profile/educations/edit_education_conatiner';
import CreatePost from '../post/create_post_container';
import EditPost from '../post/edit_post_conatiner';

const Modal = ({modal, closeModal})  => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'editUserIntro':
            component = <UserIntro />
            break;
        case 'createAbout':
            component = <CreateAbout />
            break;
        case 'editAbout':
            component = <EditAbout />
            break;
        case 'createExperience':
            component = <CreateExperience />
            break;
        case 'editExperience':
            component = <EditExperience />
            break;
        case 'createEducation':
            component = <CreateEducation />
            break;
        case 'editEducation':
            component = <EditEducation />
            break;
        case 'createPost':
            component = <CreatePost />
            break;
        case 'editPost':
            component = <EditPost />
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);