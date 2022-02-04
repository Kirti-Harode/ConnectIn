import React from "react";
import { connect } from "react-redux";
import {createComment, updateComment, deleteComment, fetchComments} from '../../actions/comment_actions';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{
    render(){
        return(
            <div>
                {this.props.comments.map(comment => (
                    <CommentIndexItem 
                        comment={comment} 
                        authorId={comment.author_id} 
                        author={comment.author}
                        key={comment.id}
                        currentUser={this.props.currentUser}/>
                ))}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    postId: ownProps.postId,
    comments: Object.values(state.entities.comments).filter(comment => (comment.postId == ownProps.postId))
});

const mapDispatchToProps = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    createComment: comment => dispatch(createComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
   
});


const CommentIndexContainer = connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
export default CommentIndexContainer;