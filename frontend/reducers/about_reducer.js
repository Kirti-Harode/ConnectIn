import { RECEIVE_ALL_ABOUTS, RECEIVE_ABOUT, REMOVE_ABOUT } from "../actions/about_actions";

const aboutReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_ABOUTS:
           return {...state, ...action.abouts};
        case RECEIVE_ABOUT:   
            nextState[action.about.id] = action.about;
            return nextState;
        case REMOVE_ABOUT:
            delete nextState[action.aboutId];
            return nextState;    
        default:
           return state;
    }
}

export default aboutReducer;