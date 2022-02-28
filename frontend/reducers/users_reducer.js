import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";
const usersReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    // debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser
            return nextState;
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            // debugger
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;