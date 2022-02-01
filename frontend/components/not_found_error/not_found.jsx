import React from "react";
import errorImg from '../../../app/assets/images/error.png'
class NotFound extends React.Component {
    render(){
        return (
            <div className="error-page">
                <h1 className="not-found1">Page not found!</h1>
                <p className="not-found2">The requested page was not found</p>
                <img src={errorImg} className="error-img"/>
            </div>
        )
    }
}

export default NotFound;