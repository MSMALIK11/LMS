import React from "react";
import "./style/description.scss";
import avatar from "../../images/avatar-2.jpg";
const YourInstructor = () => {
  return (
    <>
      <div className="author container mt-5">
        
        <div className="author-avatar">
          <div className="img shadow">
            <img src={avatar} alt="" />
          </div>
          <div className="author-info">
            <h1 className="author-name">John Smith</h1>
            <button className=" subscribe-btn shadow">Subscribe</button>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default YourInstructor;
