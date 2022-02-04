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
            <div className='splash-header-container'>
                <div className='splash-content'>
                {/* <nav className='left-bar'> */}
                    <span className='logo-div'>
                        <Link to='/'>
                           <img className='small-logo-img' src={window.smallLogo}/>
                        </Link>
                    </span>
                    <div className='search-container'>
                        <div className='search-input-div'>
                            <input className='search-input' type="text" placeholder='Search' ></input>
                        </div>
                        {/* <div className='search-icon-div'> */}
                            <FaSearch className='search-icon'/>
                        {/* </div> */}
                       
                    </div>
                {/* </nav>    */}

                <nav className='right-nav'>
                    <ul className='nav-list'>
                        <li className='home-nav'>
                            <Link to='/feed' className='links'>
                                <FaHome className='Home-icon'/>
                                <span className='home-heading'>Home</span>
                            </Link>
                        </li>
                        <li className='network-nav'>
                            <Link to='/mynetwork' className='links'>
                                <FaUserFriends className='network-icon' />
                                <span className='network-heading'>My Network</span>
                            </Link>
                        </li>
                        <li className='jobs-nav'>
                            <Link to='/jobs' className='links'>
                                <IoIosBriefcase className='jobs-icon'/>
                                <span className='jobs-heading'>Jobs</span>
                            </Link>
                        </li>
                        <li className='message-nav'>
                            <Link to='/message' className='links'>
                                <IoChatboxEllipses className='message-icon'/>
                                <span className='message-heading'>Messaging</span>
                            </Link>
                        </li>
                        <li className='notification-nav'>
                            <Link to='/notification' className='links'>
                                <FaBell className='notification-icon'/>
                                <span className='notification-heading'>Notifications</span>
                            </Link>
                        </li>
                    <li>
                    <div className='me-dropdown'>
                        <button className='dropdown-button' onFocus={this.hiddenFalse} onBlur={this.hiddenTrue}>
                            <div className='profile-icon-div'>
                                <FaUserGraduate className='profile-icon'/>
                                <span className='me-heading'>Me</span>
                            </div>
                            <ul className={this.state.hidden ? 'hidden-dropdown' : 'reveal-dropdown'} onClick={e => e.stopPropagation()} >
                                <div className='dropdown-top'>
                                    <div className='user-profile-div'>
                                        <img src={ this.props.currentUser.profilePhotoUrl || window.defaultProfile } className='me-user-pic'/>
                                        <div className='user-details'>
                                            <h2 className='fname-lname'>{this.props.currentUser.fname} {this.props.currentUser.lname}</h2>
                                            <h3 className='user-bio'>{this.props.currentUser.bio}</h3>
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
                    </li>
                    </ul>
                </nav>
                </div>
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