export const fetchAllAbouts = userId => (
    $.ajax({
        url: '/api/abouts',
        method: 'GET',
        data: {userId}
    })
)

export const createAbout = about => (
    $.ajax({
        url: 'api/abouts',
        method: 'POST',
        data: {about}
    })
)

export const updateAbout = about => (
    $.ajax({
        url: `api/abouts/${about.id}`,
        method: 'PATCH',
        data: {about}
    })
)

export const deleteAbout = aboutId => (
    $.ajax({
        url: `api/abouts/${aboutId}`,
        method: 'DELETE'
    })
)