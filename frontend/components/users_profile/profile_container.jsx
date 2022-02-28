import Profile from "./profile";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import {fetchConnections} from '../../actions/connection_actions'
import {fetchAllAbouts} from '../../actions/about_actions';
import {fetchAllEducations} from '../../actions/education_actions';
import {fetchAllExperiences} from '../../actions/experience_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    otherUser: state.entities.users[ownProps.match.params.userId],
    about: state.entities.abouts,
    experiences: state.entities.experiences,
    educations: state.entities.educations
});

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchConnections: userId => dispatch(fetchConnections(userId)),
    fetchAllAbouts: userId => dispatch(fetchAllAbouts(userId)),
    fetchAllEducations: userId => dispatch(fetchAllEducations(userId)),
    fetchAllExperiences: userId => dispatch(fetchAllExperiences(userId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);