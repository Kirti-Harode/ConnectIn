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
                
                <div className="left-bottom-div">
                    <a className="learn-more" href="https://github.com/Kirti-Harode" target="_blank" >
                        <h2>Learn about my other Projects</h2>
                    </a>
                    <a className="pro-link1" href="https://kirti-harode.github.io/SaveTheEarth/" target="_blank" >
                        <h2>Save The Earth</h2>
                    </a>
                        
                    <a className="pro-link2" href="https://mevert.herokuapp.com/#/" target="_blank" >
                        <h2>MEvert</h2>
                    </a>
                </div>
                <div className="right-side-creator-div">
                        {/* <div className="dev-info">
                            <img src={window.myPic} className="myPic"/>
                            <h2>Hello, I'm Kirti Harode</h2>
                        </div> */}
                    <div className="project-details">
                        <h1>Project Description: </h1>
                        <p> ConnectIn is a Clone of a professional networking site LinkedIn, 
                            In connectIn users can make their profile, edit their profile information, connect with other users, 
                            create posts, and comment/Like each other's posts.
                        </p>
                        <div className="tech-implemented">
                            <h2>Technologies Implemented: </h2>
                            <ul>
                                <li> Backend: <p> Ruby on Rails </p></li>
                                <li> Frontend: <p> React, Redux </p></li>
                                <li> Database: <p> PostgreSQL </p></li>
                                <li> Storage: <p> AWS </p></li>
                                <li> Other: <p> jQuery, JBuilder, HTML, CSS </p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="creator-div">
                        {/* <h1>Developer: </h1>
                        <div className="dev-info">
                            <img src={window.myPic} className="myPic"/>
                            <h2>Kirti Harode</h2>
                        </div> */}
                        <div className="creator-info-links">
                            <a href="https://github.com/Kirti-Harode" target="_blank" >
                                <BsGithub className="github"/>
                                <h3>Github</h3>
                            </a>
                            <a href="https://kirtibala-harode.netlify.app/" target="_blank" >
                                <BsPersonCircle className="portfolio"/>
                                <h3>Portfolio</h3>
                            </a>
                            <a href="https://www.linkedin.com/in/kirti-harode-02b35b1b5/" target="_blank" >
                                <BsLinkedin className="linkedin"/>
                                <h3>LinkedIn</h3>
                            </a>
                            <a href="https://angel.co/profile/edit/overview" target="_blank" >
                                <FaAngellist className="angellist"/>
                                <h3>AngelList</h3>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}



const mapStateToProps = state => {
    const currentUser = state.entities.users[state.session.id]
    return {
    currentUser,
    posts: state.entities.posts,
    comments: state.entities.comments,
    likes: Object.values(state.entities.likes),
    connections: Object.values(state.entities.connections).filter(connection => connection.connecteeId === currentUser.id)
}};

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
