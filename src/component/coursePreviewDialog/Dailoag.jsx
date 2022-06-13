import React from 'react'

// 30 day money back guarantee!
// Lifetime Access. No Limits!
// Certificate of Completion
const Dailoag = ({course}) => {
  return (
    <div className="dialog-preview-wraper shadow">
      <div className="dailog-details">
        <h3 className="text-capitalize">{course?.title}</h3>
        <span> <span className="bold">author :</span>{course?.author}</span>
        <span className="">
          <span className="bold">Lacture's</span> {course?.lactures}
        </span>
        <span>
          <span className='bold'>Course Duration :</span> {course?.duritation}
        </span>
        <span>
          {" "}
          <span className='bold'>Price :</span> {course?.price}
        </span>
      </div>
      <h4 className='mt-4'>What it includes</h4>
      <div className="what-include">
        <span className="flex items-center ">
          <i className="bi bi-patch-check text-success fs-4 me-2"></i> 30 day
          money back guarantee!
        </span>
        <span className="flex items-center ">
          <i className="bi bi-patch-check text-success fs-4 me-2"></i>
          Lifetime Access. No Limits!
        </span>
        <span className="flex items-center ">
          <i className="bi bi-patch-check text-success fs-4 me-2"></i>
          Lifetime Access. No Limits!
        </span>
      </div>

      <button className="dailog-previev-btn mt-4 shadow">Add To Cart</button>
    </div>
  );
}

export default Dailoag