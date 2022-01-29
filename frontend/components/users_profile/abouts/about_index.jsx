import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {fetchAllAbouts} from '../../../actions/about_actions';
import AboutIndexItem from './about_index_item';
import { MdAdd } from "react-icons/md";

class AboutIndex extends React.Component{
    componentDidMount(){
        this.props.fetchAllAbouts(this.props.profileUser.id)
    }

    render(){
        return(
            <div className="about-div">
                <header>
                    <h1 className="about-heading">About</h1>
                    <MdAdd className="about-createButton"/>
                </header>
                <div className="about-body-index">
                    {this.props.abouts.map(about => {
                        // if (about.user_id === this.props.match.params.userId){
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
    profileUser: state.entities.users[ownProps.match.params.userId],
    abouts: Object.values(state.entities.abouts).reverse()
});

const mapDispatchToProps = dispatch => ({
    fetchAllAbouts: userId => dispatch(fetchAllAbouts(userId))
    // showmodal
});

const AboutIndexContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutIndex));

export default AboutIndexContainer;