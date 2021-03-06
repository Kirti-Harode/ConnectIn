import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { fetchUsers, fetchUser } from "../../../actions/user_actions";
import {fetchConnections, createConnection, deleteConnection} from '../../../actions/connection_actions'
// import backgroundImage from '../../../../app/assets/images/homeOffice.png'
// import profile from '../../../../app/assets/images/profile.png'
import { MdCreate } from "react-icons/md";
import { openModal } from "../../../actions/modal_actions";
import { BsGithub, BsPersonCircle, BsLinkedin } from "react-icons/bs";
import { FaAngellist } from "react-icons/fa";

class Intro extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // connected: false,
            // connections: this.props.connectedUsers.length,
            // connectionId: null,
            addSecClicked: false,
            moreClicked: false,
            counter : 0,
            otherUser: this.props.otherUser,
            otherUserId: this.props.otherUserId
            // otherUserObj: this.props.allUsers[this.props.otherUserId]
        }
        // debugger
        // console.log(this.state.otherUserObj)
        this.handleConnection = this.handleConnection.bind(this);
        this.removeConnection = this.removeConnection.bind(this);
        this.handleAddSecOpen = this.handleAddSecOpen.bind(this);
        this.handleAddSecClose = this.handleAddSecClose.bind(this);
        this.handleMoreOpen = this.handleMoreOpen.bind(this);
        this.handleMoreClose = this.handleMoreClose.bind(this);
        // this.fetchUser = this.fetchUser.bind(this)
    }

    // fetchUser(){
    //     let user = this.props.fetchUser(this.state.otherUserId)
    // }

    handleAddSecOpen(){
        this.setState({addSecClicked: true});
    }

    handleAddSecClose(){
        this.setState({addSecClicked: false});
    }

    handleMoreOpen(){
        this.setState({moreClicked: true});
    }

    handleMoreClose(){
        this.setState({moreClicked: false});
    }

    handleConnection(e){
        e.preventDefault();
        this.props.createConnection({
            connectee_id: this.props.currentUser.id, 
            connector_id: this.state.otherUserId, 
            accepted: true
        })
    }

    removeConnection(e){
        e.preventDefault();
        let connectionId;
        this.props.connections.map(connection => {
            if(connection.connecteeId === this.props.currentUser.id  && connection.connectorId === this.state.otherUserId){
                connectionId = connection.id
                // this.setState({connections: this.state.connections - 1})
            }
        })
        this.props.deleteConnection(connectionId)
    }

    componentDidMount(){
        this.props.fetchUser(this.state.otherUserId);
        this.props.fetchConnections(this.props.currentUser.id)
        this.props.fetchUsers();
        // .then(() => {
            // this.props.connections.map(connection => {
                //     if(connection.connectee_id === this.props.otherUser.id) {
                    //         this.setState({connections: this.state.connectons + 1})
                    //         if(connection.connector_id === this.props.currentUser.id){
                        //             this.setState({connected: true})
                        //             this.setState({connectionId: connection.id})
                        //         }
                        //     }
                        // })
                        // })
    }

    componentDidUpdate(preprops) {
        // console.log("didUpdate", preprops)
        // console.log(this.props)
        if(this.state.counter < 2) {
            // debugger
            if (preprops.otherUser === undefined) {
                    this.setState({counter: this.state.counter + 1})
                this.props.fetchUser(this.state.otherUserId)
                this.setState({otherUser: preprops.otherUser})
                // .then(this.props.fetchConnections(this.props.otherUser.id))
                // .then(this.props.fetchAllAbouts(this.props.otherUser.id))
                // .then(this.props.fetchAllEducations(this.props.otherUser.id))
                // .then(this.props.fetchAllExperiences(this.props.otherUser.id))           
            }
        }
    }
   
    render(){
        const {currentUser, otherUser} = this.props;
        // if(otherUser === undefined){
        //     this.props.fetchUser(otherUser.id)
        // }
        // console.log(currentUser.id)
        // console.log(this.state.otherUserId)
        if(this.props.otherUser === undefined){
            return null
        }

        let connectedUsers = []
        this.props.connections.map(connection => {
            if(currentUser.id === this.state.otherUserId){
                if(connection.connecteeId === this.state.otherUserId){
                    connectedUsers.push(connection)
                }
            }
            else{
                if(connection.connectorId === this.state.otherUserId){
                    connectedUsers.push(connection)
                }
            }
            
        })
        let options ;
            if(currentUser.id === this.state.otherUserId){
                options = (
                <div className="options">
                    <button  className="add-to-profile" onClick={this.handleAddSecOpen} onBlur={this.handleAddSecClose}>
                        <h2 > Add Profile Section</h2>
                        <ul className={this.state.addSecClicked ? "reveal-profile-dropdown" : "hide-profile-dropdown"}>
                            <h1>Add to profile</h1>
                            <li onClick={()=>this.props.openModal('createEducation')} >Education</li>
                            <li onClick={(()=>this.props.openModal('createExperience'))} >Experience</li>
                        </ul>
                    </button>
                    <button className="more-button" onFocus={this.handleMoreOpen} onBlur={this.handleMoreClose} >
                        <h3 > More </h3 >
                        <ul className={this.state.moreClicked ? "reveal-more-dropdown" : "hide-more-dropdown" }>
                            <h1> Other Projects </h1>
                            <a href="https://github.com/Kirti-Harode" target="_blank" > 
                                <p> Github </p>
                                <BsGithub className='git-icon'/>
                            </a>

                            <a href="https://kirti-harode.github.io/SaveTheEarth/" target="_blank" > 
                                <p> Save The Earth </p>
                            </a>

                            <a href="https://mevert.herokuapp.com/#/" target="_blank" className='a-tags'> 
                                <p> MEvert  </p> 
                            </a>
                    
                        </ul>
                    </button>
                    
                </div>
                )
            }
            else { 
                    if(this.props.allConnected.includes(this.state.otherUserId)){
   
                       options = (
                        <div className="options-disconnect">
                            <h2 onClick={this.removeConnection}>Disconnect</h2>
                        </div>
                        )
                    }
                    else {

                        options = (
                        <div className="options-connect">
                            <h2 onClick={this.handleConnection}>Connect</h2>
                        </div>
                        )
                    }
            }
           

        let editButton ;
        if(this.props.currentUser && this.props.otherUser){
            if(this.props.currentUser.id === this.state.otherUserId){
                editButton = (<div className="edit-button-div" onClick={() => {return this.props.openModal('editUserIntro', this.props.currentUser.id)}}>
                    <MdCreate className="edit-user-info"/>
                </div>)
            }
            else{
                editButton = null;
            }
        }

        return(
            <div className="user-info-div">
                <div className="background-image-div">
                    <img className="back-img" src={ window.backgroundImg}/>
                </div>
                <div className="profile-photo-div">
                    <img className="profile-img" src={ this.props.otherUser.profilePhotoUrl || window.defaultProfile}/>
                </div>
                <div className="user-details">
                    <header className="user-info-header">
                        <div className="user-name-div">
                            <h1 className="user-name">{this.props.otherUser.fname} {this.props.otherUser.lname}</h1>
                            <h3 className="user-pronouns">({this.props.otherUser.pronouns})</h3>
                        </div>
                        {editButton}
                    </header>
                    <div className="user-bio">
                        <h2>{this.props.otherUser.bio}</h2>
                    </div>
                    <div className="user-location">
                        <h2>{this.props.otherUser.location}</h2>
                    </div>
                    <div className="user-connections">
                        <Link to='/mynetwork' className="link-to-connections">
                            <h2>{connectedUsers.length} connections</h2>
                        </Link>
                    </div>
                    {options}                  
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // debugger
    // console.log(ownProps)
   const otherUserId = parseInt(ownProps.match.params.userId);
    const otherUser = state.entities.users[ownProps.match.params.userId];
    const connections = Object.values(state.entities.connections);
    const currentUser = state.entities.users[state.session.id];
    // const allUsers = state.entities.users
    
    let allConnected = []
    connections.map(connection => {
        if(connection.connecteeId === currentUser.id){
            allConnected.push(connection.connectorId)
        }
    })
    return{
        otherUser,
        connections,
        // connectedUsers,
        allConnected,
        currentUser,
        otherUserId
        // allUsers
}};

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchConnections: userId => dispatch(fetchConnections(userId)),
    createConnection: connection => dispatch(createConnection(connection)),
    deleteConnection: connectionId => dispatch(deleteConnection(connectionId)),
    openModal: (modal, id) => dispatch(openModal(modal, id))
   
});

const IntroContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Intro));
export default IntroContainer;