import { createReducer } from "@reduxjs/toolkit";
const initialState={}
export const  userReducer=createReducer(initialState,{

    loginUserRequest:(state)=>{
        state.loading=true;
        state.isAuthenticated=false
    },
    loginUserSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
           state.isAuthenticated = true;
    },
    loginUserFail:(state,action)=>{
        state.loading=true;
     
       
           state.isAuthenticated = false;
    },
    loadUserRequest:(state)=>{
        state.loading=true;
           state.isAuthenticated = false;
    },
    loadUserSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
           state.isAuthenticated = true;
    },
    loadUserFail:(state,action)=>{
        state.loading=true;
        state.error=action.payload;
           state.isAuthenticated = false;

    }

})