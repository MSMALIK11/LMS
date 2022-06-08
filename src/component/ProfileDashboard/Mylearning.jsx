import React, { useState } from "react";
import TabButton from "./TabPanel/TabButton";
import AllCourse from "./allcourse/AllCourse";
import "./style/tabpannel.scss";

const Mylearning = () => {
  const [activeTab, setActiveTab] = useState("MYLEARNING");
  return (
    <div className="container  my-learning ">
      <h1>
        My <span>Learning</span>
      </h1>
      <TabButton setActiveTab={setActiveTab} />
      <div className="My-learning-current-tab">{getCurrenTab(activeTab)}</div>
    </div>
  );
};

const getCurrenTab = (tab) => {
  switch (tab) {
    case "MYLEARNING":
      return <AllCourse />;

    case "ALLCOURSES":
      return <h1>ALL COURSES  </h1>;
  }
};
export default Mylearning;
