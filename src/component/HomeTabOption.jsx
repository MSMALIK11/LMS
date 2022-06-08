import React, { useState } from "react";

// import "../styles/BannerReuse/bannerReuse.scss";
import Taboptions from "./TextCourse/Taboptions";
import TrendingCourse from "./TextCourse/TrendingCourse";

import CourseSlider from "./CourseSlider";

const HomeTabOption = () => {
  const [activeTab, setActiveTab] = useState("beginner");
  return (
    <div className="mt-5">
      {/* <img src={Banner} alt="banner"className="banner-img" /> */}

      <div className=" mt-5">
        <div className="row">
          <div className="col-md-12  col-lg-3">
            <Taboptions activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="col-md-12 col-lg-9">{getCurrenttab(activeTab)}</div>
        </div>
      </div>
    </div>
  );
};

const getCurrenttab = (tab) => {
  switch (tab) {
    case "beginner":
      return <TrendingCourse />;

    case "expert":
      return <CourseSlider />;
    case "everyone":
      return <h1>everyone</h1>;
  }
};

export default HomeTabOption;
