import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MdCreate } from "react-icons/md";
import expImg from '../../../../app/assets/images/experience_img.png'
class ExperienceIndexItem extends React.Component {
    render(){
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
                <div className="edit-button-exp">
                    <MdCreate className="edit-button"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    // currentUser: state.entities.users[state.session.id],
    // profileUser: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
    // showmodal
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExperienceIndexItem));