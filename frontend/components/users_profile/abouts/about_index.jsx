import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {fetchAllAbouts} from '../../../actions/about_actions';
import AboutIndexItem from './about_index_item';
import { MdAdd } from "react-icons/md";
import { openModal } from "../../../actions/modal_actions";
import {  fetchUser } from "../../../actions/user_actions";
import { RiOpenSourceFill } from "react-icons/ri";

class AboutIndex extends React.Component{

    // componentDidUpdate(preprops) {
    //     // console.log(preprops)
    //     // console.log(this.props)
    //     if (preprops.otherUser !== this.props.otherUser) {
    //         this.props.fetchUser(this.props.otherUser.id)
    //         // .then(this.filterproducts)
    //     }
    // }
    componentDidMount(){
        this.props.fetchAllAbouts(this.props.otherUser.id)
        // console.log("all abouts" + this.props.fetchAllAbouts(this.props.otherUser.id))
    }

    render(){
        // this.props.abouts.filter(about => about.userId === this.props.otherUser.id)
        let aboutArray = []
        this.props.abouts.map(about => {
           if(about.userId === this.props.otherUser.id){
            aboutArray.push(about)
           }
        })
        // console.log(this.props.otherUser.id)
        let createButton;
        if (this.props.currentUser.id == this.props.match.params.userId && this.props.abouts.length === 0) {
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
                    {aboutArray.map(about => {
                        return <AboutIndexItem about={about} key={about.id}/>
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
    
});

const mapDispatchToProps = dispatch => ({
    fetchAllAbouts: userId => dispatch(fetchAllAbouts(userId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: (modal, id) => dispatch(openModal(modal, id))
});

const AboutIndexContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutIndex));

export default AboutIndexContainer;