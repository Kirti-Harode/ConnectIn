import React from 'react' ;
import { GrFormClose } from "react-icons/gr";
class AboutForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.about 
        this.handleSubmit =  this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state)
        this.props.closeModal();
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }
    componentDidUpdate(preprops){
        console.log(preprops)
        console.log(this.props)
        
    }
    render(){
        return(
            <div className='about-edit-form'>
                <header className='about-form-header'>
                    <div className='about-form-heading'>
                        <h1>{this.props.formType}</h1>
                        <div className='about-close-button' onClick={()=>this.props.closeModal()}>
                            <GrFormClose className='about-close-icon'/>
                        </div>
                    </div>
                </header>
                <div className='about-form-div'>
                    <form onSubmit={this.handleSubmit} className='about-form'>
                        <div className='about-description-div'>
                            <label className='about-body-heading'>Body</label>
                            <textarea value={this.state.body} onChange={this.update('body')} className='about-body-textarea' />
                        </div>
                    </form>
                </div>
                <footer className='about-form-footer'>
                <button onClick={() => {this.props.deleteAbout(this.state.id)
                this.props.closeModal()}} className='about-delete-button'>Delete</button>
                    <button className='about-save-button' onClick={this.handleSubmit}>Save</button>
                </footer>
            </div>
        )
    }
}

export default AboutForm;