import React from 'react'
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // debugger
        // const display = this.props.currentUser ? (
        //     <div>
        //         <p>Welcome, {this.props.currentUser.username}</p>
        //         <button onClick={this.props.logout}>Logout</button>
        //     </div>
        // ) : (
        //     <div>
        //         <Link to="/signup">Sign Up</Link>
        //         <Link to="/login">Log In</Link>
        //     </div>
        // )
        
        return (
            <div>
                {/* {display} */}
                <h1>Welcome to your professional community</h1>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
                <h2> Find the right job or internship for you </h2>
                <h2> Join your colleagues, classmates, and friends on ConnectIn</h2>
            </div>
        )
    }
}

export default Welcome;