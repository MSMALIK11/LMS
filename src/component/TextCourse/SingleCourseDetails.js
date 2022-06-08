import React from "react";
import { useParams } from "react-router";
import HomePage from "./htmlpages/HomePage";

const SingleCourseDetails = () => {
  let { id } = useParams();

  return <div className="mt-4 pt-4">{getCurrentCourse(id)}</div>;
};

const getCurrentCourse = (curid) => {
  switch (curid) {
    case "1":
      return <HomePage />;

    case "2":
      return <h1>css course </h1>;
    case "3":
      return <h1>bootstrap course :)</h1>;

    default:
      break;
  }
};

export default SingleCourseDetails;
