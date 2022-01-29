import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MdCreate } from "react-icons/md";

class ExperienceIndexItem extends React.Component {
    render(){
        return(
            <div className="experience-index-item-div">
                <p>experience Image</p>

                <div className="experience-body-div">
                    <div className="experience-items">
                        <p>{this.props.experience.title}</p>
                    </div>
                    <div className='company-info'>
                        <p>{this.props.experience.company}</p>
                        <p>{this.props.experience.emplyomentType}</p>
                        
                    </div>

                    <div className='start-end-date-exp'>
                        <p>{this.props.experience.startDate} - {this.props.experience.endDate}</p>
                    </div>

                    <div className='location-exp'>
                        
                        <p>{this.props.experience.location}</p>
                    </div>
                    <div className='description-exp'>
                        
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