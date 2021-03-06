import {RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST} from '../actions/post_actions';

const postReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_POSTS:
            return {...state, ...action.posts};
            // return action.posts;
        case RECEIVE_POST:
            // debugger
            nextState[action.post.id] = action.post
            return nextState;
        case REMOVE_POST:
            delete nextState[action.postId]
            return nextState;
        default:
            return state;
    }
}

export default postReducer;