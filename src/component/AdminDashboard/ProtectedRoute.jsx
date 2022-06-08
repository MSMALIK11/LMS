import React from 'react';
// import Sidebar from './Sidebar';
import Sidebar from '../ProfileDashboard/Sidebar';
import { userAdmin } from '../Routesdata';
const ProtectedRoute = () => {


  return (
    <div>
      <Sidebar routes={userAdmin} />
    </div>
  );
}

export default ProtectedRoute