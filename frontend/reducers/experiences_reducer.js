import {RECEIVE_ALL_EXPERIENCES, RECEIVE_EXPERIENCE,REMOVE_EXPERIENCE } from "../actions/experience_actions";

const experienceReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_EXPERIENCES:
           return {...state, ...action.experiences};
        case RECEIVE_EXPERIENCE:   
            nextState[action.experience.id] = action.experience;
            return nextState;
        case REMOVE_EXPERIENCE:
            delete nextState[action.experienceId];
            return nextState;    
        default:
           return state;
    }
}

export default experienceReducer;