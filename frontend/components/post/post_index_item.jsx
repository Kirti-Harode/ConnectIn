import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchPosts } from "../../actions/post_actions";

class PostIndexItem extends React.Component{
   
    render(){
        return(
            <div className="post-index-item-div">
                <div>
                    {/* <h1>this is from postIndexItem</h1> */}
                    <p>{this.props.post.body}</p>
                    {/* <p>{this.props.likes}</p> */}
                    <div>
                        <img src={this.props.post.mediaUrl} className="post-media" />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps =  (state, ownProps) =>({
    comments: Object.values(state.entities.comments),//.filter(comment => comment.post_id === ownProps.post.id),
    likes: Object.values(state.entities.likes),//.filter(like => like.likeable_id === ownProps.post.id),
    liked: Object.values(state.entities.likes)//.filter(like => like.liker_id === state.session.id)
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);

