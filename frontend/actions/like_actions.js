import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_POST_LIKES = 'RECEIVE_POST_LIKES';


const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});

const receivePostLikes = likes => ({
    type: RECEIVE_POST_LIKES,
    likes
});

export const fetchLikes = () => dispatch => (
    LikeAPIUtil.fetchLikes().then(likes => {
        let likesLen = Object.keys(likes).length;
        // console.log(likesLen)
        return dispatch(receiveLikes(likesLen))})
)

export const fetchLike = (likeId) => dispatch => (
    LikeAPIUtil.fetchLike(likeId).then(like => dispatch(receiveLike(like)))
)

export const createLike = like => dispatch => (
    LikeAPIUtil.createLike(like).then(like => dispatch(receiveLike(like))
  )
);

export const deleteLike = likeId => dispatch => (
    LikeAPIUtil.deleteLike(likeId).then(() => dispatch(removeLike(likeId))
  )
);

export const fetchPostLikes = (likeable_id) => dispatch => (
    LikeAPIUtil.fetchPostLikes(likeable_id).then(likes => dispatch(receivePostLikes(likes)))
);