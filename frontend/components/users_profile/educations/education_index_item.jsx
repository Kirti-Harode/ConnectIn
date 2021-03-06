import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MdCreate } from "react-icons/md";
import eduImg from '../../../../app/assets/images/education_img.png'
import { openModal } from "../../../actions/modal_actions";

class EducationIndexItem extends React.Component {
    render(){
        let editButton;
        if (this.props.currentUser.id == this.props.otherUserId) {
            editButton = (<div className='edit-button-edu' onClick={() => (this.props.openModal('editEducation', this.props.education.id))} >
                <MdCreate className="edit-button"/>
           </div>)
        }else{
            editButton = null;
        }
        return(
           
            <div className="education-index-item-div">
                <img src={window.educationImg } className="edu-img"/>

                <div className="education-body-div">
                    <div className="education-school">
                        <p>{this.props.education.school}</p>
                    </div>
                    <div className='degree-info'>
                        <p>{this.props.education.degree}</p>
                        <p>{this.props.education.field_of_study}</p>
                        <br/>
                        {/* <p>{' ' + this.props.education.grade}</p> */}
                    </div>

                    <div className='start-end-date'>
                        <p>{this.props.education.startDate} - {this.props.education.endDate}</p>
                    </div>

                    <div className='activities'>
                        {/* <h3>Activities: {this.props.education.activities}</h3> */}
                        <p>{this.props.education.description}</p>
                    </div>
                </div>
                {editButton}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const otherUserId = parseInt(ownProps.match.params.userId);
    return {
    currentUser: state.entities.users[state.session.id],
    // otherUser: state.entities.users[ownProps.match.params.userId]
    otherUserId
}};

const mapDispatchToProps = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EducationIndexItem));