import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import aboutReducer from "./about_reducer";
import experienceReducer from "./experiences_reducer";
import educationsReducer from "./educations_reducer";
const entitiesReducer = combineReducers({
    users: usersReducer,
    abouts: aboutReducer,
    educations: educationsReducer,
    experiences: experienceReducer
})

export default entitiesReducer;