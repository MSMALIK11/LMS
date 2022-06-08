import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const Taboptions = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <div className="tabButton container">
        <button onClick={() => setActiveTab("beginner")}>
          <FontAwesomeIcon icon={faUser} className="me-3" />
          Beginner
        </button>
        <button onClick={() => setActiveTab("expert")}>
          <FontAwesomeIcon icon={faUser} className="me-3" />
          expert
        </button>
        <button onClick={() => setActiveTab("everyone")}>
          <FontAwesomeIcon icon={faUser} className="me-3" />
          everyone
        </button>
      </div>
    </div>
  );
};

export default Taboptions;
