import { createReducer } from "@reduxjs/toolkit";
const initialState={}
export const courseReducer=createReducer(initialState,{
    getCourseRequest:(state)=>{
        state.loading=true
    },
    getCourseSuccess:(state,action)=>{
        state.loading=false;
        state.courses=action.payload
    },
    getCourseFail:(state)=>{
        state.loading=true;
    }


});

// add course reducers
export const addCourseReducer=createReducer(initialState,{
    addCourseRequest:(state)=>{
        state.loading=true
    },
    addCourseSeccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload
    },
    addCourseFail:(state)=>{
        state.loading=true;
    }
});
// add lessons
export const addLessonReducer = createReducer(initialState, {
  addLessonRequest: (state) => {
    state.loading = true;
  },
  addLessonSeccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  addlessonFail: (state) => {
    state.loading = true;
  },
});


// getSingleCourse 
export const getSingleCourseReducers=createReducer(initialState,{
  getSingleCourseRequest:(state)=>{
    state.loading=true;
  },
  getSingleCourseSuccess:(state,action)=>{
    state.loading=false;
    state.singleCourse=action.payload;
  },
  
  getSingleCourseFail:(state)=>{
    state.loading=true;
 
  },


})

