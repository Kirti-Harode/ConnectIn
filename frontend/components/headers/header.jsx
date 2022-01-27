import React from "react";
import { connect } from "react-redux";
import FrontPageHeader from "./frontpage_header";
import SplashHeader from "./splash_header";

class Header extends React.Component {
    render(){
        const display = this.props.currentUser ? (
            <nav>
                <SplashHeader/>
            </nav>
        ) : (
            <nav>
                <FrontPageHeader/>
            </nav>
        )
        return (
            <div>
                {display}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const HeaderContainer = connect(mapStateToProps, null)(Header);
export default HeaderContainer;