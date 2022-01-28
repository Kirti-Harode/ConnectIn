import React from "react";
import IntroContainer from "./intros/intro";

class Profile extends React.Component {

    componentDidMount(){
        this.props.fetchUsers();
    }

    render (){
        return(
            <div className="profile-div">
                <section className="user-intro">
                    <IntroContainer />
                </section>
            </div>
        )
    }
}

export default Profile;