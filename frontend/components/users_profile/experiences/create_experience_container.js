import { connect } from "react-redux";
import ExperienceForm from './experience_form';
import { closeModal } from "../../../actions/modal_actions";
import { createExperience } from "../../../actions/experience_actions";

const mapStateToProps = state => ({
    experience: {
        user_id: state.session.id,
        title: '',
        company: '',
        employment_type: '',
        industry: '',
        location: '',
        headline: '',
        start_date: '',
        end_date: '',
        description: ''
    },
    formType: 'Add Experience'
});

const mapDispatchToProps = dispatch => ({
    action: experience => dispatch(createExperience(experience)),
    closeModal: () => dispatch(closeModal())
});

const CreateExperience = connect(mapStateToProps, mapDispatchToProps)(ExperienceForm);

export default CreateExperience;