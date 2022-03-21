import {RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_POST_LIKES} from '../actions/like_actions';

const likeReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        
        case RECEIVE_LIKES:
            // debugger
            return action.likes;
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.likeId]
            return nextState;
        case RECEIVE_POST_LIKES:
            return action.likes; 
        default:
            return state;
    }
}

export default likeReducer;