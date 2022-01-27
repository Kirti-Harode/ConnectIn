import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import smallLogo from '../../../app/assets/images/in_alpha.png'
import { FaHome, FaUserFriends, FaUserGraduate, FaSearch, FaBell} from "react-icons/fa";
import {IoIosBriefcase } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";

class LoggedIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {hidden: true}
        this.hiddenFalse = this.hiddenFalse.bind(this)
        this.hiddenTrue = this.hiddenTrue.bind(this)
    }

    hiddenFalse(){
        this.setState({hidden: false})
    }

    hiddenTrue(){
        this.setState({hidden: true})
    }

    render(){
        return(
            <div className='splash-header'>
                
                <nav className='left-bar'>
                    <Link to='/'>
                        <div className='small-logo'>
                            <img className='small-logo-img' src={smallLogo}/>
                        </div>
                    </Link>
                    <div className='search-container'>
                        <FaSearch className='search-icon'/>
                        <input id='search-bar' type="text" placeholder='Search' ></input>
            
                    </div>
                </nav>   

                <nav className='right-nav'>
                    <Link to='/feed'>
                        <div className='home'>
                            <FaHome className='Home-icon'/>
                            <h1 className='home-heading'>Home</h1>
                        </div>
                    </Link>
                    
                    <Link to='/mynetwork'>
                        <div className='network'>
                            <FaUserFriends className='network-icon' />
                            <p className='network-heading'>My Network</p>
                        </div>
                    </Link>

                    <Link to='/jobs'>
                        <div className='jobs'>
                            <IoIosBriefcase className='jobs-icon'/>
                            <h2 className='jobs-heading'>Jobs</h2>
                        </div>
                    </Link>

                    <Link to='/message'>
                        <div className='message'>
                            <IoChatboxEllipses className='message-icon'/>
                            <h2 className='message-heading'>Messaging</h2>
                        </div>
                    </Link>

                    <Link to='/notification'>
                        <div className='notification'>
                            <FaBell className='notification-icon'/>
                            <h2 className='notification-heading'>Notifications</h2>
                        </div>
                    </Link>

                    <div className='me-dropdown'>
                        <button className='dropdown-button' onFocus={this.hiddenFalse} onBlur={this.hiddenTrue}>
                            <div className='profile-icon-div'>
                                <FaUserGraduate className='profile-icon'/>
                                <h2 className='me-heading'>Me</h2>
                            </div>
                            <ul className={this.state.hidden ? 'hidden-dropdown' : 'reveal-dropdown'} onClick={e => e.stopPropagation()} >
                                <div className='dropdown-top'>
                                    <div className='user-profile-div'>
                                        <p>User Profile pic goes here</p>
                                        <div className='user-details'>
                                            <h2>{this.props.currentUser.fname} {this.props.currentUser.lname}</h2>
                                            <h3>User bio</h3>
                                        </div>
                                    </div>
                                    <div className='view-profile-button' >
                                    
                                        <p onClick={
                                            ()=>{this.props.history.push(`/users/${this.props.currentUser.id}`); 
                                            this.hiddenTrue()
                                        }} 
                                        className='view-profile'>View Profile</p>
                                    </div>
                                </div>
                                <div className='logout-button' onClick={this.props.logout}>
                                    <p>Logout</p>
                                </div>
                            </ul>
                        </button>
                    </div>

                
                    <button onClick={this.props.logout}>Logout</button>
                
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => {
        // debugger
        return {
            logout: () => dispatch(logout())
        }
};

const SplashHeader = (connect(mapStateToProps, mapDispatchToProps))(LoggedIn);
 export default SplashHeader;