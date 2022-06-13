import React from 'react'

import AdminListOfCard from './component/AdminListOfCard'
import CourseTotalCard from '../common/CourseTotalCard';
const HomeDashboard = () => {
  return (
    <div className=" p-4 instructor">
      <h3> Instructor Dashboard</h3>
      <CourseTotalCard />

      <div className="admin-home-wraper mt-3">
        <h3 className="text-danger text-capitalize">pending course</h3>

        <AdminListOfCard />
      </div>
    </div>
  );
}

export default HomeDashboard