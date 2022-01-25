import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
           
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoSignin = this.handleDemoSignin(this);
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        // .then( () => this.props.history.push("/"));
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    linkTo() {
        if (this.props.formType === 'Sign Up') {
            return '/login'
        } else {
            return '/signup'
        }
    }

    renderErrors (){
        if(this.props.errors.length){
           return this.props.errors.map((error,index) => {
               return ( <li key={index}>{error}</li> )
            })
        }
        else{
            return null;
        }
    }

    handleDemoSignin(e){
        // e.preventDefault();
        this.props.processForm({
            email: 'test@gmail.com',
            password: 'password'
        })
    }
 
    render() {
        // debugger
        return (
            <div>
                {/* <h3>{this.props.formType}</h3> */}
                {/* <Link to={this.linkTo()}>Instead</Link> */}
                
                <ul>
                    {this.renderErrors()}
                    
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.email} onChange={this.update('email')} placeholder='Email'></input>
                    </label>
                    <br/>
                    {/* <label>First Name: 
                        <input type="text" value={this.state.fname} onChange={this.update('fname')}></input>
                    </label>
                    <br/>
                    <label>Last Name: 
                        <input type="text" value={this.state.lname} onChange={this.update('lname')}></input>
                    </label>
                    <br/> */}
                    <label>
                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder='Password'></input>
                    </label>
                    <br/>
                    <button value={this.props.formType}>{this.props.formType}</button>
                    <button className="demo-signin" onClick={this.handleDemoSignin}> Demo Sign in </button>
                </form>
            </div>

        )
    }
}

export default SessionForm;