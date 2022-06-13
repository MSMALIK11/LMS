//  design common css
import React from 'react'
import CourseSalseCard from './CourseSalseCard';

import img1 from '../common/images/totalsale.svg';
import img2 from '../common/images/totalenroll.svg';
import img3 from '../common/images/totalcourse.svg';
import img4 from '../common/images/totalstudent.svg'
const CourseTotalCard = () => {

   
    const data = [
      {
        id:1,
        title: "total sales",
        totalPrice: "$350",
        new: "$50",
        img: img1,
      },
      {
        id:2,
        title: "total enroll",
        totalPrice: "130",
        new: "101",
        img: img2,
      },
      {
        id:3,
        title: "total courses",
        totalPrice: "130",
        new: "5",
        img: img3,
      },
      {
        id:4,
        title: "total student",
        totalPrice: "2650",
        new: "245",
        img: img4,
      },
    ];
  return (
    <div>
        <div className="row">
            {data && data.map((item)=>{
                return <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <CourseSalseCard item={item} />
                </div>;
            })}
           
        </div>
    </div>
  )
}

export default CourseTotalCard