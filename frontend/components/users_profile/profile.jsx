import React from "react";
import IntroContainer from "./intros/intro";
import AboutIndexContainer from './abouts/about_index'
import EducationIndexConatiner from './educations/education_index'
import ExperienceIndexConatiner from './experiences/experience_index'
class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }
    }

    componentDidUpdate(preprops) {
        // console.log(preprops)
        // console.log(this.props)
        if(this.state.counter < 2) {
            if (preprops.otherUser !== this.props.otherUser) {
                this.setState({counter: this.state.counter + 1})
                this.props.fetchUser(this.props.otherUserId)
                .then(this.props.fetchConnections(this.props.otherUserId))
                .then(this.props.fetchAllAbouts(this.props.otherUserId))
                .then(this.props.fetchAllEducations(this.props.otherUserId))
                .then(this.props.fetchAllExperiences(this.props.otherUserId))           
            }
        }
    }

    componentDidMount(){
        this.props.fetchUsers();
        this.props.fetchUser(this.props.otherUserId);
    }
    render (){
        return(
            <div className="profile-div">
                <section className="user-intro">
                    <IntroContainer otherUser={this.props.otherUser}/>
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