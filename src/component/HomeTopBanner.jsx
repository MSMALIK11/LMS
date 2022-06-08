import React from "react";

import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import HomeTabOption from './HomeTabOption';
import imgRight from '../images/banner-tight.png';

// home banner component 
const HomeTopBanner = () => {
  return (
    <>
      <div className="banner-top-wraper ">
       
        <div className="row">
          <div className="col-sm-12 col-lg-67 col-md-6">
            <div className="banner-details">
              <span className="satrt-to-success">start to success</span>
              <h1 className="banner-main-heading">
              
                  Access to <mark>55500</mark>
                  Courses from <mark>480</mark>
                  instructor & institution
             
                <span>take your learning to the next level</span>
              </h1>

        
        <button className="banner-btn shadow-lg">Browse Courses</button>
              
            </div>
          </div>
          <div className="col-sm-12 col-lg-67 col-md-6">
            <div className="banner-right-image ">
              <img src={imgRight} alt="" className="img-fluid" />
            </div>

          </div>
        </div>
      </div>
      <div className="course-card-component" >
        <h1 className="course-card-top-title">student's are viewing </h1>
        <HomeCard />
        <div className="container">
          <h1 className="text-uppercase mt-5">beginner level course </h1>
          <HomeTabOption />
        </div>
      </div>
    </>
  );
};

export default HomeTopBanner;
