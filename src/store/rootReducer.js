// src/store/rootReducer.js

import { combineReducers } from "redux";
import projectSlice from "../fetures/projects/projectSlice";
import workSlice from "../fetures/works/workSlice";
import experienceSlice from "../fetures/experiences/experienceSlice";
import aboutSlice from "../fetures/about/aboutSlice";

const rootReducer = combineReducers({
    projects: projectSlice,
    works: workSlice, 
    experiences: experienceSlice,
    about: aboutSlice 
});

export default rootReducer;
