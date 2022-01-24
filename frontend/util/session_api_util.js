export const postUser = user =>{
    // debugger
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: {user}
    })
}

export const postSession = user =>{
    // debugger
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: {user}
    })
}

export const deleteSession = () =>{
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
}