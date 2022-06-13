import React from 'react';
import img from '../../../images/img-4.jpg'
import { Link ,useNavigate} from 'react-router-dom';

const AdminCard = ({course}) => {
  const navigate = useNavigate();
  return (
    <div className="admin-card-wraper mb-4">
      <div className="shadow admin-course-card ">
        <span className=" badge-custom-class">Pending</span>
        <img
          src={course?.image.url}
          alt=""
          width="100%"
          className="img-fluid"
        />
        <div className="card-body">
          {/* <Link className='nav-link text-dark fs-4 text-capitalize'  to={`course/lesson/add/${course._id}`}>{course?.title}</Link>
           */}
          <h4 onClick={()=> navigate(`/dashboard/course/lesson/add/${course._id}`,{replace:true})}>{course?.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default AdminCard