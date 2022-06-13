import React from 'react'
import AdminCard from './AdminCard';
import { useSelector } from 'react-redux';
import Loading from '../../common/Loading'
const AdminListOfCard = () => {
    const courseData=[1,2,3];
    const {loading,courses}=useSelector((state)=> state.courses);
    console.log('data',loading,courses);
  return (
    <div>
      <div className="row">
        {loading  ? (
          <Loading />
        ) : (
          courses && courses.course.map((course, i) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={course._id}>
                <AdminCard course={course} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default AdminListOfCard