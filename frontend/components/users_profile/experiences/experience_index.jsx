import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {fetchAllExperiences} from '../../../actions/experience_actions';
import { MdAdd } from "react-icons/md";
import ExperienceIndexItem from './experience_index_item';
import { openModal } from "../../../actions/modal_actions";

class ExperienceIndex extends React.Component {
    
    componentDidMount(){
        this.props.fetchAllExperiences(this.props.otherUserId);
    }

    render(){
        let expArray = []
        this.props.experiences.map(experience => {
           if(experience.userId === this.props.otherUserId){
            expArray.push(experience)
           }
        })

        let createButton;
        if (this.props.currentUser.id == this.props.otherUserId) {
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
                    {expArray.map(experience => {
                            
                        return <ExperienceIndexItem experience={experience} key={experience.id}/>
                    
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const otherUserId = parseInt(ownProps.match.params.userId);
    return{
    currentUser: state.entities.users[state.session.id],
    // otherUser: state.entities.users[ownProps.match.params.userId],
    otherUserId,
    experiences: Object.values(state.entities.experiences).reverse()
}};

const mapDispatchToProps = dispatch => ({
    fetchAllExperiences: userId => dispatch(fetchAllExperiences(userId)),
    openModal: (modal, id) => dispatch(openModal(modal, id))

});

const ExperienceIndexConatiner = withRouter(connect(mapStateToProps, mapDispatchToProps)(ExperienceIndex));
export default ExperienceIndexConatiner;