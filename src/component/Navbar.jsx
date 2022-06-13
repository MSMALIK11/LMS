import React, { useState, useContext, } from "react";

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
import { Modal } from "react-bootstrap";

import avatar from "../images/msmalik.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userSignup, userLogin, userLogout } from "./API/api";
import { Context } from "./context";
import { userLoginAction } from "../Store/Actions/userAction";
import {useDispatch} from 'react-redux';
import { useCookies } from "react-cookie";


const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const userinitialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const Navbar = () => {
  const [account, setAccount] = useState(accountInitialValues.login);

  const [user, setUser] = useState(userinitialValues);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [navActive,setNavActive]=useState("Home");
   const [cookies, setCookie] = useCookies(["token"]);
const dispatch=useDispatch();
  const toggleAccount = () => {
    setAccount(accountInitialValues.login);
  };

  const togglelogin = () => {
    setAccount(accountInitialValues.signup);
  };

  const users=null;
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleClose = () => setShow(!show);
  // context

  // const { state,  } = useContext(Context);
  // const users = state.user;
  // console.log("user state", users);

  // sign up
  const postData = async (e) => {
    e.preventDefault();
    // console.log(user);
    const res = await userSignup(user);
    // console.log("res", res);

    if (res) {
      toast.success(<div>Congratulations you are successfullly signup</div>, {
        position: "top-center",
        autoClose: 4000,
      });
    } else {
      toast.error(<div>something is wrong</div>, {
        position: "top-center",
        autoClose: 4000,
      });
    }

    setShow(!show);
    // setAccount(accountInitialValues.login);
    navigate("/course");
  };

  // login

  const userLoginHandle = async (e) => {
    e.preventDefault();
    // let res = await userLogin(user);

    dispatch(userLoginAction(user));
    const token = JSON.parse(window.localStorage.getItem("token"));
    setCookie("token", token);
    setShow(!show);
    navigate("/course", { replace: true });
  };
  // logout
  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await userLogout();
    
    toast.success(data.message);

     navigate("/");
     
  };
// custom component
  const SocialLogin = () => {
    return (
      <div className="google-login">
        <button>
          <span>
            <i className="bi bi-google"></i>
          </span>
          <span>Sign Up with Google</span>
        </button>
        <button>
          <span>
            <i className="bi bi-facebook"></i>
          </span>
          <span>Sign Up with Facebook</span>
        </button>
      </div>
    );
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
                        onClick={() => setShow(!show)}
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6 ">
              <div className="left">
                {account.view === "signup" ? (
                  <div>
                    <h1>Signup here </h1>
                    <h3 className="ms-4 mt-5">
                      looks like you are
                      <br /> new here.{" "}
                    </h3>

                    {<SocialLogin />}
                  </div>
                ) : (
                  <div>
                    <h1>Login </h1>
                    <h3>looks like you are new here</h3>

                    {<SocialLogin />}
                  </div>
                )}
              </div>
            </div>
            {/* signup   form */}
            <div className="col-md-6">
              {account.view === "signup" ? (
                <form method="Post">
                  <div class="input-wraper mb-5">
                    <div className="icon me-3">
                      <FontAwesomeIcon icon={faUserAlt} className="icons" />
                    </div>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={getUserData}
                      placeholder="Enter Your Name"
                      className=""
                      required
                    />
                  </div>
                  <div class="input-wraper mb-5">
                    <div className="icon me-3">
                      <FontAwesomeIcon icon={faMailBulk} className="icons" />
                    </div>

                    <input
                      type="text"
                      id="name"
                      name="email"
                      value={user.email}
                      onChange={getUserData}
                      placeholder="Enter Your Email"
                      className=""
                      required
                    />
                  </div>
                  <div class="input-wraper mb-5">
                    <div className="icon me-3">
                      <FontAwesomeIcon icon={faLock} className="icons" />
                    </div>

                    <input
                      type="text"
                      id="name"
                      name="password"
                      value={user.password}
                      onChange={getUserData}
                      placeholder="Enter Your Password"
                      className=""
                      required
                    />
                  </div>
                  <div class="input-wraper mb-5">
                    <div className="icon me-3">
                      {" "}
                      <FontAwesomeIcon icon={faPhone} className="icons" />
                    </div>

                    <input
                      type="text"
                      id="name"
                      name="phone"
                      value={user.phone}
                      onChange={getUserData}
                      placeholder="Enter Your phone"
                      className=""
                      required
                    />
                  </div>
                  {/* file upload for signup */}
                  <div className="input-wraper mb-5">
                    <label for="formFile" className="form-label me-2">
                      {" "}
                      <FontAwesomeIcon icon={faPhotoVideo} className="icons" />
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                  <button className="signinbtn mb-5" onClick={postData}>
                    Signup{" "}
                  </button>
                  <h5>
                    Already have An Account{" "}
                    <a className="text-primary cursor" onClick={toggleAccount}>
                      Login here
                    </a>
                  </h5>
                </form>
              ) : (
                <form>
                  <div className="input-wraper mb-5">
                    <div className="icon me-3">
                      <FontAwesomeIcon icon={faMailBulk} className="icons" />
                    </div>

                    <input
                      type="text"
                      id="name"
                      name="email"
                      value={user.email}
                      onChange={getUserData}
                      placeholder="Enter Your Email"
                      className=""
                    />
                  </div>
                  <div className="input-wraper mb-5">
                    <div className="icon me-3">
                      <FontAwesomeIcon icon={faLock} className="icons" />
                    </div>

                    <input
                      type="text"
                      id="name"
                      name="password"
                      value={user.password}
                      onChange={getUserData}
                      placeholder="Enter Your Password"
                      className=""
                    />
                  </div>
                  <button
                    className="signinbtn mb-5"
                    data-dismiss="modal"
                    onClick={userLoginHandle}
                  >
                    Login
                  </button>
                  <div>
                    Don,t have an Account
                    <a className="text-primary cursor" onClick={togglelogin}>
                      Create Account
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="text-center p-3 text-light bg-warning">
            <h3 className="text-capitalize">
              Don't worry your information will be secure{" "}
            </h3>
          </div>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Navbar;
