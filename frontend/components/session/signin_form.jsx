import React from 'react';
import { Link } from 'react-router-dom';
class SigninForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoSignin = this.handleDemoSignin.bind(this);
        this.demo = false;
    }

    componentWillUnmount(){
        if(this.props.errors.length > 0){
            this.props.clearErrors()
        }
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).fail(() => { 
            this.setState({errors: this.props.errors})
        }) 
          
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    renderErrors (){
        if(this.state.errors.length){
           return (this.state.errors.map((error,index) => (
                ( <ul key={index}>{error}</ul> )
           )))
        }
        else{
            return null;
        }
        
            // return (
            //     <ul>
            //     {this.state.errors.map((error, i) => (
            //         <li key={`error-${i}`}>{error}</li>
            //     ))}
            //     </ul>
            // );
    }


    handleDemoSignin(e){
        
        this.props.processForm({
            email: 'test@gmail.com',
            password: 'password',
            // fname: 'Kitty',
            // lname: 'Cat',
            erorrs: []
        })
        this.demo = true;
    }

    render() {
        // debugger
        
        let error; 
        if(!this.demo){
            error = this.renderErrors()
        }
        else{
            error = null
        }

        return (
           
            <div className='signin-container'>
                 {/* <h1 className='heading'>ConnectIn</h1> */}
                <form onSubmit={this.handleSubmit} className='signin-form-box'>
                <div>
                    <div className='signin-greetings'>
                        <h1 className='signin-heading'>Sign in</h1>
                        <p className='signin-msg'>Stay updated on your professional world</p>
                    </div>
                    <ul className='signin-errors'>{error}</ul>
                    <input 
                        className='signin-email'
                        type="text" 
                        value={this.state.email} 
                        onChange={this.update('email')} 
                        placeholder='Email'>
                    </input>
                    <br/>
                    <input 
                        className='signin-password'
                        type="password" 
                        value={this.state.password} 
                        onChange={this.update('password')} 
                        placeholder='Password'>     
                    </input>
                    <br/>
                    <button className='signin-button' value={this.props.formType}>{this.props.formType}</button>
                    <button  className="demo-signin-button" onClick={this.handleDemoSignin} >Demo Sign In</button>
                    <div className='new-here'> New to ConnectIn?  <Link className='signup-link' to='/signup'> Sign up</Link></div>
                </div>
                </form>
            </div>

        )
    }
}
export default SigninForm;
