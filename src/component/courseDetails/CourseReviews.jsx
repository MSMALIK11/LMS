import React from "react";

import DescriptionTitle from "../common/DescriptionTitle";
const CourseReviews = () => {
  const data=[
    {
      name:'Adam',
      date:'Apr 04 2022',
      comment:' its very wonderfull my course experience'
    },
    {
      name:'serkan',
      date:'Apr 06 2022',
      comment:' its very wonderfull my course experience'
    }
  ]
  return (
    <>
      <div className="reviews-container">
<DescriptionTitle title="reviews" />
        {data && data.map((item,i)=>{
          return (
            <div className="reviews-wraper mb-5 " key={i}>
              <div className="author-avatar">
                <span>
                  <i className="bi bi-person-circle auhtor-icon"> </i>
                </span>
              </div>
              <div className="author-details ">
                <h4>{item.name}</h4>
                <div className="star">
                  {[1, 2, 3, 4].map((item, i) => (
                    <span key={i}>
                      <i className="bi bi-star-fill"></i>
                    </span>
                  ))}

                  <span className="ms-3">
                    <i>{item.date}</i>
                  </span>
                </div>
                <span className="author-comment ">
                  it's very wonderfull my course experience
                </span>
              </div>
            </div>
          );
        })}
       
      </div>
    </>
  );
};

export default CourseReviews;
