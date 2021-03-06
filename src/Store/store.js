import {configureStore} from '@reduxjs/toolkit'
import { addCourseReducer, addLessonReducer, courseReducer, getSingleCourseReducers } from './reducers/courseReducers';
import { userReducer } from './reducers/userReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    courses: courseReducer,
    addCourse: addCourseReducer,
    addlesson: addLessonReducer,
    singleCourse: getSingleCourseReducers
  },
});

