import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveUser = (user) => {
    // debugger
    return {
    type: RECEIVE_USER,
    user
}};

export const fetchUsers = () => dispatch => (
    UserApiUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
)

export const fetchUser = userId => dispatch => {
    // debugger
    return (
        UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
    )
}


export const updateUser = user => dispatch => (
        UserApiUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
)
    
