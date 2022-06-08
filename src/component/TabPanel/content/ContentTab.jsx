import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./content.scss";
import { NavLink,useParams} from "react-router-dom";


const ContentTab = ({ course }) => {
 
  const [activeLink,setActiveLink]= useState('')
  let slug = useParams();



  return (
    <div className="shadow con-wraper">
   

      {course.lacture.map((session, index) => { 

      
        return (
          <div className="contentLink">
            
            <NavLink
              onClick={() => setActiveLink(session)}
              to={{
                pathname: `/course/${course.title}/${session.title}`,
              }}
            
              key={index}
            //  className="nav-link"
              className={`nav-link content-item ${session.title===slug.classTitle? "active" : ""}`}
            >
              <div className="content-title active">
                <span className="me-3">
                  <i className="bi bi-check-circle "></i>
                </span>
                {session.title} 
              </div>
            </NavLink>
          </div>
        );


      })}
    </div>
  );
};

export default ContentTab;
