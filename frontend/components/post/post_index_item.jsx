import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchPosts } from "../../actions/post_actions";
import { BsThreeDots } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import CommentIndexContainer from "../comment/comment-index";
import CreateCommentContainer from "../comment/comment_form";
import {createLike, fetchLikes, deleteLike} from '../../actions/like_actions'
import { AiOutlineLike } from "react-icons/ai";
class PostIndexItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            open: false,
            comments: false,
            like: []
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.hideComments = this.hideComments.bind(this)
        this.revealComments = this.revealComments.bind(this)
        this.handleLikes = this.handleLikes.bind(this)
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

    componentWillReceiveProps(){
        this.setState({
            like: this.props.liked,
        })
    }
    componentDidUpdate(prevProps){
        if (this.props.likes.length !== prevProps.likes.length) {
            this.props.fetchLikes();
        } 
    }

    handleLikes(e){
        e.preventDefault()
        if(this.state.like.length === 0){
            this.props.createLike({
                likeable_id: this.props.post.id,
                likeable_item: 'post'
            })
        }else{
            this.props.deleteLike(this.props.liked[0].id)
        }
    }
    componentDidMount(){
        // this.props.fetchPosts();
        this.props.fetchLikes()
    }

    render(){
        const { currentUser, post, openModal, deletePost, author } = this.props;

        let likes = this.props.likes.filter(like => like.likeableId === post.id);

        let likeCount;
        if(likes.length > 0){
            likeCount = (
            <div className="post-likes-count">
                <div className="like-count">
                    <AiOutlineLike className="num-like-icon"/>
                </div>
                <div className="num-likes">
                    {likes.length}
                </div>
            </div>)
        }else{
            likeCount = null;
        };
        
            // console.log(this.props.comments)
        let commentCount;
        if(this.props.comments.length > 0){
            commentCount = (
                <div className="comment-counts" onClick={this.revealComments}>
                    {this.props.comments.length}
                    comments
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
                    <CommentIndexContainer postId={post.id}/>
                    <CreateCommentContainer comments={this.props.comments} postId={post.id}/>
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
                    <div className={this.state.like.length != 0 ? "post-like-div liked" : 'post-like-div not-liked'} onClick={this.handleLikes}>
                        <BiLike className="post-like-icon"/>
                        <h3 className="like-heading">Like</h3>
                    </div>
                    <div className="comment-div" onClick={this.state.comments ? this.hideComments : this.revealComments}>
                        <FaRegCommentDots className="comment-icon"/>
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
    liker: state.session.id,
    likes: Object.values(state.entities.likes),//.filter(like => like.likeable_id === ownProps.post.id),
    liked: Object.values(state.entities.likes).filter(like => like.likerId === state.session.id && like.likeableId === ownProps.post.id),
   
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLikes: () => dispatch(fetchLikes())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);

