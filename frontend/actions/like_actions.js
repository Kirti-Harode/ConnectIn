import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

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

export const fetchLikes = () => dispatch => (
    LikeAPIUtil.fetchLikes().then(likes => dispatch(receiveLikes(likes)))
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