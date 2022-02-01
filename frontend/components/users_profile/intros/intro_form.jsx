import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../../actions/modal_actions";
import { updateUser } from "../../../actions/user_actions";
import { GrFormClose } from "react-icons/gr";
class EditUserIntro extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateUser(
           this.state
        );
        this.props.closeModal();
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
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
    updateUser: user => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserIntro);