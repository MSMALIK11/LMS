import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
const Card = () => {
 
  

  const navigate = useNavigate();

 
  return (
    <>
      {/* <div className="heading-wraper  mt-5 ms-4"></div> */}
      {content === null ? (
        <Loading />
      ) : (
        <div className="row">
          {content.courses.map((course, index) => {
            return (
              <div
                key={course.id + index}
                className="col-sm-12 col-md-6 col-lg-4"
              >
                <div className="card my-4 rounded shadow v-course">
                  {course.active == true ? (
                    ""
                  ) : (
                    <div className="comming-soon">
                      <img src={lock} alt="lock" />

                      <h4 className="comming-soon-title">comming soon</h4>
                    </div>
                  )}

                  <img
                    src={course.image}
                    className="card-img-top"
                    alt={course.title}
                  />

                  <div className="card-body p-4">
                    <h3
                      className="card-title"
                      onClick={() =>
                        navigate(`/course/${course.title}`, {
                          state: course,
                          index: index,
                        })
                      }
                    >
                      {course.title.slice(0, 53) + "..."}
                    </h3>

                    <h4 className="card-author"> by {course.author}</h4>
                    <h3 className="card-duration">
                      <span className="hour">{course.duritation} .</span>
                      <span>{course.lactures}</span>
                    </h3>
                    <h3 className="card-text card-price">
                      <span className="free">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                      </span>
                      <span className="bold">{course.price}</span>{" "}
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
