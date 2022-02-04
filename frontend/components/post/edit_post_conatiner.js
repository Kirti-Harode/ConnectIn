import { connect } from "react-redux";
import { updatePost, fetchPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    formType: 'Edit Post',
    post: state.entities.posts[state.ui.filter]
    // user fname, lname
});

const mapDispatchToProps = dispatch => ({
    processForm: post => dispatch(updatePost(post)),
    fetchPost: postId => dispatch(fetchPost(postId)),
    closeModal: () => dispatch(closeModal())
});

const EditPostContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);
export default EditPostContainer;