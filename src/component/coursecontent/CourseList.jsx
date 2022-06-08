import React, { useState } from "react";

import { Tabs, Tab } from "react-bootstrap";
import ContentTab from "../TabPanel/content/ContentTab";

const CourseList = ({ course }) => {
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
            <ContentTab course={course} />
          </div>
        </Tab>
        <Tab eventKey="notes" title="Notes">
          <h1>notes</h1>
        </Tab>
        <Tab eventKey="qna" title="Q&A">
          <h1>qna</h1>
        </Tab>
        <Tab eventKey="review" title="Review">
          <h1>rewiew</h1>
        </Tab>
      </Tabs>
    </div>
  );
};

export default CourseList;
