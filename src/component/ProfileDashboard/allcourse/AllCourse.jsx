import React from "react";
import Card from "./Card";
import img1 from '../../../images/img-5.jpg'
import img2 from '../../../images/img-1.jpg'
import img3 from '../../../images/img-4.jpg'

const AllCourse = () => {

const mylearning=[
  {
    title:'React',
    img:img1
  },
  {
    title:'Bootstrap',
    img:img2
  },
  {
    title:'javascript',
    img:img3
  },
]
  
  return (
    <>
      {/* <div className="row">
        <div className="col-sm-4 col-md-4">
          <h1>left side bar here</h1>
          <div className="account-sidebar"></div>
        </div>
        <div className="col-sm-8 col-md-8"> */}
      <div className="row">
        {!mylearning ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          mylearning.map((mycourse, i) => (
            <div className="col-sm-6 col-md-6 col-lg-3" key={i}>
              <Card mycourse ={mycourse}/>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AllCourse;
