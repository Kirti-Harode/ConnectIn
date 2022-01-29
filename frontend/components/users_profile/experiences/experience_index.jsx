import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {fetchAllExperiences} from '../../../actions/experience_actions';
import { MdAdd } from "react-icons/md";
import ExperienceIndexItem from './experience_index_item';

class ExperienceIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllExperiences(this.props.profileUser.id);
    }

    render(){
        return (
            <div className="experience-div">
                <header>
                    <h2>Experiences</h2>
                    <MdAdd className="experience-createButton"/>
                </header>
                <div className="experience-index-div">
                    {this.props.experiences.map(experience => {
                            
                        return <ExperienceIndexItem experience={experience} key={experience.id}/>
                    
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    profileUser: state.entities.users[ownProps.match.params.userId],
    experiences: Object.values(state.entities.experiences).reverse()
});

const mapDispatchToProps = dispatch => ({
    fetchAllExperiences: userId => dispatch(fetchAllExperiences(userId))
    // showmodal
});

const ExperienceIndexConatiner = withRouter(connect(mapStateToProps, mapDispatchToProps)(ExperienceIndex));
export default ExperienceIndexConatiner;