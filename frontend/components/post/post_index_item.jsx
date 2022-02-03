import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchPosts } from "../../actions/post_actions";
import { BsThreeDots } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";

class PostIndexItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            open: false,
            comments: false
            // about likes
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

    handleLikes(){

    }

    render(){
        const { currentUser, post, openModal, deletePost, author } = this.props;

        let dropdown_post;
        if(currentUser.id == post.authorId){
            dropdown_post = (
                <button className="dropdown-post-button" onFocus={this.handleOpen} onBlur={this.handleClose}>
                    <BsThreeDots  className="post-three-dots"/>
                    <ul className={this.state.open ? "reveal-dropdown" : "hide-dropdown"}>
                        <div className="post-buttons">
                            <div className="post-edit-button" onClick={() => (openModal('editPost', post.id))}>
                                <MdEdit className="post-edit-icon"/>
                                Edit Post
                            </div>
                            <div className="post-delete-button" onClick={() => (deletePost(post.id))}>
                                <RiDeleteBin5Fill className="post-delete-icon"/>
                                Delete Post
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
                    <h1>Add commentform here</h1>
                    <h2>add comment index container here</h2>
                </div>
            )
        }else{
            showComments = null;
        }
      
        return(
            <div className="post-index-item-div">
                <div className="post-author-div">
                    <img src={author.profilePhotoUrl || window.defaultProfile} className="post-creator-pic"/>
                    <div className="post-author-info">
                       <Link to={`/users/${post.authorId}`}>
                           <h2>{author.fname} {author.lname}</h2>
                           <h2>{author.bio}</h2>
                       </Link>
                    </div>
                    {dropdown_post}
                </div>
                <div className="post-body-div">
                     <p>{post.body}</p>
                    <div>
                        <img src={this.props.post.mediaUrl} className="post-media" />
                    </div>
                </div>
                <div className="comment-div" onClick={this.state.comments ? this.hideComments : this.revealComments}>
                    <FaRegCommentDots className="comment-icon"/>
                    <h3> Comment </h3>
                </div>
                {/* <BsThreeDots  className="comment-three-dots"/> */}
                {showComments}
            </div>
        )
    }
}


const mapStateToProps =  (state, ownProps) =>({
    comments: Object.values(state.entities.comments),//.filter(comment => comment.post_id === ownProps.post.id),
    likes: Object.values(state.entities.likes),//.filter(like => like.likeable_id === ownProps.post.id),
    liked: Object.values(state.entities.likes),//.filter(like => like.liker_id === state.session.id),
   
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);

