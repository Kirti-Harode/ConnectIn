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
        // this.props.fetchLikes()
        this.props.fetchUsers()
        this.props.fetchConnections()
    }

    render (){
        const { currentUser, openModal, connections } = this.props;
        return(
            <div className="feed-div">
                <div className="feed-new-post-div">
                    <div className="feed-new-post-form-div">
                        <img className="user-profile-feed" src={currentUser.profilePhotoUrl || window.defaultProfile }/>
                        <button onClick={() => openModal('createPost')} className="start-new-post-button">start a post</button>
                    </div>
                </div>

                <PostIndexConatiner />

                <div className="left-side-info-div">
                    <div className="user-background-pic">
                        <img className="feed-back-img" src={window.backgroundImg}/>
                    </div>
                    <div className="user-mini">
                        <img src={window.defaultProfile || currentUser.profilePhotoUrl } className="user-profile-feed"/>
                        <h1>{currentUser.fname} {currentUser.lname}</h1>
                        <h2>{currentUser.bio}</h2>
                    </div>
                    <div className="user-connections-info">
                        <h3>Connections {connections.length} </h3> 
                    </div>
                </div>
                <div className="right-side-creator-div">
                    {/* <img src=''/> */}
                    <h1>My photo goes here</h1>
                    <h1>Kirti Harode</h1>
                    <div className="creator-info-links">
                        <a href="">
                            <h3>Portfolio</h3>
                        </a>
                        <a href="">
                            <h3>Github</h3>
                        </a>
                        <a href="">
                            <h3>LinkedIn</h3>
                        </a>
                        <a href="">
                            <h3>AngleList</h3>
                        </a>
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
