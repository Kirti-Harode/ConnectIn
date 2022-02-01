import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MdCreate } from "react-icons/md";
import {openModal} from '../../../actions/modal_actions';

class AboutIndexItem extends React.Component {
    render(){
        return(
            <div className="about-index-item-div">
                <div className="about-info-div">
                    <div className="about-body-div">
                        <p className="about-body-p">{this.props.about.body}</p>
                    </div>
                </div>
                <div className="edit-button-about" onClick={() => (this.props.openModal('editAbout', this.props.about.id))}>
                    <MdCreate className="edit-button"/>
                </div>
                
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutIndexItem));