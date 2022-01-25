import React from 'react';
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoSignin = this.handleDemoSignin(this);
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
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
        this.props.login({
            email: 'test@gmail.com',
            password: 'password',
            fname: 'Kitty',
            lname: 'Cat'
        })
    }
 
    render() {
        // debugger
        return (
            <div>
                <div>
                    <h1>Join now</h1>
                    <p>Make the most of your professional life</p>
                </div>
                <ul>{this.renderErrors()}</ul>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.email} 
                        onChange={this.update('email')} 
                        placeholder='Email'>
                    </input>
                    <br/>
                    <input 
                        type="text"
                        value={this.state.fname} 
                        onChange={this.update('fname')}
                        placeholder='First Name'>
                    </input>
                    <br/>
                    <input 
                        type="text" 
                        value={this.state.lname} 
                        onChange={this.update('lname')}
                        placeholder='Last Name'>
                    </input>
                    <br/>
                    <input 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.update('password')} 
                        placeholder='Password'>
                    </input>

                    <br/>
                    <button value={this.props.formType}>{this.props.formType}</button>
                    <button className="demo-signin" onClick={this.handleDemoSignin}> Demo Sign in </button>
                </form>
            </div>

        )
    }
}

export default SignupForm;