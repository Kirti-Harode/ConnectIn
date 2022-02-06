import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {fetchAllAbouts} from '../../../actions/about_actions';
import AboutIndexItem from './about_index_item';
import { MdAdd } from "react-icons/md";
import { openModal } from "../../../actions/modal_actions";
class AboutIndex extends React.Component{
    componentDidMount(){
        this.props.fetchAllAbouts(this.props.otherUser.id)
    }

    render(){
        let createButton;
        if (this.props.currentUser.id == this.props.match.params.userId) {
            createButton = (<div onClick={() => (this.props.openModal('createAbout'))} className="about-create-button-div">
                <MdAdd className="about-createButton" />
            </div>)
        }
        else{
            createButton = null;
        }

        return(
            <div className="about-div">
                <header className="about-header">
                    <h1 className="about-heading">About</h1>
                    {createButton}
                </header>
                <div className="about-body-index">
                    {this.props.abouts.map(about => {
                        // debugger
                        // if (about.user_id == this.props.match.params.userId){
                            return <AboutIndexItem about={about} key={about.id}/>
                        // }
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    otherUser: state.entities.users[ownProps.match.params.userId],
    abouts: Object.values(state.entities.abouts).reverse()
    .filter(about => about.user_id == ownProps.match.params.id)
});

const mapDispatchToProps = dispatch => ({
    fetchAllAbouts: userId => dispatch(fetchAllAbouts(userId)),
    openModal: (modal, id) => dispatch(openModal(modal, id))
});

const AboutIndexContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutIndex));

export default AboutIndexContainer;