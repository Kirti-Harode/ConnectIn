import * as AboutApiUtil from '../util/about_api_util';

export const RECEIVE_ALL_ABOUTS = 'RECEIVE_ALL_ABOUTS';
export const RECEIVE_ABOUT = 'RECEIVE_ABOUT';
export const REMOVE_ABOUT = 'REMOVE_ABOUT';

const receiveAllAbouts = abouts =>({
    type: RECEIVE_ALL_ABOUTS,
    abouts
});

const receiveAbout = about =>({
    type: RECEIVE_ABOUT,
    about
});

const removeAbout = aboutId =>{
    debugger
    return{
    type: REMOVE_ABOUT,
    aboutId
}};

export const fetchAllAbouts = userId => dispatch  => (
    AboutApiUtil.fetchAllAbouts(userId)
    .then(abouts => dispatch(receiveAllAbouts(abouts)))
);

export const createAbout = about => dispatch  => (
    AboutApiUtil.createAbout(about)
    .then(about => dispatch(receiveAbout(about)))
);

export const updateAbout = about => dispatch  => {
    // debugger
    return AboutApiUtil.updateAbout(about)
    .then(about => dispatch(receiveAbout(about)))
};

export const deleteAbout = aboutId => dispatch  => (
    AboutApiUtil.deleteAbout(aboutId)
    .then(() => dispatch(removeAbout(aboutId)))
);