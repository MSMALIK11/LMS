import React, { useState } from "react";

import { Tabs, Tab } from "react-bootstrap";
import LectureList from "./content/LectureList";
import Notes from './notes/Notes'
import Qna from "./Qna/Qna";
import Review from "./review/Review";

const PlayerTabPanel = ({ course }) => {
  const [key, setKey] = useState("content");

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        justify
      >
        <Tab eventKey="content" title="Content">
          <div>
            <LectureList course={course} />
          </div>
        </Tab>
        <Tab eventKey="notes" title="Notes">
          <Notes />
        </Tab>
        <Tab eventKey="qna" title="Q&A">
         <Qna />
        </Tab>
        <Tab eventKey="review" title="Review">
      <Review />
        </Tab>
      </Tabs>
    </div>
  );
};

export default PlayerTabPanel;
