import { connect } from "react-redux";
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    formType: 'Create a Post',
    post: {
        body: '',
        author_id: state.session.id,
        media: null,
        media_url: null
    }
    // user fname, lname
});

const mapDispatchToProps = dispatch => ({
    processForm: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
});

const createPostContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);
export default createPostContainer;