import { useEffect, useState } from "react";
import "./styles/main.scss";
import Navbar from "./component/Navbar";

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
import ScrollToTop from "react-scroll-to-top";
function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));

    if (user) {
      setLogin(true);
    }
  }, [login]);
  console.log("login ", login);

  const isAdmin = true;

  // userROutes

  return (
    <Provider>
      <ScrollToTop smooth />
      <Router>
        <Navbar />
        <Routes className="mt-2">
          <Route exact path="/" element={<HomePage />} />

          {/* videos lacture routes */}
          <Route exact path="/course" element={<HomeCard />} />
          <Route exact path="course/:title" element={<SingleCourse />} />
          <Route
            exact
            path="/course/:title/:classTitle"
            element={<CoursePlayer />}
          />

          {/* text course route  */}
          <Route
            exact
            path="/textcourse/:id"
            element={<SingleCourseDetails />}
          />
          {/* blog routes */}
          <Route exact path="/blog" element={<HomeBlog />} />
          <Route exact path="blog/:title" element={<SinglePost />} />

          {/* auth route */}
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route
            exact
            path="/Dashboard/profile"
            element={user === "login" ? <Profile /> : <Navigate to="/" />}
          /> */}
          {/* student  dashboard route  */}
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

          {/* admin dashboard  */}

          <Route
            exact
            path="/dashboard"
            element={isAdmin ? <ProtectedRoute /> : <Navigate replace to="/" />}
          >
            <Route
              exact
              path="/dashboard"
              element={<Navigate replace to="profile" />}
            />

            <Route exact path="profile" element={<HomeDashboard />} />
            <Route path="course/add" element={<AddCourse />} />
            <Route path="course/update" element={<UpdateCourse />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
