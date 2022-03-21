export const fetchLikes = () => (
    $.ajax({
        method: 'GET', 
        url: "/api/likes"
    })
)

export const fetchLike = (likeId) => (
    $.ajax({
        method: 'GET', 
        url: `/api/likes/${likeId}`
    })
)

export const createLike = (like) => (
    $.ajax({
        method: 'POST', 
        url: "/api/likes", 
        data: {like}
    })
)

export const deleteLike = (likeId) => (
    $.ajax({
        method: 'DELETE', 
        url: `/api/likes/${likeId}`
    })
);

export const fetchPostLikes = (likeable_id) => (
    $.ajax({
        method: 'GET', 
        url: `/api/likes/postlikes/${likeable_id}`
    })
);
