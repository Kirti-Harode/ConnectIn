import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import ExperienceForm from './experience_form';
import { updateExperience, deleteExperience } from '../../../actions/experience_actions';

const mSTP = (state) => {
    return {
        experience: state.entities.experiences[state.ui.filter],
        formType: 'Edit Experience'
    }
};
  
const mDTP = (dispatch) => ({
    action: (experience) => dispatch(updateExperience(experience)),
    deleteExperience: (experienceId) => dispatch(deleteExperience(experienceId)),
    closeModal: () => dispatch(closeModal()),
});
  
const EditExperience = connect(mSTP, mDTP)(ExperienceForm);
  
export default EditExperience;