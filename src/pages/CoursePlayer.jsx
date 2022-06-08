import React, { useState, useEffect, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import CourseList from "../component/coursecontent/CourseList";
import { Context } from "../component/context";

import { useParams } from "react-router-dom";

const CoursePlayer = () => {
  const [video, setVideo] = useState([]);

  // const courses = location.state.courses;

  let slug = useParams();

  const { state, dispatch } = useContext(Context);
  const Course = state.courseList;

  useEffect(() => {
    const vlink = Course.lacture.find((lac) => lac.title == slug.classTitle);

    setVideo(vlink);
  }, [slug.classTitle]);

  const index = 1;

  return (
    <div className="course-player-container-wraper margin-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-12 col-lg-8 ">
            <div className="wraper">
              <h3>
                Dashboard
                <span>
                  <FontAwesomeIcon icon={faArrowRight} /> Course
                </span>
                <span className="text-capitalize">
                  <FontAwesomeIcon icon={faArrowRight} /> {Course.title}
                </span>
              </h3>

              <div className="player-wraper mt-4 ">
                <ReactPlayer
                  url={video.link}
                  className="react-player"
                  width="100%"
                  height="35rem"
                  playing={false}
                  muted={true}
                  controls={true}
                />

                <h1 className="mt-4 text-capitalize">
                  {index}. {slug.classTitle}
                </h1>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4">
            <CourseList course={Course} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;
