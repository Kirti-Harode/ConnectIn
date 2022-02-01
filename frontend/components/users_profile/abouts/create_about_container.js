import { connect } from 'react-redux';
import { createAbout } from '../../../actions/about_actions';
import { closeModal } from '../../../actions/modal_actions';
import AboutForm from './about_form.jsx';


const mSTP = (state) => {
    return({
        about: {
            user_id: state.session.id,
            body: "",
        },
        formType: 'Add About'
    })
};

const mDTP = dispatch => ({
    action: (about) => dispatch(createAbout(about)),
    closeModal: () => dispatch(closeModal()),
});

const CreateAboutForm = connect(mSTP, mDTP)(AboutForm);

export default CreateAboutForm;