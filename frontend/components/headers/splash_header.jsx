import React from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import smallLogo from '../../../app/assets/images/in_alpha.png'
import Home from '../../../app/assets/images/home_icon.png'
import { FaHome, FaUserFriends, FaUserGraduate, FaSearch, FaBell} from "react-icons/fa";
import {IoIosBriefcase } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
class LoggedIn extends React.Component {
    constructor(props){
        super(props)
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
                        <div className='search-bar'>
                        <input  type="text" placeholder='Search' ></input>
                        </div>
                    </div>
                </nav>   

                <nav className='right-nav'>
                    <Link to='/feed'>
                        <div className='Home-icon'>
                            <FaHome />
                            <h2>Home</h2>
                        </div>
                    </Link>
                    
                    <Link to='/mynetwork'>
                        <div className='network-icon'>
                            <FaUserFriends />
                            <p>My Network</p>
                        </div>
                    </Link>

                    <Link to='/jobs'>
                        <div className='jobs-icon'>
                            <IoIosBriefcase />
                            <p>Jobs</p>
                        </div>
                    </Link>

                    <Link to='/message'>
                        <div className='message-icon'>
                            <IoChatboxEllipses />
                            <p>Messages</p>
                        </div>
                    </Link>

                    <Link to='/notification'>
                        <div className='notification-icon'>
                            <FaBell />
                            <p>Notification</p>
                        </div>
                    </Link>

                    <Link to='/profile'>
                        <div className='profile-icon'>
                            <FaUserGraduate />
                            <h2>Me</h2>
                        </div>
                    </Link>
                
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