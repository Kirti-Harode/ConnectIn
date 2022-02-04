import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePosts = posts => ({
    type: RECEIVE_POSTS, 
    posts
})

export const receivePost = post => ({
    type: RECEIVE_POST, 
    post
});

export const removePost = postId => ({
    type: REMOVE_POST, 
    postId
});

export const fetchPosts = () => dispatch => (
    PostApiUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = postId => dispatch => (
    PostApiUtil.fetchPost(postId).then(post => dispatch(receivePost(post)))
);

export const createPost = formData => dispatch => (
    PostApiUtil.createPost(formData).then(post => dispatch(receivePost(post)))
);

export const updatePost = post => dispatch => (
    PostApiUtil.updatePost(post).then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => {
    return PostApiUtil.deletePost(postId).then(() => dispatch(removePost(postId)))
};