import React from "react";
import { connect } from "react-redux";
import {fetchUser, fetchUsers} from '../../actions/user_actions'
import { fetchComments } from "../../actions/comment_actions";
import { fetchConnections } from "../../actions/connection_actions";
import { fetchPosts } from "../../actions/post_actions";
import { openModal } from "../../actions/modal_actions";
import {fetchLikes} from '../../actions/like_actions';
import PostIndexConatiner from '../post/post_index';
import { BsGithub, BsPersonCircle, BsLinkedin } from "react-icons/bs";
import { FaAngellist } from "react-icons/fa";
import { Link } from "react-router-dom";

class Feed extends React.Component{
    componentDidMount(){
        this.props.fetchPosts()
        this.props.fetchLikes()
        this.props.fetchUsers()
        this.props.fetchConnections(this.props.currentUser.id)
    }

    render (){
        const { currentUser, openModal, connections } = this.props;
        return(
            <div className="feed-div">
                <div className="feed-new-post-div">
                    <div className="feed-new-post-form-div">
                        <img className="user-profile-feed" src={currentUser.profilePhotoUrl|| window.defaultProfile }/>
                        <button onClick={() => openModal('createPost')} className="start-new-post-button">start a post</button>
                    </div>
                </div>

                <PostIndexConatiner />

                <div className="left-side-info-div">
                    <div className="user-background-pic">
                        <img className="feed-back-img" src={window.backgroundImg}/>
                    </div>
                    <div className="user-mini">
                        <img src={currentUser.profilePhotoUrl || window.defaultProfile } className="user-profile-feed2"/>
                        <Link className="mini-user-link" to={`/users/${currentUser.id}`}>
                            <h1>{currentUser.fname} {currentUser.lname}</h1>
                            <h2>{currentUser.bio}</h2>
                        </Link>
                    </div>
                    <div className="user-connections-info">
                        <Link to='/mynetwork' className="feed-conections">Connections {connections.length} </Link> 
                    </div>
                </div>
                <div className="right-side-creator-div">
                    <img src={window.myPic} className="myPic"/>
                    
                    <h1>Kirti Harode</h1>
                    <div className="creator-info-links">
                        <a href="">
                            <BsPersonCircle className="portfolio"/>
                            <h3>Portfolio</h3>
                        </a>
                        <a href="https://github.com/Kirti-Harode">
                            <BsGithub className="github"/>
                            <h3>Github</h3>
                        </a>
                        <a href="https://www.linkedin.com/in/kirti-harode-02b35b1b5/">
                            <BsLinkedin className="linkedin"/>
                            <h3>LinkedIn</h3>
                        </a>
                        <a href="">
                            <FaAngellist className="angellist"/>
                            <h3>AngelList</h3>
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
    connections: Object.values(state.entities.connections)
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
