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

                    <Link to='/profile'>
                        <div >
                            <FaUserGraduate className='profile-icon'/>
                            <h2 className='me-heading'>Me</h2>
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