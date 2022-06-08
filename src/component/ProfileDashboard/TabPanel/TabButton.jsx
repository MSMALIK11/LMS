import React from "react";
import "../style/tabpannel.scss";
const TabButton = ({ setActiveTab }) => {
  return (
    <>
      <div className="learning-tab-button  mt-4 mb-4 ">
        <button onClick={() => setActiveTab("MYLEARNING")}>All course</button>
        <button onClick={() => setActiveTab("ALLCOURSES")}>My List</button>
        <button onClick={() => setActiveTab("ALLCOURSES")}>Wishlist</button>
      </div>
    </>
  );
};

export default TabButton;
