import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faUser,

} from "@fortawesome/free-solid-svg-icons";
import {format} from 'timeago.js';
import Loading from "../common/Loading";

import { useNavigate } from "react-router-dom";
const CourseTopRightDetails = ({ course, loading }) => {
  const navigate = useNavigate();
  const classTitle = course && course.lessons[0].title;
  return (
    <div>
      {loading ? <Loading /> : 
      <div className="course-baner ">
        <div className="container  details">
          <h4 className="course-title mt-5 mb-4 text-capitalize">
            {course?.title}
          </h4>

          <div className="rating">
            <span className="me-3 text-light ">Rating's</span>
            <span className="rating-box text-light"> 4.9 </span>

            <span>
              <FontAwesomeIcon icon={faStar} className="text-warning ms-2" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} className="text-warning ms-2" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} className="text-warning ms-2" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} className="text-warning ms-2" />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                className="text-warning ms-2"
              />
            </span>

            <span className="ms-4 text-light">
              <FontAwesomeIcon icon={faUser} className="text-light me-1" /> 199
              Enrolled
            </span>
          </div>
          <h5 className="mt-4 text-uppercase text-light">
            created by {course?.instructor.name}
          </h5>
          <h5 className="text-muted">Last {format(course?.createdAt)}</h5>

          <div className="enroll sm-d-block md-d-block lg-d-none   sm-justify-content-center">
            <button
              onClick={() =>
                navigate(`course/${course.title}/${classTitle}`, {
                  state: { courses: course },
                })
              }
              className="start-btn  mt-4 start-course shadow "
            >
              Enroll Free
            </button>
          </div>
        </div>
      </div>
}
    </div>
  );
};

export default CourseTopRightDetails;
