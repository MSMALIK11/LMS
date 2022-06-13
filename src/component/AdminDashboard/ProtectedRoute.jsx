import React from 'react';
// import Sidebar from './Sidebar';
import Sidebar from '../ProfileDashboard/Sidebar';
import { userAdmin } from '../Routesdata';
import WelcomeInstructor from './component/WelcomeInstructor';
const ProtectedRoute = () => {


  return (
    <div>
      <WelcomeInstructor />
      <Sidebar routes={userAdmin} />
    </div>
  );
}

export default ProtectedRoute