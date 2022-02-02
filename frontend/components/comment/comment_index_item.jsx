import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {updateComment, deleteComment, fetchComments} from '../../actions/comment_actions';

class CommentIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: this.props.comment.body,
            drop: false,
            edit: false
        }
    }

    handleSubmit(e){

    }

    // updateBody(e){

    // }

    render(){
        let dropdown;
        if(this.props.comment.user_id == this.props.currentUser.id){
            dropdown = (
                <button >

                </button>
            )
        }
        return(
            <div>
                <h1>Singlecomment</h1>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    postId: ownProps.postId,
    commenter: state.entities.users[ownProps.userId]
});

const mapDispatchToProps = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem);