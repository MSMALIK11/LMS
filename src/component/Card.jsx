import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useSelector} from 'react-redux';

import {

  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { Context } from "./context";
import content from "./videoscontent";
import { useNavigate } from "react-router-dom";
import Loading from "./common/Loading";
import lock from '../images/lock.png';
import Dailoag from "./coursePreviewDialog/Dailoag";

const Card = () => {
 
  const [preview,setPreview]=useState(null)
  const {loading,courses}=useSelector((state)=>state.courses)
  console.log('courses',loading,courses)

  const navigate = useNavigate();


  const handleHover=(item)=>{
    setPreview(item)
  }

  return (
    <>
      {/* <div className="heading-wraper  mt-5 ms-4"></div> */}
      {loading ? (
        <Loading />
      ) : (
        <div className="row relative">
          {courses && courses.course.map((course, index) => {
            return (
              <div
                key={course._id + index}
                className="col-sm-12 col-md-6 col-lg-4 "
              >
                <div
                  className="card my-4 rounded shadow v-course"
                  onMouseEnter={() => handleHover(course)}
                  onMouseLeave={() => handleHover(null)}
                >
                  {preview && preview._id == course._id && (
                    <Dailoag course={course} />
                  )}
                  {course.lessons.length>1 ? (
                    ""
                  ) : (
                    <div className="comming-soon">
                      <img src={lock} alt="lock" />

                      <h4 className="text-capitalize mt-4 text-light">comming soon</h4>
                    </div>
                  )}

                  <img
                    src={course.image.url}
                    className="card-img-top"
                    alt={course.title}
                  />

                  <div className="card-body p-4">
                    <h3
                      className="card-title"
                      onClick={() =>
                        navigate(`/course/${course.title}`)
                      }
                    >
                      {course.title.slice(0, 53) + "..."}
                    </h3>

                    <h4 className="card-author">Created by {course.instructor.name}</h4>
                    {/* <h3 className="card-duration">
                      <span className="hour">{course.duritation} .</span>
                      <span>{course.lactures}</span>
                    </h3> */}
                    <h3 className="card-text card-price">
                      <span className="free">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                      </span>
                      <span className="bold badge bg-success">Free</span>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Card;
