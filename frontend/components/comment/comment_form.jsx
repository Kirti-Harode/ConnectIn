import React from "react";
import { connect } from "react-redux";
import { createComment } from '../../actions/comment_actions';

class CommentForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.comment
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateBody = this.updateBody.bind(this)
    }

    handleSubmit(){
        e.preventDefault()
        this.props.createComment(this.state)
        this.setState({
            body: ''
        });
    }

    updateBody(e){
        this.setState({body: e.currentTarget.value})
    }

    render(){
        return(
            <div className="create-comment-form-div">
                <form className="create-cmt-form" onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.body} className="cmt-body-input" placeholder="Add a comment..." />
                    <button className="cmt-post-button">Post</button>
                </form>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => ({
    formType: 'Create Comment',
    currentUser: state.entities.users[state.session.id],
    postId: ownProps.postId,
    comment: {
        body: '',
        author_id: state.session.id,
        post_id: ownProps.postId
    }
});

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment))

});

const createCommentContainer = connect(mapStateToProps, mapDispatchToProps)(CommentForm);
export default createCommentContainer;