import React from 'react'
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session/signin_form_container';
import CreatorInfo from '../footer/footer';
import { BsGithub, BsPersonCircle, BsLinkedin } from "react-icons/bs";

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

                        <div className='highlights'>
                            <div className='highlight2'>
                                <a href="https://www.linkedin.com/in/kirti-harode-02b35b1b5/" target="_blank" className='a-tags'> 
                                    Feel free to connect
                                    <BsLinkedin className='icon'/>
                                </a>
                            </div>
                            <div className='highlight1'>
                                <a href="https://github.com/Kirti-Harode" target="_blank" className='a-tags'> 
                                    Explore my other projects 
                                    <BsGithub className='icon'/>
                                </a>
                            </div>
                            <div className='highlight3'>
                                <a href="https://kirtibala-harode.netlify.app/" target="_blank" className='a-tags'> 
                                    Check out my portfolio 
                                    <BsPersonCircle className='icon'/>
                                </a>                                
                            </div>
                        </div>
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
                     <CreatorInfo />
                    <img className='footer-img' src='https://static-exp3.licdn.com/sc/h/2vt8plqbv2l2pi6kxm89bqs59'/>
                    
                </footer>
            </div>
        )
    }
}

export default Welcome;