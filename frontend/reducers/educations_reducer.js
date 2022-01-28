import { RECEIVE_EDUCATION, RECEIVE_ALL_EDUCATIONS , REMOVE_EDUCATION} from "../actions/education_actions";

const educationsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_EDUCATIONS:
           return {...state, ...action.educations};
        case RECEIVE_EDUCATION:   
            nextState[action.education.id] = action.education;
            return nextState;
        case REMOVE_EDUCATION:
            delete nextState[action.educationId];
            return nextState;    
        default:
           return state;
    }
}

export default educationsReducer;