import React from "react";
import DescriptionTitle from "../common/DescriptionTitle";
const StudentFeeback = () => {
 

  return (
    <div className="student-feedback-container">
     
 <DescriptionTitle title="student feedback" />
      <div className="std-feedback-wraper shadow p-4">
        <div className="left-course-rating">
          <h1 className="number-rating">5.0</h1>
          <div className="left-rating-star">
            {[1, 2, 3, 4, 5].map((item, i) => (
              <span key={i}>
                <i className="bi bi-star-fill ms-1"></i>
              </span>
            ))}

            <h4>Course Rating</h4>
          </div>
        </div>

        <div className="right-star-rating ">
          <div className="rating-box">
            <span>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <span className="rating-percent">100%</span>
            </span>
          </div>
          <div className="rating-box">
            <span>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>
              <span className="rating-percent">0%</span>
            </span>
          </div>
          <div className="rating-box">
            <span>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <span className="rating-percent">0%</span>
            </span>
          </div>
          <div className="rating-box">
            <span>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <span className="rating-percent">0%</span>
            </span>
          </div>
          <div className="rating-box">
            <span>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <span className="rating-percent">0%</span>
            </span>
          </div>
         
        </div>
      </div>
    </div>
  );
};
// BE5A0E
export default StudentFeeback;
