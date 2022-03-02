import React from "react";
import { GrFormClose } from "react-icons/gr";
class EducationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.education;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(
            this.state
        )
        this.props.closeModal();
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
        return(
            <div className='edu-form-div'>
            <header className='edu-form-header'>
                <div className='edu-form-heading'>
                    <h1>{this.props.formType}</h1>
                    <div className='edu-close-button' onClick={()=>this.props.closeModal()}>
                        <GrFormClose className='edu-close-icon'/>
                    </div>
                </div>
            </header>
            <div className='edu-form-body'>
                <form onSubmit={this.handleSubmit} className='edu-form'>
                    <div className='edu-school-div'>
                        <label className='edu-school-heading'>School</label>
                        <input value={this.state.school} type='text' onChange={this.update('school')} className='edu-school-input' placeholder="Ex: Standford University" />
                    </div>
                    <div className='edu-degree-div'>
                        <label className='edu-degree-heading'>Degree</label>
                        <input value={this.state.degree} type='text' onChange={this.update('degree')} className='edu-degree-input' placeholder="Ex: Bachelor's" />
                    </div>
                    <div className='edu-field-div'>
                        <label className='edu-field-heading'>Field of study</label>
                        <input value={this.state.fieldOfStudy} type='text' onChange={this.update('fieldOfStudy')} className='edu-field-input' placeholder="Ex: Computer Enginnering" />
                    </div>

                    <div className='edu-start-date-div'>
                        <label>Start date</label>
                        <input value={this.state.startDate} type='text' onChange={this.update('startDate')} className='edu-start-input' placeholder="Ex: March 2020"/>
                    </div>

                    <div className='edu-end-date-div'>
                        <label>End date</label>
                        <input value={this.state.endDate} type='text' onChange={this.update('endDate')} className='edu-end-input' placeholder="Ex: March 2022 or At present"/>
                    </div>
                    <div className = 'edu-description-div'>
                        <label>Description</label>
                        <textarea value={this.state.description} onChange={this.update('description')}/>
                    </div>
                    <div className = 'edu-activity-div '>
                        <label>Activities and societies</label>
                        <textarea placeholder="Ex: Tennis, Music Band" value={this.state.activities} onChange={this.update('activities')}/>
                    </div>
                    <div className = 'edu-grade-div'>
                        <label>Grade</label>
                        <input type="text" value={this.state.grade} onChange={this.update('grade')}/>
                    </div>
                </form>
            </div>
            <footer className='edu-form-footer'>
                <button onClick={() => {this.props.deleteEducation(this.state.id)
                this.props.closeModal()}} className='edu-delete-button'>Delete</button>
                <button className='edu-save-button' onClick={this.handleSubmit}>Save</button>
            </footer>
        </div>
        )
    }
}

export default EducationForm;