import React from "react";
import { useState,useEffect,useContext } from "react";


import "./style/profile.scss";
import avatar from "./images/avatar.png";
import img1 from "./images/p-1.svg";
import img2 from "./images/p-2.svg";

import { Context } from "../context";
import { getUserInfo } from "../API/api";


const Profile = () => {

 const { state, dispatch } = useContext(Context);

 const {user}=state.user;
 console.log('user',user)

  // useEffect(() => {
  //   const {token}=JSON.parse(window.localStorage.getItem('user'))
  //  console.log('local token ',token)
  //   const getProfile=async ()=>{
  //     const data=await getUserInfo(token);
  //     if(data){
  //          dispatch({ type: "LOAD_USER",payload:data });

       
  //     }
  //   }

  //   getProfile()
  // }, [])
  

  return (
    <>
      <div className="mt-5 user-profile-wraper">
        <div className="user-profile">
          <div className="user-avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="user-details">
          
              <h2 className="text-uppercase"> {user ? user.name:''}  </h2>
       
            <h5>Web Designer</h5>
          </div>
        </div>
        <div className="container top-box-container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="shadow shadow-box">
                <div className="left">
                  <h1>Total Purchase Courses</h1>
                  <h3>15</h3>
                  <div className="new">
                    <h5>new 5</h5>
                  </div>
                </div>
                <div className="right-img">
                  <img src={img1} alt="sales" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="shadow shadow-box">
                <div className="left">
                  <h1>Total Instructor Subscribing</h1>
                  <h3>15</h3>
                  <div className="new">
                    <h5 className="new-2">new 5</h5>
                  </div>
                </div>
                <div className="right-img">
                  <img src={img2} alt="sales" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Mylearning /> */}
    </>
  );
};

export default Profile;
