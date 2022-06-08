import express from "express";
import {
  addLesson,
  addNewCourse,
  deleteLessons,
  getAdminAllCourse,
} from "../controller/courseController.js";
import {
  signup,
  userLogin,
  userLogout,
  currentUser,
} from "../controller/usercontroller.js";
import { isAuthenticated } from "../middleware/index.js";

const router = express.Router();

router.route("/signup").post(signup).get(userLogin);
router.route("/login").post(userLogin);
router.route("/logout").get(userLogout);
router.route("/profile").get(isAuthenticated, currentUser);

// course route

router.route("/course/add").post(isAuthenticated, addNewCourse);
router.route("/course/get").get(isAuthenticated, getAdminAllCourse);
router.route("/course/lesson/:slug").post(isAuthenticated, addLesson);
// dcelete lessons
router.route("/course/lesson/:id").delete(isAuthenticated,deleteLessons);

export default router;
