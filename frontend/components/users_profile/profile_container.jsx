import Profile from "./profile";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    profileUser: state.entities.users[ownProps.match.params.userId],
    about: state.entities.abouts,
    experiences: state.entities.experiences,
    educations: state.entities.educations
});

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    // fetchUsers: () => dispatch(fetchUsers())
    // showmodel
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);