import React from "react";
import { connect } from "react-redux";
import {fetchUser, fetchUsers} from '../../actions/user_actions'
import { fetchComments } from "../../actions/comment_actions";
import { fetchConnections } from "../../actions/connection_actions";
import { fetchPosts } from "../../actions/post_actions";
import { openModal } from "../../actions/modal_actions";
import {fetchLikes} from '../../actions/like_actions';
import PostIndexConatiner from '../post/post_index';

class Feed extends React.Component{
    componentDidMount(){
        // this.props.fetchPosts()
        this.props.fetchLikes()
    }

    render (){
        return(
            <div className="feed-div">
                <div className="feed-user-info">
                    <img src={window.defaultProfile} className="user-profile-feed"/>
                    <h1>{this.props.currentUser.fname} {this.props.currentUser.lname}</h1>
                </div>
                <div>
                    <PostIndexConatiner />

                </div>
                <div className="feed-creator-div">
                    <div>
                        <h1>Creator: Kirti Harode</h1>
                        <h2>Skills: React, Redux</h2>
                        <h3>Links: </h3>
                    </div>
                </div>
                
            </div>
        )
    }
}



const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    comments: state.entities.comments,
    likes: Object.values(state.entities.likes),
    connections: state.entities.connections
});

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchConnections: (userId) => dispatch(fetchConnections(userId)),
    fetchLikes: ()=> dispatch(fetchLikes()),
    openModal: (modal, id) => dispatch(openModal(modal, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
