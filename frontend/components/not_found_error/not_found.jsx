import React from "react";

class NotFound extends React.Component {
    render(){
        return (
            <div className="error-page">
                <h1 className="not-found1">Page not found!</h1>
                <p className="not-found2">The requested page was not found</p>
                <img src={window.error} className="error-img"/>
            </div>
        )
    }
}

export default NotFound;