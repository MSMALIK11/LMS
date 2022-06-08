import React, { useEffect } from "react";


import CourseTopRightDetails from "./courseDetails/CourseTopRightDetails";

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

const SongleCourse = () => {
  const { state, dispatch } = useContext(Context);

  const location = useLocation();
  const course = location.state;
 

  useEffect(() => {
    dispatch({
      type: "GET_COURSE",
      payload: course,
    });
  }, [course]);
  useEffect(() => {
    window.localStorage.setItem("courseList", JSON.stringify(course));
  }, [course]);

  const classTitle = course.lacture.map((session) => session.title);

  return (
    <div className="main-container ">
     
      <div className="bg-dark position-relative">
        {/* course free  price card */}
        <CourseByCard course={course} classTitle={classTitle} />
        <div className="container pb-4">
          <div className="row d-flex">
            <div className="col-sm-12 col-md-12 col-lg-6   order-lg-first order-md-last order-sm-last ">
              {/* <ReactVideoPlayer videoLink={course.lacture[0].link} /> */}
              <CourseTopRightDetails course={course} classTitle={classTitle} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6  order-lg-last order-md-first  order-sm-first ">
              <div className="d-sm-block d-md-block d-lg-none">
                <ReactVideoPlayer videoLink={course.lacture[0].link} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* course description  */}
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
  );
};

export default SongleCourse;
