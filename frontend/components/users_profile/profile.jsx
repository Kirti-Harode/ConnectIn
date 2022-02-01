import React from "react";
import IntroContainer from "./intros/intro";
import AboutIndexContainer from './abouts/about_index'
import EducationIndexConatiner from './educations/education_index'
import ExperienceIndexConatiner from './experiences/experience_index'
class Profile extends React.Component {

    componentDidMount(){
        // this.props.fetchUsers();
    }

    render (){
        return(
            <div className="profile-div">
                <section className="user-intro">
                    <IntroContainer />
                </section>
                <section className="about-index-conatiner">
                    <AboutIndexContainer />
                </section>
                <section className="exp-index-conatiner">
                    <ExperienceIndexConatiner />
                </section>
                <section className="edu-index-conatiner">
                    <EducationIndexConatiner />
                </section>
            </div>
        )
    }
}

export default Profile;