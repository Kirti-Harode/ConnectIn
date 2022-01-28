import * as EducationApiUtil from '../util/education_api_util';

export const RECEIVE_ALL_EDUCATIONS = 'RECEIVE_ALL_EDUCATIONS ';
export const RECEIVE_EDUCATION = 'RECEIVE_EDUCATION';
export const REMOVE_EDUCATION = 'REMOVE_EDUCATION';

const receiveAllEducations = educations =>({
    type: RECEIVE_ALL_EDUCATIONS,
    educations
});

const receiveEducation = education =>({
    type: RECEIVE_EDUCATION,
    education
});

const removeEducation = educationId =>({
    type: REMOVE_EDUCATION,
    educationId
});

export const fetchAllEducations = userId => dispatch  => (
    EducationApiUtil.fetchAllEducations(userId)
    .then(educations => dispatch(receiveAllEducations(educations)))
);

export const createEducation = education => dispatch  => (
    EducationApiUtil.createEducation(education)
    .then(education => dispatch(receiveEducation(education)))
);

export const updateEducation = education => dispatch  => (
    EducationApiUtil.updateEducation(education)
    .then(education => dispatch(receiveEducation(education)))
);

export const deleteEducation = educationId => dispatch  => (
    EducationApiUtil.deleteEducation(educationId)
    .then(() => dispatch(removeEducation(educationId)))
);