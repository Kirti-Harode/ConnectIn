import { connect } from "react-redux";
import EducationForm from './education_form';
import { closeModal } from "../../../actions/modal_actions";
import { createEducation } from "../../../actions/education_actions";

const mapStateToProps = state => ({
    education: {
        user_id: state.session.id,
        school: '',
        degree: '',
        field_of_study: '',
        description: '',
        activities: '',
        start_date: '',
        end_date: '',
        grade: ''
    },
    formType: 'Add Education'
});

const mapDispatchToProps = dispatch => ({
    action: education => dispatch(createEducation(education)),
    closeModal: () => dispatch(closeModal())
});

const CreateEducation = connect(mapStateToProps, mapDispatchToProps)(EducationForm);

export default CreateEducation;