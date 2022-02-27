import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {updateComment, deleteComment, fetchComments} from '../../actions/comment_actions';
import { BsThreeDots } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

class CommentIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: this.props.comment.body,
            open: false,
            editComment: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReveal = this.handleReveal.bind(this)
        this.handleHide = this.handleHide.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.updateBody = this.updateBody.bind(this)
    }

    handleReveal(){
        this.setState({open: true});
    }
    handleHide(){
        this.setState({open: false});
    }
    closeEdit(){
        this.setState({editComment: false});
    }
    handleEdit(){
        // console.log(this.state.editComment)
        this.setState({editComment: true});
    }

    updateBody(e){
        this.setState({body: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({body: this.state.body})
        this.props.updateComment({
            id: this.props.comment.id,
            body: this.state.body,
            author_id: this.props.currentUser.id,
            post_id: this.props.postId
        })
        this.closeEdit()
    }

    render(){
       
        const { comment, currentUser, deleteComment, author } = this.props
        let commentInput;
        if(this.state.editComment){
            commentInput = (
                <div >
                    <input type='text' value={this.state.body} onChange={this.updateBody} className="edit-comment-input"/>
                    <button onClick={this.handleSubmit} className="edit-cmt-save-btn">Save</button>
                </div>
            )
        }else{
            commentInput = (<p className="cmt-body">{this.state.body}</p>)
        };

        let dropdownComment;
        if(comment.authorId == currentUser.id){
            dropdownComment = (
                <button className="dropdownComment" onFocus={this.handleReveal} onBlur={this.handleHide}>
                    <BsThreeDots  className="comment-three-dots"/>
                    <ul className={this.state.open ? 'open-dropdown-comment' : 'hide-dropdown-comment'} onClick={e => e.stopPropagation()}>
                        <div className="comment-edit-delete-div">
                            <div className="comment-edit-button" onClick={()=> {this.handleEdit()}}>
                                <MdEdit className="comment-edit-icon"/>
                                    Edit
                            </div>
                           <div className="comment-delete-button" onClick={() => (deleteComment(comment.id))}>
                                <RiDeleteBin5Fill className="comment-delete-icon"/>
                                Delete
                            </div>
                        </div>
                    </ul>
                </button>
            )
        }else{
            dropdownComment = null;
        };
        
        return(
            <div className="comment-outer-div">
                <img src={author.profilePhotoUrl || window.defaultProfile} className="comment-author-pic"/>
                <div className="comment-author-info">
                    <div className="comment-author-header">
                        <Link to={`/users/${comment.authorId}`} className="author-detail-link">
                            <h2 className="comment-author-name">{author.fname} {author.lname}</h2>
                            <h3 className="comment-author-bio">{author.bio}</h3>
                        </Link>
                        {dropdownComment}
                    </div>
                    {commentInput}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    postId: ownProps.postId,
    commenter: state.entities.users[ownProps.authorId]
});

const mapDispatchToProps = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    updateComment: comment => dispatch(updateComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem);