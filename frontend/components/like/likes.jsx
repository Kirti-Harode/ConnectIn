import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { BiLike } from "react-icons/bi";

import {createLike, fetchLikes, deleteLike, fetchPostLikes} from '../../actions/like_actions';

class Likes extends React.Component{
    constructor(props){
        super(props)
        this.handleLikes = this.handleLikes.bind(this)
    }
    componentDidMount(){
        this.props.fetchLikes()
    }

    handleLikes(e){
        e.preventDefault()
        let liked = this.props.likes.filter(like => like.likerId === this.props.currentUser.id && like.likeableId === this.props.postId)

        if(liked.length === 0){
            this.props.createLike({
                likeable_id: this.props.postId,
                likeable_item: 'post'
            })
        }else{
            this.props.deleteLike(liked[0].id)
        }
    }

    render(){
        let liked = this.props.likes.filter(like => like.likerId === this.props.currentUser.id && like.likeableId === this.props.postId)
        return(
            <div className={liked.length != 0 ? "post-like-div liked" : 'post-like-div not-liked'} onClick={this.handleLikes}>
                    <BiLike className="post-like-icon"/>
                    <h3 className="like-heading">Like</h3>
            </div>
        )
    }
}

const mapStateToProps =  (state, ownProps) =>({
    currentUser: state.entities.users[state.session.id],
    liker: state.session.id,
    likes: Object.values(state.entities.likes),//.filter(like => like.likeable_id === ownProps.post.id),
    
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchPostLikes: (likeable_id) => dispatch(fetchPostLikes(likeable_id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Likes);