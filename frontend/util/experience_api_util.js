export const fetchAllExperiences = userId => (
    $.ajax({
        url: '/api/experiences',
        method: 'GET',
        data: {userId}
    })
)

export const createExperience = experience => (
    $.ajax({
        url: 'api/experiences',
        method: 'POST',
        data: {experience}
    })
)

export const updateExperience = experience => (
    $.ajax({
        url: `api/experiences/${experience.id}`,
        method: 'PATCH',
        data: {experience}
    })
)

export const deleteExperience = experienceId => (
    $.ajax({
        url: `api/experiences/${experienceId}`,
        method: 'DELETE'
    })
)