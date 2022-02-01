import { connect } from "react-redux";
import { updateAbout, deleteAbout } from "../../../actions/about_actions";
import { closeModal } from "../../../actions/modal_actions";
import AboutForm from './about_form';

const mapStateToProps = state => ({
    about: state.entities.abouts[state.ui.filter],
    formType: 'Edit About'
});

const mapDispatchToProps = dispatch => ({
    action: about => dispatch(updateAbout(about)),
    deleteAbout: aboutId => dispatch(deleteAbout(aboutId)),
    closeModal: () => dispatch(closeModal())
});

const EditAbout = connect(mapStateToProps, mapDispatchToProps)(AboutForm);
export default EditAbout;

