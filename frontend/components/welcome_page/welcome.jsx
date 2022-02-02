import React from 'react'
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session/signin_form_container';
import CreatorInfo from '../footer/footer';
class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <div className='front-page'>
                <section className='welcome-sec'>
                    <div className='welcome-left-side'>
                        <h1 className='welcome-msg'>Welcome to your 
                        <br/> professional community</h1>
                        <p className='highlight1'>Find a person you know</p>
                        <p className='highlight2'>Search for a job</p>
                        <p className='highlight3'>Post your job for millions of people to see</p>
                        <div className='getstarted-div'>
                            <Link className='getstarted' to="/signup">Get started</Link>
                        </div>
                    </div>
                    <img className='welcome-img' src='https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4'/>
                    
                </section>
                <footer className='footer'>
                    <div className='join-sec'>
                        <h2 className='join-msg1'> Join your colleagues, classmates, and friends on ConnectIn</h2>
                    </div>
                    <img className='footer-img' src='https://static-exp3.licdn.com/sc/h/2vt8plqbv2l2pi6kxm89bqs59'/>
                    
                </footer>
                <CreatorInfo />
            </div>
        )
    }
}

export default Welcome;