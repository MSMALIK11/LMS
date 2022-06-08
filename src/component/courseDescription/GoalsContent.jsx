import React from "react";
import "./style/goalscontent.scss";
import DescriptionTitle from "../common/DescriptionTitle";
const GoalsContent = () => {
  return (
    <div className="mt-4 goals-content-wraper">
      {" "}
      <DescriptionTitle title="Goals" />
      <ul>
        <li>
          <span>
            <i className=" bi bi-check-lg "></i>
          </span>
          React Hooks
        </li>
        <li>
          <span>
            {" "}
            <i className=" bi bi-check-lg  "></i>
          </span>{" "}
          react routing
        </li>
        <li>
          <span>
            <i className=" bi bi-check-lg  "></i>
          </span>{" "}
          state management in react - context-
          <span className="text-uppercase"> API</span>
        </li>
      </ul>
    </div>
  );
};

export default GoalsContent;
