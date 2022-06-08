import React from 'react'

import courses from '../TextCourse/data/htmldata';
import {Link} from 'react-router-dom';
import "../TextCourse/htmlpages/styles/trending/trendingCourse.scss"
import lock from './webimage/lock.png';
const TrendingCourse = () => {
    return (
        <div>
           <div className="row mt-4">
           {
                courses.map((course,index)=>{
                    return (
                        <div key={course.id+index} className="col-lg-3 col-md-4 col-sm-12 m-2">
                         
                            <div className="shadow p-3 bg-light c-box">
                              
                            <img src={course.img} alt="" className="img-fluid" />
                            <Link
                           to={`textcourse/${course.id}`}
                           
                            style={{textDecoration:'none',color:'inherit'}}
                            >
                          <h3 className="text-uppercase m-3">{course.title}</h3>
                          

                          </Link>
                          {course.status==="coming soon"?<div className="coming-soon">
                              <img src={lock} alt="coming soon" />
                             
                          </div>
                          :""}

                          
                            </div>
                            
                           
                        </div>
                    )
                })
            }  
               
               
               </div>          
        </div>
    )
}

export default TrendingCourse
