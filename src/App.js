import { useEffect, useState } from "react";
import "./styles/main.scss";
import Navbar from "./component/Navbar";
import axios from "axios";
import HomeCard from "./component/HomeCard.jsx";
import SingleCourse from "./component/SingleCourse.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursePlayer from "./pages/CoursePlayer";

import SingleCourseDetails from "./component/TextCourse/SingleCourseDetails";
import HomeBlog from "./component/blog/HomeBlog";
import SinglePost from "./component/blog/SinglePost";

import Profile from "./component/ProfileDashboard/Profile";
import { Provider } from "./component/context";
import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
import { Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Sidebar from "./component/ProfileDashboard/Sidebar";
import Mylearning from "./component/ProfileDashboard/Mylearning";
import ProtectedRoute from "./component/AdminDashboard/ProtectedRoute";

import AddCourse from "./component/AdminDashboard/AddCourse";
import { userRoutes } from "./component/Routesdata";
import UpdateCourse from "./component/AdminDashboard/UpdateCourse";
import HomeDashboard from "./component/AdminDashboard/HomeDashboard";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import { loadUserProfile } from "./Store/Actions/userAction";
import { getCourses } from "./Store/Actions/courseAction";
import HomeTopBanner from "./component/HomeTopBanner";
import AddLesson from "./component/AdminDashboard/AddLesson";

axios.defaults.withCredentials = true;
function App() {
 
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(loadUserProfile());
    dispatch(getCourses());
  }, [dispatch]);


  const isAdmin = true;
const login=true;
  // userROutes
 

  return (
    <Provider>
      <ScrollToTop smooth />
      <Router>
        {/* <Navbar /> */}
        <div>
          <Routes>
            {/* demo */}
            <Route path="/" element={<HomePage />}>
              <Route exact path="/" element={<Navigate replace to="/home" />} />
              <Route exact path="home" element={<HomeTopBanner />} />
              <Route exact path="course" element={<HomeCard />} />
              <Route exact path="course/:title" element={<SingleCourse />} />
             
            </Route>

            {/* start */}

            {/* student dashboard */}
            <Route path="/admin" element={<Sidebar routes={userRoutes} />}>
              <Route
                exact
                path="/admin"
                element={
                  login === true ? (
                    <Navigate replace to="profile" />
                  ) : (
                    <Navigate replace to="/" />
                  )
                }
              />
              <Route exact path="profile" element={<Profile />} />
              <Route exact path="courses" element={<Mylearning />} />
            </Route>

            {/* instructor  dashboard  */}

            <Route
              exact
              path="/dashboard"
              element={
                isAdmin ? <ProtectedRoute /> : <Navigate replace to="/" />
              }
            >
              <Route
                exact
                path="/dashboard"
                element={<Navigate replace to="profile" />}
              />

              <Route exact path="profile" element={<HomeDashboard />} />
              <Route path="course/add" element={<AddCourse />} />
              <Route path="course/update" element={<UpdateCourse />} />
              <Route path="course/lesson/add/:id" element={<AddLesson />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
