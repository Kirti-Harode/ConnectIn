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
                            <a className="linkedin-link" href='https://www.linkedin.com/in/kirti-harode-02b35b1b5/'>LinkedIn</a>
                            <a className="github-link" href='https://github.com/Kirti-Harode'>Github</a>
                            <a className="anglelist-link" href=''>AngelList</a>
                        </div>
                    </div>
                    <div className="other-pro-links">
                        <h2>Other Projects</h2>
                        <a className="pro-link" href="https://kirti-harode.github.io/SaveTheEarth/" >Save The Earth</a>
                        <br/>
                        <a className="pro-link" href="" >Other Projects</a>
                    </div>
                    <div className="tech-used">
                        <h2>Technologies Implemented</h2>
                        <div className="tech">
                            <h3>Ruby on Rails</h3>
                            <h3>JavaScript</h3>
                            <h3>React</h3>
                            <h3>Redux</h3>
                            <h3>jQuery</h3>
                            <h3>JBuilder</h3>
                            <h3>PostgreSQl</h3>
                            <h3>AWS</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatorInfo;