export const fetchAllExperiences = userId => (
    $.ajax({
        url: '/api/experience',
        method: 'GET',
        data: {userId}
    })
)

export const createExperience = experience => (
    $.ajax({
        url: 'api/experience',
        method: 'POST',
        data: {experience}
    })
)

export const updateExperience = experience => (
    $.ajax({
        url: `api/experience/${experience.id}`,
        method: 'PATCH',
        data: {experience}
    })
)

export const deleteExperience = experienceId => (
    $.ajax({
        url: `api/experience/${experienceId}`,
        method: 'DELETE'
    })
)