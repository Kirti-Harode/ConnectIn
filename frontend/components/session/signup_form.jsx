import React from 'react';
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
            errors: {}
        };
        this.demo = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoSignin = this.handleDemoSignin.bind(this);
        this.isValidEmail = this.isValidEmail.bind(this)
    }

    componentDidMount(){
        if(Object.values(this.props.errObj).length > 0){
            this.props.clearErrors()
        }
    }

    // componentWillUnmount() {
    //     this.props.clearErrors()
    // }

    handleSubmit(e) {
        // debugger
        const user = Object.assign({}, this.state);
        e.preventDefault();
        // if(this.state.email.includes("@") && this.state.email.includes(".")){
            this.props.processForm(user)
            .fail(() => { 
                this.setState({errors: this.props.errObj})
            })
        // }else{
        //     this.props.errObj.isValid = "Email is Invalid" 
        // }
        
         
        
    }

    isValidEmail(){
       
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    renderErrors (){
        // if(this.state.errors.length){
        //    return this.state.errors.map((error,index) => {
        //        return ( <p key={index}>{error}</p> )
        //     })
        // }
        // else{
        //     return null;
        // }
        return(
            <ul>
              {Object.keys(this.state.errors).map((error, i) => (
                <li key={`error-${i}`}>
                  {this.state.errors[error]}
                </li>
              ))}
            </ul>
          );
    }

    handleDemoSignin(e){
        e.preventDefault();
        this.setState({
            email: 'kirti@gmail.com',
            password: 'password',
            fname: 'Kirti',
            lname: 'Harode'
        });

        this.props.login({
            email: 'kirti@gmail.com',
            password: 'password',
            fname: 'Kirti',
            lname: 'Harode'
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
            <div className='signup-container'>  
                <form onSubmit={this.handleSubmit} className='signup-form-box'>
                    <div>
                        <div className='signup-greetings'>
                            <h1 className='signup-heading'>Join now</h1>
                            <p className='signup-msg'>Make the most of your professional life</p>
                        </div>
                        {/* <div className='signup-errors'>{error}</div> */}
                        <input 
                            className={this.state.errors.Email ? 'signup-error' : 'signup-input'}
                            type="text" 
                            value={this.state.email} 
                            onChange={this.update('email')} 
                            placeholder='Email'>
                        </input>
                        <p className='login-error-message'>{ this.state.errors.Email }</p>
                        <p className='login-error-message'>{ this.state.errors.isValid }</p>
                        {/* <br/> */}
                        <input 
                            className={this.state.errors.Fname ? 'signup-error' : 'signup-input'}
                            type="text"
                            value={this.state.fname} 
                            onChange={this.update('fname')}
                            placeholder='First Name'>
                        </input>
                        <p className='login-error-message'>{ this.state.errors.Fname }</p>
                        <input 
                            className={this.state.errors.Lname ? 'signup-error' : 'signup-input'}
                            type="text" 
                            value={this.state.lname} 
                            onChange={this.update('lname')}
                            placeholder='Last Name'>
                        </input>
                        <p className='login-error-message'>{ this.state.errors.Lname }</p>
                        
                        <input 
                            className={this.state.errors.Password ? 'signup-error' : 'signup-input'}
                            type="password" 
                            value={this.state.password} 
                            onChange={this.update('password')} 
                            placeholder='Password'>
                        </input>
                        <p className='login-error-message'>{ this.state.errors.Password}</p>
                       
                        <button className='signup-button' value={this.props.formType}>{this.props.formType}</button>
                        
                        <button className="demo-signin-signupForm" onClick={this.handleDemoSignin}> Demo Sign In </button>
                        <div className='already-account'> Already on ConnectIn?  <Link className='signin-link' to='/login'> Log in </Link></div>
                    </div>
                </form>
               
            </div>

        )
    }
}

export default SignupForm;