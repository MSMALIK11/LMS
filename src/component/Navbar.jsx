import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faMailBulk,
  faPhone,
  faUserAlt,
  faBars,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";


import avatar from "../images/msmalik.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userSignup, userLogin, userLogout } from "./API/api";
import { Context } from "./context";
import { userLoginAction } from "../Store/Actions/userAction";


import { useDispatch } from "react-redux";

import LoginLodal from "./modalBox/LoginModal";





const Navbar = () => {

  const [opened, setOpened] = useState(false);
 
  const [navActive, setNavActive] = useState("Home");
 
 const dispatch={useDispatch}
 const navigate=useNavigate();

const users=null;
  

  // sign up
  
  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await userLogout();

    toast.success(data.message);

    navigate("/");
  };
  return (
    <header className="shadow">
      <ToastContainer position="top-center" autoClose={4000} />
      <div className="container head">
        <nav className="navbar navbar-expand-lg    p-4 fixed">
          <div className="container-fluid">
            <div className="navbar-brand ">
              <h1>
                <span>G</span>local<span>T</span>echnology
              </h1>
              <p>shipping global minds</p>
            </div>
            <a
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon bg-warning"></span> */}
              <span>
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-dark navbar-toggler-icon"
                />{" "}
              </span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto  text-center mt-sm-5 mt-lg-0 ">
                <li
                  className={`nav-item  ${
                    navActive === "Home" ? "navActive" : ""
                  }`}
                  onClick={() => setNavActive("Home")}
                >
                  <Link to="/" className="link nav-link ">
                    Home
                  </Link>
                </li>
                <li
                  className={`nav-item  ${
                    navActive === "Course" ? "navActive" : ""
                  }`}
                  onClick={() => setNavActive("Course")}
                >
                  <Link to="course" className="link nav-link">
                    Course
                  </Link>
                </li>
                <li
                  className={`nav-item  ${
                    navActive === "Admin" ? "navActive" : ""
                  }`}
                  onClick={() => setNavActive("Admin")}
                >
                  <Link to="/dashboard/profile" className="link nav-link">
                    admin
                  </Link>
                </li>
                {/* <li className="nav-item">
                 
                    <Link to="blog" className="link nav-link">
                      Blog
                    </Link>
                 
                </li> */}
                <li
                  className={`nav-item  ${
                    navActive === "Profile" ? "navActive" : ""
                  }`}
                  onClick={() => setNavActive("Profile")}
                >
                  <Link to="/admin" className=" nav-link">
                    Profile
                  </Link>
                </li>

                {users === null && (
                  <>
                    {" "}
                    <li className="nav-item ">
                      <a
                        onClick={() => setOpened(true)}
                        className="nav-link"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo"
                      >
                        {/* <span className="link">signup</span> */}
                        signup
                      </a>
                    </li>
                  </>
                )}
                {users !== null && (
                  <>
                    <li className="nav-item " onClick={logout}>
                      <a className="nav-link">Logout</a>
                    </li>
                  </>
                )}
                {users !== null && (
                  <>
                    <li className="nav-item ">
                      <a className="nav-link">
                        <span className="link text-capitalize fs-5">
                          {" "}
                          Hi MR.'
                        </span>
                      </a>
                    </li>
                  </>
                )}

                <li
                  className="nav-item "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="dropdown">
                    <img
                      src={avatar}
                      alt=""
                      className=" avatarimg"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />

                    <ul
                      className="dropdown-menu "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <div className="information dropdown-item">
                        {/* {users !== null && (
                          <div>
                            <h4>{users.name}</h4>
                            <h5>{users.email}</h5>
                          </div>
                        )} */}
                      </div>
                      <li>
                        <Link to="/admin" className="dropdown-item">
                          profile
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* login modal open  */}
  
        <LoginLodal opened={opened} setOpened={setOpened} logout={logout} />
    
    </header>
  );
};

export default Navbar;
