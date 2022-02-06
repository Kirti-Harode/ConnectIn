import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {fetchAllExperiences} from '../../../actions/experience_actions';
import { MdAdd } from "react-icons/md";
import ExperienceIndexItem from './experience_index_item';
import { openModal } from "../../../actions/modal_actions";

class ExperienceIndex extends React.Component {
    
    componentDidMount(){
        this.props.fetchAllExperiences(this.props.otherUser.id);
    }

    render(){
        let createButton;
        if (this.props.currentUser.id == this.props.match.params.userId) {
            createButton = (
            <div className='exp-create-btn' onClick={(()=>this.props.openModal('createExperience'))}>
                <MdAdd className="experience-createButton"/>
            </div>)
        }else{
            createButton = null;
        }
        return (
            <div className="experience-div">
                <header className="exp-heading">
                    <h2 className="exp-h2">Experience</h2>
                    {createButton}
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
    otherUser: state.entities.users[ownProps.match.params.userId],
    experiences: Object.values(state.entities.experiences).reverse()
});

const mapDispatchToProps = dispatch => ({
    fetchAllExperiences: userId => dispatch(fetchAllExperiences(userId)),
    openModal: (modal, id) => dispatch(openModal(modal, id))

});

const ExperienceIndexConatiner = withRouter(connect(mapStateToProps, mapDispatchToProps)(ExperienceIndex));
export default ExperienceIndexConatiner;