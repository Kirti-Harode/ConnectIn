import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MdCreate } from "react-icons/md";
import expImg from '../../../../app/assets/images/experience_img.png'
import { openModal } from "../../../actions/modal_actions";
class ExperienceIndexItem extends React.Component {
    render(){
        let editButton;
        if (this.props.currentUser.id == this.props.match.params.userId) {
            editButton = (<div className='edit-button-exp' onClick={() => ( this.props.openModal('editExperience', this.props.experience.id))} >
            <MdCreate className="edit-button"/>
            </div>)
        }else{
            editButton = null;
        }

        return(
            <div className="experience-index-item-div">
                <img src={expImg} className="exp-img"/>

                <div className="experience-body-div">
                    <div className="exp-title">
                        <p>{this.props.experience.title}</p>
                    </div>
                    <div className='exp-company'>
                        <p>{this.props.experience.company}</p>
                        <p>{this.props.experience.emplyomentType}</p>
                        
                    </div>

                    <div className='start-end-date-exp'>
                        <p>{this.props.experience.startDate} - {this.props.experience.endDate}</p>
                    </div>

                    <div className='exp-location'>
                        
                        <p>{this.props.experience.location}</p>
                    </div>
                    <div className='exp-description'>
                        
                        <p>{this.props.experience.description}</p>
                    </div>
                </div>
               {editButton}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    profileUser: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExperienceIndexItem));