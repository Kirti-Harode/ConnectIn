import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUsers, fetchUser } from "../../../actions/user_actions";
import {fetchConnections, createConnection, deleteConnection} from '../../../actions/connection_actions'
// import backgroundImage from '../../../../app/assets/images/homeOffice.png'
// import profile from '../../../../app/assets/images/profile.png'
import { MdCreate } from "react-icons/md";
import { openModal } from "../../../actions/modal_actions";
class Intro extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            connected: false,
            connectons: 0,
            connectionId: null
        }
        // this.handleConnection = this.handleConnection.bind(this);
    }

    // handleConnection(e){
    //     e.preventDefault();

    // }
    // componentDidUpdate(){
    //     this.props.fetchUser(this.props.otherUser.id)
    // }
    // componentWillUnmount(){
    //     this.props.fetchUser(this.props.match.params.userId)
    // }
    // componentDidUpdate(prevProps) {
    //     if (this.props.otherUser.id !== prevProps.otherUser.id) {
    //         this.props.fetchUser(this.props.match.params.userId);
    //     }
    // }
    componentDidMount(){
        // debugger
        this.props.fetchUsers();
        this.props.fetchUser(this.props.otherUser.id)
        // .then(
            this.props.fetchConnections(this.props.otherUser.id).then(() => {
                this.props.connections.map(connection => {
                    if(connection.connectee_id == this.props.otherUser.id) {
                        this.setState({connections: this.state.connectons + 1})
                        if(connection.connector_id == this.props.currentUser.id){
                            this.setState({connected: true})
                            this.setState({connectionId: connection.id})
    
                        }
                    }
                })
            })
        // );
        
    }
    render(){
        // debugger
        // if(this.props.otherUser === undefined) return null;
        if(this.props.connections.length === 0) return null;

        const { otherUser, currentUser, connections} = this.props;
        console.log(connections);
        console.log(otherUser.id);

        let editButton ;
        if(currentUser && otherUser){
            if(currentUser.id === otherUser.id){
                editButton = (<div className="edit-button-div" onClick={() => {return this.props.openModal('editUserIntro', currentUser.id)}}>
                    <MdCreate className="edit-user-info"/>
                </div>)
            }
            else{
                editButton = null;
            }
        }

        let options ;
            if(currentUser.id === otherUser.id){
                console.log("in my profile")
                console.log(currentUser.id)
                options = (
                <div className="options">
                    <h2> Add Profile Section</h2>
                    <h3> More</h3>
                </div>
                )
            }
            else {
                connections.map(connection => {
                    if(connection.connecteeId === otherUser.id  && connection.connectorId === currentUser.id){
                        console.log("in connected user's profile")
                        console.log(`currentUser ${currentUser.id}`)
                        console.log("otherUser " + otherUser.id)
                        
                        options = (
                        <div className="options">
                            <h2>Message</h2>
                            <h2>Disconnect</h2>
                        </div>
                        )
                    }else{
                        console.log("in not connected user's profile")
                        console.log(`currentUser ${currentUser.id}`)
                        console.log("otherUser " + otherUser.id)
                        options = (
                        <div className="options">
                            <h2>Connect</h2>
                        </div>
                        )
                    }
                })
            
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
                        <h2>{this.props.connections.length} connections</h2>
                    </div>
                    {options}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    otherUser: state.entities.users[ownProps.match.params.userId],
    connections: Object.values(state.entities.connections)
    
});

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