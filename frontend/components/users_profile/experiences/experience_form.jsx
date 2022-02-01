import React from "react";
import { GrFormClose } from "react-icons/gr";
class ExperienceForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.experience;
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
        const deleteButton = this.props.formType === 'Edit Experience' ? (
            <button onClick={() => {this.props.deleteExperience(this.state.id)
                this.props.closeModal()}} className='exp-delete-button'>Delete</button>
        ) : null;
        return(
            <div className='exp-form-div'>
            <header className='exp-form-header'>
                <div className='exp-form-heading'>
                    <h1>{this.props.formType}</h1>
                    <div className='exp-close-button' onClick={()=>this.props.closeModal()}>
                        <GrFormClose className='exp-close-icon'/>
                    </div>
                </div>
            </header>
            <div className='exp-form-body'>
                <form onSubmit={this.handleSubmit} className='exp-form'>
                    <div className='exp-title-div'>
                        <label className='exp-title-heading'>Title*</label>
                        <input value={this.state.title} type='text' onChange={this.update('title')} className='exp-title-input' placeholder="Ex: Software Engineer" />
                    </div>
                    <div className='exp-company-div'>
                        <label className='exp-company-heading'>Company name*</label>
                        <input value={this.state.company} type='text' onChange={this.update('company')} className='exp-company-input' placeholder="Ex: Google" />
                    </div>
                    <div className='exp-employment-div'>
                        <label className='exp-employment-heading'>employment type</label>
                        <input value={this.state.employment_type} type='text' onChange={this.update('employment_type')} className='exp-employment-input' placeholder="Ex: Full-time, Part-time, Self-emplyoed" />
                    </div>

                    <div className='exp-start-date-div'>
                        <label>Start date</label>
                        <input value={this.state.start_date} type='text' onChange={this.update('start_date')} className='exp-start-input' placeholder="Ex: March 2020"/>
                    </div>

                    <div className='exp-end-date-div'>
                        <label>End date</label>
                        <input value={this.state.end_date} type='text' onChange={this.update('end_date')} className='exp-end-input' placeholder="Ex: March 2022 or At present"/>
                    </div>
                    <div className = 'exp-location-div'>
                        <label>Location</label>
                        <textarea value={this.state.location} onChange={this.update('location')}/>
                    </div>
                    <div className = 'exp-headline-div '>
                        <label>Headline</label>
                        <input type="text" value={this.state.headline} onChange={this.update('headline')}/>
                    </div>
                    <div className = 'exp-industry-div'>
                        <label>Industry</label>
                        <input type="text" value={this.state.industry} onChange={this.update('industry')}/>
                    </div>
                    <div className = 'exp-description-div'>
                        <label>Description</label>
                        <textarea value={this.state.description} onChange={this.update('description')}/>
                    </div>
                </form>
            </div>
            <footer className='exp-form-footer'>
                {deleteButton}
                <button className='exp-save-button' onClick={this.handleSubmit}>Save</button>
            </footer>
        </div>
        )
    }
}

export default ExperienceForm;