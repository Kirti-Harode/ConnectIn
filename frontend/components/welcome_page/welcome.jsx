import React from 'react'
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session/signin_form_container';
class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // debugger
        // const display = this.props.currentUser ? (
        //     <div>
        //         <p>Welcome, {this.props.currentUser.email}</p>
        //         <button onClick={this.props.logout}>Logout</button>
        //     </div>
        // ) : (
        //     <div>
        //         <Link to="/signup">Sign Up</Link>
        //         <Link to="/login">Log In</Link>
        //     </div>
        // )
        
        return (
            <div className='front-page'>
                {/* {display} */}
                <div className="logo">
                    <h1 className="logo-first">ConnectIn</h1> 
                </div>
                <div className='session-nav'>
                    <Link className='joinnow' to="/signup">Join now</Link>
                    <Link className='login' to="/login">Log In</Link>
                </div>
                <section className='welcome-sec'>
                    <h1 className='welcome-msg'>Welcome to your 
                    <br/> professional community</h1>
                    <LoginFormContainer />
                    <img className='welcome-img' src='https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4'/>
                </section>
                <section className='join-sec'>
                    <h2 className='join-msg1'> Find the right job or internship for you </h2>
                    <h2 className='join-msg2'> Join your colleagues, classmates, and friends on ConnectIn</h2>
                    <Link className='getstarted' to="/signup">Get started</Link>
                </section>
            </div>
        )
    }
}

export default Welcome;