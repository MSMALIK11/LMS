import React, { useState} from "react";

import { Modal, useMantineTheme } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faMailBulk,
  faPhone,
  faUserAlt,
  faBars,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "./SocialLogin";
import { useCookies } from "react-cookie";
import { userSignup, userLogin, userLogout } from "../API/api";
import { userLoginAction } from "../../Store/Actions/userAction";
const userinitialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

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

const LoginModal = ({ opened, setOpened}) => {
  const theme = useMantineTheme();
    const [account, setAccount] = useState(accountInitialValues.login);

    const [user, setUser] = useState(userinitialValues);
     const [cookies, setCookie] = useCookies(["token"]);
     const dispatch = useDispatch();
     const navigate = useNavigate();
 const toggleAccount = () => {
   setAccount(accountInitialValues.login);
 };

 const togglelogin = () => {
   setAccount(accountInitialValues.signup);
 };
   const users = null;
   let name, value;
   const getUserData = (e) => {
     name = e.target.name;
     value = e.target.value;
     setUser({ ...user, [name]: value });
   };
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

     setOpened(false);
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
     setOpened(false);
     navigate("/course", { replace: true });
   };
   // logout
   

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      marginTop="30%"
    >
      {/* Modal content */}

      <div className="row login-modal-wraper">
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
            <form>
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

      

   
    </Modal>
  );
};

export default LoginModal;
