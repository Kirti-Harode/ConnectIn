import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UserIntroForm from '../users_profile/intros/intro_form'
import CreateAboutForm from '../users_profile/abouts/create_about_container';
import EditAboutForm from '../users_profile/abouts/edit_about_container';
import CreateExperienceForm from '../users_profile/experiences/create_experience_container';
import EditExperienceForm from '../users_profile/experiences/edit_experience_container';
import CreateEducationForm from '../users_profile/educations/create_education_container';
import EditEducationForm from '../users_profile/educations/edit_education_container';

const Modal = ({modal, closeModal})  => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'editUserIntro':
            component = <UserIntroForm />
            break;
        case 'createAbout':
            component = <CreateAboutForm />;
            break;
        case 'editAbout':
            component = <EditAboutForm />;
            break;
        case 'createExperience':
            component = <CreateExperienceForm />;
            break;
        case 'editExperience':
            component = <EditExperienceForm />;
            break;
        case 'createEducation':
            component = <CreateEducationForm />;
            break;
        case 'editEducation':
            component = <EditEducationForm />;
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