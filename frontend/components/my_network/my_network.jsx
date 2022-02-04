import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers, fetchUser } from "../../actions/user_actions";
import { fetchConnections, createConnection, deleteConnection } from "../../actions/connection_actions";
import { BsFillPeopleFill, BsPersonLinesFill,BsCalendarDate } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { RiContactsBookLine, RiPagesLine } from "react-icons/ri";
import { BiNews } from "react-icons/bi";

class MyNetwork extends React.Component {
    render(){
       const {connectedUsers} = this.props
        return(
            <div className="network-outer-div">
                 <div className="left-side-bar">
                    
                        <h2 className="manage-heading">Manage my network</h2>
                        <ul className="all-headings">
                            <li> <BsFillPeopleFill className="icons"/> Connections {connectedUsers.length}</li>
                            <li> <RiContactsBookLine className="icons"/> Contacts</li>
                            <li><BsPersonLinesFill className="icons"/> People | Follow</li>
                            <li><HiUserGroup className="icons"/> Groups</li>
                            <li><BsCalendarDate className="icons"/> Events</li>
                            <li><RiPagesLine className="icons"/> Pages</li>
                            <li><BiNews className="icons"/> Newsletters</li>

                        </ul>
                </div>
                <div className="network-inner-div">
                    <header className="my-connections-heading">
                        <h1>My Connections </h1>
                    </header>

                    {connectedUsers.map(user => (
                        <div className="each-connected-user" key={user.id}>
                            <img className="connector-pic" src={user.profilePhotoUrl || window.defaultProfile}/>
                            <div className="connector-info">
                                <Link to={`/users/${user.id}`} className="connected-users-link">
                                    <h2>{user.fname} {user.lname}</h2>
                                    <p className="connected-user-bio">{user.bio}</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

               
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    const connections = Object.values(state.entities.connections);
    let connectedUsers = connections.map(connection => (
        state.entities.users[connection.connectorId]
    ));
    return {
    currentUser: state.entities.users[state.session.id],
    connections,
    connectedUsers
    }
};

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchConnections: userId => dispatch(fetchConnections(userId)),
    createConnection: connection => dispatch(createConnection(connection)),
    deleteConnection: connectionId => dispatch(deleteConnection(connectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyNetwork);