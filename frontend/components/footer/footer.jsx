import React from "react";
// import logo from '../../../app/assets/images/logo_alpha.png'
import { Link } from "react-router-dom";
class CreatorInfo extends React.Component {
    render(){
        return(
            <div className="creator-info-div">
                <div className="creator-component">
                    <div className="my-name">
                        <Link to='/'><img className="bottom-logo" src={window.logo} /></Link>
                        <h1 className="creator-name">Creator: Kirti Harode</h1>
                    </div>
                    <div className="creator-links">
                        <h2>General Links</h2>
                        <div className="links">
                            <a className="linkedin-link" href='https://www.linkedin.com/in/kirti-harode-02b35b1b5/' target="_blank">LinkedIn</a>
                            <a className="github-link" href='https://github.com/Kirti-Harode' target="_blank">Github</a>
                            <a className="anglelist-link" href='' target="_blank">AngelList</a>
                        </div>
                    </div>
                    <div className="other-pro-links">
                        <h2>Other Projects</h2>
                        <a className="pro-link" href="https://kirti-harode.github.io/SaveTheEarth/" target="_blank" >Save The Earth</a>
                        <br/>
                        <a className="pro-link" href="https://mevert.herokuapp.com/#/" target="_blank" >MEvert</a>
                    </div>
                    <div className="tech-used">
                        <h2>Technologies Implemented</h2>
                        <div className="tech">
                            <h3> Backend: Ruby on Rails </h3>
                            <h3> Frontend: JavaScript, React, Redux</h3>
                            <h3> Database: PostgreSQl </h3>
                            <h3> Other: jQuery, JBuilder, AWS</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatorInfo;