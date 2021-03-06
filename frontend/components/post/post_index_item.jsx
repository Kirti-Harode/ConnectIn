import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchPosts } from "../../actions/post_actions";
import { BsThreeDots } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { BiLike, BiCommentDetail } from "react-icons/bi";
import CommentIndexContainer from "../comment/comment-index";
import CreateCommentContainer from "../comment/comment_form";
import {createLike, fetchLikes, deleteLike, fetchPostLikes} from '../../actions/like_actions';
import Likes from '../like/likes';
import { AiOutlineLike } from "react-icons/ai";

class PostIndexItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            open: false,
            comments: false,
            like: [],
            isLiked: false
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.hideComments = this.hideComments.bind(this)
        this.revealComments = this.revealComments.bind(this)
    }
   
    handleOpen(){
        this.setState({open: true});
    }

    handleClose(){
        this.setState({open: false});
    }

    hideComments() {
        this.setState({comments: false});
    }

    revealComments(){
        this.setState({comments: true});
    }


    render(){
        const { currentUser, post, openModal, deletePost, author } = this.props;

        let likes = this.props.likes.filter(like => like.likeableId === post.id);

        let likeCount;
        if(likes.length > 0){
            likeCount = (
            <div className="post-likes-count">
                <div className="num-likes">
                    {likes.length}
                </div>
                <div className="like-count">
                    <AiOutlineLike className="num-like-icon"/>
                </div>
            </div>)
        }else{
            likeCount = null;
        };
        
        let commentCount;
        if(this.props.comments.length > 0){
            commentCount = (
                <div className="comment-counts" onClick={this.revealComments}>
                    {this.props.comments.length}
                    <h2>comments</h2>
                </div>
            )
        }else{
            commentCount = null;
        };

        let dropdown_post;
        if(currentUser.id == post.authorId){
            dropdown_post = (
                <button className="dropdown-post-button" onFocus={this.handleOpen} onBlur={this.handleClose}>
                    <BsThreeDots  className="post-three-dots"/>
                    <ul className={this.state.open ? "reveal-dropdown" : "hide-dropdown" }>
                        <div className="post-buttons">
                            <div className="post-edit-button" onClick={() => (openModal('editPost', post.id))}>
                                <MdEdit className="post-edit-icon"/>
                                <h2>Edit Post</h2>
                            </div>
                            <div className="post-delete-button" onClick={() => (deletePost(post.id))}>
                                <RiDeleteBin5Fill className="post-delete-icon"/>
                                <h2>Delete Post</h2>
                            </div>
                        </div>
                    </ul>
                </button>
            )
        }
        else{
            dropdown_post = null;
        }

        let showComments;
        if(this.state.comments){
            showComments = (
                <div>
                    <CommentIndexContainer postId={post.id}/>
                    <CreateCommentContainer comments={this.props.comments} postId={post.id}/>
                </div>
            )
        }else{
            showComments = null;
        }

        let showLikes = (
            <div>
                <Likes likes={this.props.likes} postId={post.id}/>
            </div>
        )
      
        return(
            <div className="post-index-item-div">
                <div className="post-author-div">
                    <img src={author.profilePhotoUrl || window.defaultProfile} className="post-creator-pic"/>
                    <div className="post-author-info">
                       <Link to={`/users/${post.authorId}`}>
                           <h2 className="author-name">{author.fname} {author.lname}</h2>
                           <h3 className="author-bio">{author.bio}</h3>
                       </Link>
                    </div>
                    {dropdown_post}
                </div>
                <div className="post-body-div">
                     <p className="post-body">{post.body}</p>
                    <div>
                        <img src={this.props.post.mediaUrl} className="post-media" />
                    </div>
                </div>
                <div className="cmt-like-count-div">
                    {likeCount}
                    {commentCount}
                </div>
                <div className="like-comment-div">
                    {/* <div className={this.state.like.length != 0 ? "post-like-div liked" : 'post-like-div not-liked'} onClick={this.handleLikes}>
                        <BiLike className="post-like-icon"/>
                        <h3 className="like-heading">Like</h3>
                    </div> */}
                    {showLikes}
                    <div className="comment-div" onClick={this.state.comments ? this.hideComments : this.revealComments}>
                        <BiCommentDetail className="comment-icon"/>
                        <h3 className="comment-heading"> Comment </h3>
                    </div>
                </div>
                {showComments}
            </div>
        )
    }
}


const mapStateToProps =  (state, ownProps) =>({
    currentUser: state.entities.users[state.session.id],
    comments: Object.values(state.entities.comments).filter(comment => comment.postId === ownProps.post.id),
    likes: Object.values(state.entities.likes),//.filter(like => like.likeable_id === ownProps.post.id),
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchPostLikes: (likeable_id) => dispatch(fetchPostLikes(likeable_id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);

