import React from "react";

const CourseAccordian = ({ data }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="accourian-container shadow">
      <div className="accordian-item p-3 mb-2">
        <span className="accordian-title">{data.title}</span>
        <span className="accordian-icon" onClick={() => setShow(!show)}>
          {!show ? (
            <i className="bi bi-plus "></i>
          ) : (
            <i className="bi bi-dash-lg"></i>
          )}
        </span>
      </div>
      {show && (
        <div className="accordian-body ">
          {data &&
            data.body.map((item, i) => {
              return (
                <div className="transition 2s accordian-body-info d-flex align-items-center" key={i} >
                  <span>
                    <i className="bi bi-play-btn play-btn-icon fs-2 me-3 "></i>
                  </span>
                  <span className="body-title fs-4 text-capitalize">
                    {item}
                  </span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default CourseAccordian;
