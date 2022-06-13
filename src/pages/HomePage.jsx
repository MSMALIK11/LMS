import React from "react";
import { Outlet } from "react-router-dom";

import HomeTopBanner from "../component/HomeTopBanner";
import Navbar from "../component/Navbar";
const HomePage = () => {
  return (
    <>
    <Navbar />
<Outlet />

      {/* <HomeTopBanner /> */}
    </>
  );
};

export default HomePage;
