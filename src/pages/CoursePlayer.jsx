import React, { useState, useEffect} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import CourseList from "../component/coursecontent/CourseList";
import { getSingleCourse } from "../Store/Actions/courseAction";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../component/common/Loading";

const CoursePlayer = () => {
  const [video, setVideo] = useState([]);
const dispatch=useDispatch();
const { loading, singleCourse } = useSelector((state) => state.singleCourse);

const course = singleCourse && singleCourse.singleCourse;
  let slug = useParams();

  console.log('loading',loading,slug)

  useEffect(() => {
    const vlink = course?.lessons.find((lesson) => lesson.title===slug.classtitle);
console.log('vlink',vlink)
if(!video) return;

    setVideo(vlink.link);
  }, [slug]);
  useEffect(()=>{
    getSingleCourse(slug.title)

  },[dispatch,slug.classtitle])

  const index = 1;

  return (
    <>
    {
      loading ? <Loading />:
    
      <div className="course-player-container-wraper margin-top">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 col-12 col-lg-8 ">
              <div className="wraper">
                <h3>
                  Dashboard
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} /> Course
                  </span>
                  <span className="text-capitalize">
                    <FontAwesomeIcon icon={faArrowRight} /> {course?.title}
                  </span>
                </h3>

                <div className="player-wraper mt-4 ">
                  <ReactPlayer
                    url={video.url}
                    className="react-player"
                    width="100%"
                    height="35rem"
                    playing={false}
                    muted={true}
                    controls={true}
                  />

                  <h3 className="mt-4 text-capitalize">
                    {index}. {slug.classtitle}
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <CourseList course={course} />
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default CoursePlayer;
