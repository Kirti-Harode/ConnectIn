import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../app/assets/images/logo_alpha.png'
import { connect } from 'react-redux';
const FrontPage = () => {
    return (
        <div>
            <nav className='header-container'>
                <Link to='/'><img className='logo' src={window.logo} /></Link>
                <div className='session-nav'>
                    <Link className='joinnow' to="/signup">Join now</Link>
                    <Link className='login' to="/login">Sign in</Link>
                </div>
            </nav>
        </div>
    )
}

const FrontPageHeader = connect(null, null)(FrontPage);
export default FrontPageHeader;