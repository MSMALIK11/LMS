import React, { useEffect } from "react";


import SingleCourseBanner from "./courseDetails/SingleCourseBanner";

import { useLocation } from "react-router-dom";

import { Context } from "./context";
import { useContext } from "react";
import ReactVideoPlayer from "./courseDetails/ReactVideoPlayer";
import CourseByCard from "./courseDetails/CourseByCard";
import MainDiscription from "./courseDescription/MainDiscription";
import CourseStructure from "./courseDetails/CourseStructure";
import StudentFeeback from "./courseDetails/StudentFeeback";
import CourseReviews from "./courseDetails/CourseReviews";
import GoalsContent from "./courseDescription/GoalsContent";
import YourInstructor from "./courseDescription/Yourinstructor";
import DescriptionTitle from "./common/DescriptionTitle";
import {useSelector,useDispatch} from 'react-redux';
import { getSingleCourse } from "../Store/Actions/courseAction";
import { useParams } from "react-router-dom";
import Loading from "./common/Loading";
const SongleCourse = () => {
  
  const { courseTitle } = useParams();
const {loading,singleCourse}=useSelector((state)=>state.singleCourse)

const course = singleCourse && singleCourse.singleCourse;
  console.log('single course',loading,course)
  
 const dispatch=useDispatch();

  useEffect(async () => {
    await dispatch(getSingleCourse(courseTitle));
   
  }, [dispatch]);




  return (
    <>
      {loading  ? (
        <Loading />
      ) : (
        <div className="main-container ">
          <div className=" main-wraper position-relative">
            {/* course free  price card */}
            <CourseByCard course={course}  />
            <div className="container pb-4">
              <div className="row d-flex ">
                <div className="col-sm-12 col-md-12 col-lg-6   order-lg-first order-md-last order-sm-last order-xs-last">
                  <SingleCourseBanner course={course}  loading={loading} />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6  order-lg-last order-md-first  order-sm-first  ">
                  <div className="d-sm-block d-md-block d-lg-none">
                    {/* <ReactVideoPlayer videoLink={course.lacture[0].link} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            {/* <Description /> */}
            <GoalsContent />
            <div className="mt-5">
              <MainDiscription />
            </div>
            <div className="mt-5">
              <CourseStructure />
            </div>
            <div className="mt-5">
              <StudentFeeback />
            </div>
            <div className="mt-5">
              <CourseReviews />
            </div>
            <div className="mt-5">
              <DescriptionTitle title="your instructor" />
              <YourInstructor />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SongleCourse;
