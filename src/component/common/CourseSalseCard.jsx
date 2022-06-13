import React from 'react'

const CourseSalseCard = ({item}) => {
  return (
    <div className="container top-box-container">
     
          <div className="shadow shadow-box">
            <div className="left">
              <h4 className="text-capitalize ">{item?.title}</h4>
              <h3>{item?.totalPrice}</h3>
              <div className="new">
                <span>{item?.new}</span>
              </div>
            </div>
            <div className="right-img">
              <img src={item?.img} alt="sales" />
            </div>
          </div>
        </div>
       
     
  );
}

export default CourseSalseCard