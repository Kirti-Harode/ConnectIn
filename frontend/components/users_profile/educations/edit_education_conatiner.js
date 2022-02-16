import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import EducationForm from './education_form';
import { updateEducation, deleteEducation } from '../../../actions/education_actions';

const mSTP = (state) => {
    return {
        education: state.entities.educations[state.ui.filter],
        formType: 'Edit Education'
    }
};
  
const mDTP = (dispatch) => ({
    action: (education) => dispatch(updateEducation(education)),
    deleteEducation: (educationId) => dispatch(deleteEducation(educationId)),
    closeModal: () => dispatch(closeModal()),
});
  
const EditEducation = connect(mSTP, mDTP)(EducationForm);
  
