import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUsers, fetchUser } from "../../../actions/user_actions";
import backgroundImage from '../../../../app/assets/images/homeOffice.png'
import profile from '../../../../app/assets/images/profile.png'

class Intro extends React.Component {
    constructor(props){
        super(props)
        // this.state = {

        // }
    }

    componentDidMount(){
        this.props.fetchUsers();
        this.props.fetchUser(this.props.profileUser.id);
        // connections
    }
    render(){
        return(
            <div className="user-info-div">
                <div className="background-image-div">
                    <img className="back-img" src={backgroundImage}/>
                </div>
                <div className="profile-photo-div">
                <img className="profile-img" src={profile}/>
                </div>
                <div className="user-details">
                    <header>
                        <div className="user-name">
                            <h1>{this.props.profileUser.fname} {this.props.profileUser.lname}</h1>
                            <h3>{this.props.profileUser.pronouns}</h3>
                        </div>
                        <p>edit user intro button</p>
                    </header>
                    <div className="user-bio">
                        <h2>{this.props.profileUser.bio}</h2>
                    </div>
                    <div className="user-location">
                        <h2>{this.props.profileUser.location}</h2>
                    </div>
                    <div className="user-connections">
                        <h2>connections</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    profileUser: state.entities.users[ownProps.match.params.userId]
    // connections
});

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers())
    // showmodel
    // connections
});

const IntroContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Intro));
export default IntroContainer;