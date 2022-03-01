import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers, fetchUser } from "../../actions/user_actions";
import { fetchConnections, createConnection, deleteConnection } from "../../actions/connection_actions";
import { BsFillPeopleFill, BsPersonLinesFill,BsCalendarDate } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { RiContactsBookLine, RiPagesLine } from "react-icons/ri";
import { BiNews } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";

class ConnectInUsers extends React.Component{

    constructor(props){
        super(props)
        this.handleConnection = this.handleConnection.bind(this);
        this.removeConnection = this.removeConnection.bind(this);
    }
    handleConnection(userId){
       return e => { e.preventDefault()
            this.props.createConnection({
                connectee_id: this.props.currentUser.id, 
                connector_id: userId, 
                accepted: true
            })
        }
    }

    removeConnection(userId){
       return e => { e.preventDefault()
        let connectionId;
        
        this.props.connections.map(connection => {
            if(connection.connecteeId === this.props.currentUser.id  && connection.connectorId === userId){
                connectionId = connection.id
                // this.setState({connections: this.state.connections - 1})
            }
        })
        // if(this.props.allConnected.includes())
        this.props.deleteConnection(connectionId)
       }
    }
    componentDidMount(){
        this.props.fetchUsers();
        this.props.fetchConnections(this.props.currentUser.id);
    }

    render(){
        const {users, connectedUsers} = this.props
        
        return(
            <div className="all-network-outer-div">
                   <div className="left-side-bar">
                     
                        <h2 className="manage-heading">Manage my network</h2>
                        <ul className="all-headings">
                            <li> 
                                <Link to='/mynetwork' className="mynetwork-link">
                                    <BsFillPeopleFill className="icons"/> Connections {connectedUsers.length}
                                </Link>
                            </li>
                             {/* <li> <BsFillPeopleFill className="icons"/> Connections {connectedUsers.length}</li> */}
                             <li> <RiContactsBookLine className="icons"/> Contacts</li>
                             <li><BsPersonLinesFill className="icons"/> People | Follow</li>
                             <li><HiUserGroup className="icons"/> Groups</li>
                             <li><BsCalendarDate className="icons"/> Events</li>
                             <li><RiPagesLine className="icons"/> Pages</li>
                             <li><BiNews className="icons"/> Newsletters</li>
 
                        </ul>
                    </div>
                    <div className="users-grid-div">  
                            <header className="connections-heading">
                                <h1> See who's on ConnectIn </h1>
                            </header>                 
                        <div className="all-network-inner-div">
                            
    
                            {users.map(user => (
                                <div className="all-users-div" key={user.id}>
                                    <div className="all-users-back-pic"> 
                                        <img className="back-img" src={window.backgroundImg}/>
                                    </div>
                                    <img className="each-user-pic" src={user.profilePhotoUrl || window.defaultProfile}/>
                                    <div className="user-info">
                                        <Link to={`/users/${user.id}`} className="user-link">
                                            <h2 className="all-user-name">{user.fname} {user.lname}</h2>
                                            <p className="all-user-bio">{user.bio}</p>
                                        </Link>
                                    </div>
                                    
                                    {this.props.allConnected.includes(user.id) ? (
                                        <div className="disconnect">
                                            <h2 onClick={this.removeConnection(user.id)} >Disconnect</h2>
                                        </div> 
                                    ):(
                                        <div className="connect">
                                                <h2 onClick={this.handleConnection(user.id)}>Connect</h2>
                                        </div>
                                    )
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    const currentUser = state.entities.users[state.session.id];
    const connections = Object.values(state.entities.connections);
    let connectedUsers = connections.map(connection => (
        state.entities.users[connection.connectorId]
    ));

    let allConnected = []
    connections.map(connection => {
        if(connection.connecteeId === currentUser.id){
            allConnected.push(connection.connectorId)
        }
    })
    // console.log(allConnected)
    return {
        connections,
        currentUser,
        connections,
        connectedUsers,
        allConnected,
        users: Object.values(state.entities.users).filter(user => (user.id !== currentUser.id)),
        // otherUser: state.entities.users[ownProps.match.params.userId],

    }
};

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchConnections: userId => dispatch(fetchConnections(userId)),
    createConnection: connection => dispatch(createConnection(connection)),
    deleteConnection: connectionId => dispatch(deleteConnection(connectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectInUsers);