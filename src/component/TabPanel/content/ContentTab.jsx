import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./content.scss";
import { NavLink,useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ContentTab = ({course}) => {
//  const { loading, singleCourse } = useSelector((state) => state.singleCourse);

//  const course = singleCourse && singleCourse.singleCourse;
  const [activeLink,setActiveLink]= useState('')

  let slug = useParams();


console.log('tab',course)
  return (
    <div className="shadow con-wraper text-white">
<h2>Total Lecture's ({course.lessons.length} )</h2>

      {course && course.lessons.map((session, index) => { 

      
        return (
          <div className="contentLink"> 
          
   
            <NavLink
              onClick={() => setActiveLink(session)}
              to={{
                pathname: `/course/${course.title}/${session.title}`,
              }}
              
            
              key={index}
            //  className="nav-link"
              className={`nav-link content-item ${session.title===slug.classtitle? "active" : ""}`}
            >
              <div className="content-title active">
                <span className="me-3">
                  <i className="bi bi-check-circle "></i>
                </span>
                {session?.title} 
              
              </div>
            </NavLink>
          </div>
        );


      })}
    </div>
  );
};

export default ContentTab;
