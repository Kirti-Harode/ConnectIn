import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MdCreate } from "react-icons/md";

class EducationIndexItem extends React.Component {
    render(){
        return(
            <div className="education-index-item-div">
                <p>Education Image</p>

                <div className="education-body-div">
                    <div className="education-items">
                        <p>{this.props.education.school}</p>
                    </div>
                    <div className='degree-info'>
                        <p>{this.props.education.degree}</p>
                        <p>{this.props.education.field_of_study}</p>
                        <p>{this.props.education.grade}</p>
                    </div>

                    <div className='start-end-date'>
                        <p>{this.props.education.startDate} - {this.props.education.endDate}</p>
                    </div>

                    <div className='activities'>
                        <h3>Activities: {this.props.education.activities}</h3>
                        <p>{this.props.education.description}</p>
                    </div>
                </div>
                <div className="edit-button-edu">
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EducationIndexItem));