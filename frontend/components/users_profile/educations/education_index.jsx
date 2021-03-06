import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {fetchAllEducations} from '../../../actions/education_actions';
import { MdAdd } from "react-icons/md";
import EducationIndexItem from './education_index_item';
import { openModal } from "../../../actions/modal_actions";

class EducationIndex extends React.Component {
   
    componentDidMount(){
        this.props.fetchAllEducations(this.props.otherUserId);
    }

    render(){
        let eduArray = []
        this.props.educations.map(education => {
           if(education.userId === this.props.otherUserId){
                eduArray.push(education)
           }
        })

        let createButton;
        if (this.props.currentUser.id == this.props.match.params.userId) {
            createButton = (<div className='create-btn' onClick={()=>this.props.openModal('createEducation')}>
            <MdAdd className="education-createButton"/>
            </div>)
        }else{
            createButton = null;
        }
        return (
            <div className="education-div">
                <header className="edu-heading" >
                    <h2 className="edu-h2">Education</h2>
                    {createButton}
                </header>
                <div className="education-index-div">
                    {eduArray.map(education => {
                            
                        return <EducationIndexItem education={education} key={education.id}/>
                    
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const otherUserId = parseInt(ownProps.match.params.userId);

    return {
    currentUser: state.entities.users[state.session.id],
    // otherUser: state.entities.users[ownProps.match.params.userId],
    educations: Object.values(state.entities.educations).reverse(),
    otherUserId
}};

const mapDispatchToProps = dispatch => ({
    fetchAllEducations: userId => dispatch(fetchAllEducations(userId)),
    openModal: (modal, id) => dispatch(openModal(modal, id))
   
});

const EducationIndexConatiner = withRouter(connect(mapStateToProps, mapDispatchToProps)(EducationIndex));
export default EducationIndexConatiner;