import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUsers, fetchUser } from "../../../actions/user_actions";
import {fetchConnections, createConnection, deleteConnection} from '../../../actions/connection_actions'
import backgroundImage from '../../../../app/assets/images/homeOffice.png'
import profile from '../../../../app/assets/images/profile.png'
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

    componentDidMount(){
        // this.props.fetchUsers();
        this.props.fetchUser(this.props.profileUser.id);
        this.props.fetchConnections(this.props.profileUser.id).then(() => {
            this.props.connections.map(connection => {
                if(connection.connectee_id == this.props.profileUser.id) {
                    this.setState({connections: this.state.connectons + 1})
                    if(connection.connector_id == this.props.currentUser.id){
                        this.setState({connected: true})
                        this.setState({connectionId: connection.id})

                    }
                }
            })
        })
    }
    render(){
        let editButton ;

        if(this.props.currentUser && this.props.profileUser){
            if(this.props.currentUser.id === this.props.profileUser.id){
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
                    <img className="back-img" src={backgroundImage}/>
                </div>
                <div className="profile-photo-div">
                <img className="profile-img" src={profile}/>
                </div>
                <div className="user-details">
                    <header className="user-info-header">
                        <div className="user-name-div">
                            <h1 className="user-name">{this.props.profileUser.fname} {this.props.profileUser.lname}</h1>
                            <h3 className="user-pronouns">({this.props.profileUser.pronouns})</h3>
                        </div>
                        {editButton}
                    </header>
                    <div className="user-bio">
                        <h2>{this.props.profileUser.bio}</h2>
                    </div>
                    <div className="user-location">
                        <h2>{this.props.profileUser.location}</h2>
                    </div>
                    <div className="user-connections">
                        <h2>{this.state.connectons} connections</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    profileUser: state.entities.users[ownProps.match.params.userId],
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