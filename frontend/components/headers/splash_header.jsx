import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import smallLogo from '../../../app/assets/images/in_alpha.png'
import { FaHome, FaUserFriends, FaUserGraduate} from "react-icons/fa";
import Search from '../search/search_bar';
import { BsGithub, BsPersonCircle, BsLinkedin } from "react-icons/bs";
import { FaAngellist } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
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
                
                    <span className='logo-div'>
                        <Link to='/'>
                           <img className='small-logo-img' src={window.smallLogo}/>
                        </Link>
                    </span>
                    <div>
                        <Search />
                    </div>
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
                            <a href="" target="_blank" className='links'>
                                <BsPersonCircle className="portfolio"/>
                                <span>Portfolio</span>
                            </a>
                        </li>
                        <li className='message-nav'>
                            <a href="https://www.linkedin.com/in/kirti-harode-02b35b1b5/" target="_blank" className='links'>
                                <BsLinkedin className="linkedin"/>
                                <span>LinkedIn</span>
                            </a>                            
                        </li>
                        <li className='notification-nav'>
                             <a href="https://angel.co/profile/edit/overview" target="_blank" className='links'>
                                <FaAngellist className="angellist"/>
                                <span>AngelList</span>
                            </a>
                        </li>
            
                        <li>
                        <div className='me-dropdown'>
                            <button className='dropdown-button' onFocus={this.hiddenFalse} onBlur={this.hiddenTrue}>
                                <div className='profile-icon-div'>
                                    {/* <FaUserGraduate className='profile-icon'/> */}
                                    <img src={ this.props.currentUser.profilePhotoUrl || window.defaultProfile } className='me-user-pic'/>
                                    <div className='me-dropdown'>
                                        <span className='me-heading'>Me</span>
                                        <MdOutlineArrowDropDown className='dropdown-arrow'/>
                                    </div>
                                </div>
                                <ul className={this.state.hidden ? 'hidden-dropdown' : 'reveal-dropdown'} onClick={e => e.stopPropagation()} >
                                    <div className='dropdown-top'>
                                        <div className='user-profile-div'>
                                            <img src={ this.props.currentUser.profilePhotoUrl || window.defaultProfile } className='current-user-pic'/>
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