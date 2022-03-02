export const fetchPosts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/posts'
    })
);

export const fetchPost = (postId) => (
    $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}`
    })
);

export const createPost = (formData) => (
    $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: formData,
        contentType: false,
        processData: false
    })
);


export const updatePost = formData => {
    // console.log(formData.get('post[id]'))
    // debugger
    return $.ajax({
        method: 'PATCH',
        url: `/api/posts/${formData.get('post[id]')}`,
        data: formData, 
        contentType: false,
        processData: false
    })
};

export const deletePost = postId => (
    $.ajax({
        url: `/api/posts/${postId}`,
        method: 'DELETE'
    })
);