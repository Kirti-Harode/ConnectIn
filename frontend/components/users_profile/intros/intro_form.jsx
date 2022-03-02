import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../../actions/modal_actions";
import { updateUser } from "../../../actions/user_actions";
import { GrFormClose } from "react-icons/gr";
import { fetchUser } from "../../../actions/user_actions";

class EditUserIntro extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e){
        // debugger
        e.preventDefault();
        this.props.updateUser(
           this.state
        );
        this.props.closeModal();
    }

    update(field){
        // debugger
        return e => this.setState({[field]: e.currentTarget.value})
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser.id)
    }
    // componentDidUpdate(preprops) {
    //     console.log(preprops)
    //     console.log(this.props)
    //     console.log(preprops.currentUser !== this.props.currentUser)
    //     if (preprops.currentUser !== this.props.currentUser) {
    //         this.props.fetchUser(this.props.currentUser.id)
    //         // .then(this.props.fetchConnections(this.props.otherUser.id))
    //         // .then(this.props.fetchAllAbouts(this.props.otherUser.id))
    //         // .then(this.props.fetchAllEducations(this.props.otherUser.id))
    //         // .then(this.props.fetchAllExperiences(this.props.otherUser.id))           
    //     }
    // }
    render(){
        // debugger
        // console.log(this.props.currentUser)
        console.log(this.state)
        return(
            <div className="user-intro">
                <div className="intro-form-heading">
                    <h1>Edit Intro</h1>
                    <div className='user-close-button' onClick={()=>this.props.closeModal()}>
                        <GrFormClose className='intro-close-icon'/>
                    </div>
                </div>
                <div className="intro-form-div">
                    <form onSubmit={this.handleSubmit} className="intro-form">
                        <div className="intro-names">
                            <div className="first-name">
                                <label>FirstName*</label>
                                <input onChange={this.update('fname')} type="text" value={this.state.fname}/>
                            </div>
                            <div className='last-name'>
                                <label>Last Name*</label>
                                <input onChange={this.update('lname')} type="text" value={this.state.lname} />
                            </div>
                        </div>
                        <div className='intro-pronouns-div'>
                            <label>Pronouns</label>
                            <div className='pronouns-selector'>
                                <select onChange={this.update('pronouns')}>
                                    <option defaultValue>Please select</option> 
                                    <option>She/Her/Hers</option>
                                    <option>He/Him/His</option>
                                    <option>They/Them/Theirs</option>
                                </select>
                            </div>
                        </div>
                        <div className="intro-bio-div">
                            <label>Bio</label>
                            <textarea className="bio-textarea" onChange={this.update('bio')}  value={this.state.bio} />
                        </div>
                        <div className="intro-location-div">
                            <label>Location</label>
                            <input className="location-input" onChange={this.update('location')} type="text" value={this.state.location} />
                        </div>
                    </form>
                </div>

                <div className="intro-submit-div">
                    <button className="user-intro-submit" onClick={this.handleSubmit}>Save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateUser: user => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserIntro);